// src/components/TodoApp.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Валідаційна схема з використанням zod
const schema = z.object({
  task: z
    .string()
    .min(5, "Завдання повинне містити не менше 5 символів")
    .nonempty("Це поле обов’язкове"),
});

function TodoApp() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const [todos, setTodos] = useState([]);

  const onSubmit = (data) => {
    setTodos([...todos, data.task]);
    reset();
  };

  return (
    <div>
      <h2>TODO List</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Введіть нове завдання"
            {...register("task")}
          />
          {errors.task && <div style={{ color: 'red' }}>{errors.task.message}</div>}
        </div>
        <button type="submit">Додати</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
