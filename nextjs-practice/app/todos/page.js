"use client";

import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState("");

  const getTodos = async () => {
    try {
      const result = await fetch("http://localhost:8080/todos");
      const data = await result.json();
      setTodos(data);
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return <div>Todos</div>;
};

export default Todos;
