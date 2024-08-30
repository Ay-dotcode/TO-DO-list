import { useState } from "react";
import { NewTodoForm } from "./Components/NewTodoForm";
import TodoList from "./Components/TodoList";

export default function App() {

  const [todos, setTodos] = useState([]);





  return (
    <>
      <NewTodoForm setTodos={setTodos} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}


