import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/form";
import Todo from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null ) {
      localStorage.setItem("todos", JSON.stringify([]));
      console.log("Its null")
    } else {
      const saved = JSON.parse(localStorage.getItem("todos"));
      console.log(saved);
      
      saved.length > 0 && setTodos(saved);
      // console.log("Its not null")
    }
  };

  return (
    <div className="App">
      <header>
        <h1> 42 scheduler </h1>
      </header>
      <Form
        filterHandler={filterHandler}
        setStatus={setStatus}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <Todo filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
