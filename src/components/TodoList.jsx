import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  return (
    <ul className="main">
      {todos.map((t, index) => (
        <TodoCard key={index} todo={t}></TodoCard>
      ))}
    </ul>
  );
}
