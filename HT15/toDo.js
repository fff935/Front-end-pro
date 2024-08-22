let i = 0;

const inputBtn = document.querySelector(".js--inputBtn");
const input = document.querySelector(".js--input");
const todosWrapper = document.querySelector(".js--todos-wrapper");


function addTaskToDOM(taskObject) {
  const task = document.createElement("li");
  task.classList.add(`task${taskObject.id}`, "todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = taskObject.completed;

  const span = document.createElement("span");
  span.classList.add("todo-item__description");
  span.textContent = taskObject.description;

  const delBtn = document.createElement("button");
  delBtn.classList.add("todo-item__delete");
  delBtn.textContent = "Видалити";

  task.appendChild(checkbox);
  task.appendChild(span);
  task.appendChild(delBtn);

  todosWrapper.appendChild(task);

  
  delBtn.addEventListener("click", function () {
    todosWrapper.removeChild(task);
    removeTaskFromStorage(taskObject.id);
  });

 
  checkbox.addEventListener("change", function () {
    updateTaskStatus(taskObject.id, checkbox.checked);
  });
}


function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(taskObject => {
    addTaskToDOM(taskObject);
    i = taskObject.id > i ? taskObject.id : i;
  });
}


inputBtn.addEventListener("click", function () {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTask = {
    id: ++i,
    description: input.value,
    completed: false
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  addTaskToDOM(newTask);

  input.value = "";
});


function removeTaskFromStorage(id) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function updateTaskStatus(id, completed) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.map(task => task.id === id ? { ...task, completed } : task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


loadTasks();
