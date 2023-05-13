"use client";

import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState("");
  const [todo, setTodo] = useState("");

  const getTodos = async () => {
    try {
      const result = await fetch("http://localhost:8080/todos");
      const data = await result.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async () => {
    let todoObj = {
      title: todo,
      status: false,
    };
    try {
      const result = await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoObj),
      });
      const data = await result.json();
      getTodos()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
    console.log(todos, 'use Effect')
  }, []);

 
  return (
    <div>
      Todos
      <input
        type="text"
        placeholder="Type a Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {
        todos && todos.map((t) => {
          return (
            <div style={{ display: "flex", gap: "20px" }}>
              <h1>Title:{t.title} </h1>
              {t.status ? <p>Completed</p> : <p> Pending</p>}
            </div>
          );
          
        })
      }
    </div>
  );
};

export default Todos;
