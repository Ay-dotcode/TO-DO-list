import { useEffect, useState } from "react";
import { NewTodoForm } from "./Components/NewTodoForm";
import TodoList from "./Components/TodoList";

export default function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return (
    <>
      <NewTodoForm setTodos={setTodos} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}


