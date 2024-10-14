import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      return prev.map((t) => (t.id === id ? { ...t, ...todo } : t));
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
    });
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </TodoProvider>
  );
}

export default App;
