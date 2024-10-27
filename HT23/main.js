const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Шлях до файлу data.txt
const dataFilePath = path.join(__dirname, 'data.txt');

// Функція для читання даних з файлу
const readDataFromFile = () => {
  if (fs.existsSync(dataFilePath)) {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data || '[]');
  }
  return [];
};

// Функція для запису даних у файл
const writeDataToFile = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Створення файлу, якщо його не існує
if (!fs.existsSync(dataFilePath)) {
  writeDataToFile([]);
}

const server = http.createServer((req, res) => {
  // Розбір URL та параметрів
  const parsedUrl = url.parse(req.url, true); // true для парсингу параметрів запиту
  const { method } = req;
  const query = parsedUrl.query;

  // Установка заголовків
  res.setHeader('Content-Type', 'application/json');

  // GET /items або з параметром ?name=Alex
  if (method === 'GET' && parsedUrl.pathname === '/') {
    if (query.name) {
      res.writeHead(200);
      res.end(JSON.stringify({ message: `Hello, ${query.name}!` }));
    } else {
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'Hello, World!' }));
    }
  }

  // GET /items - Виведення всіх елементів
  else if (method === 'GET' && parsedUrl.pathname === '/items') {
    const items = readDataFromFile();
    res.writeHead(200);
    res.end(JSON.stringify(items));

  // POST /items - Додавання нового елемента
  } else if (method === 'POST' && parsedUrl.pathname === '/items') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name } = JSON.parse(body);
      const items = readDataFromFile();

      // Генерація нового ID
      const newItemId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1; // Знаходимо максимальний ID і додаємо 1

      const newItem = { id: newItemId, name }; // Створюємо новий елемент
      items.push(newItem);
      writeDataToFile(items);
      res.writeHead(201);
      res.end(JSON.stringify(newItem));
    });

  // PUT /items/:id - Оновлення елемента за id
  } else if (method === 'PUT' && parsedUrl.pathname.startsWith('/items/')) {
    const id = parseInt(parsedUrl.pathname.split('/')[2], 10);
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name } = JSON.parse(body);
      const items = readDataFromFile();
      const item = items.find(i => i.id === id);

      if (item) {
        item.name = name;
        writeDataToFile(items);
        res.writeHead(200);
        res.end(JSON.stringify(item));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Item not found' }));
      }
    });

  // DELETE /items/:id - Видалення елемента за id
  } else if (method === 'DELETE' && parsedUrl.pathname.startsWith('/items/')) {
    const id = parseInt(parsedUrl.pathname.split('/')[2], 10);
    
    // Перевірка на валідність ID
    if (isNaN(id)) {
      res.writeHead(400);
      res.end(JSON.stringify({ message: 'Invalid ID' }));
      return;
    }

    const items = readDataFromFile();
    const index = items.findIndex(i => i.id === id);

    if (index !== -1) {
      items.splice(index, 1); 
      writeDataToFile(items);
      res.writeHead(204);
      res.end(); 
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Item not found' }));
    }

  // Невірний маршрут 
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

// Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
