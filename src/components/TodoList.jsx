import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteTodos } = props;
  return (
    <ul className="main">
      {todos.map((t, index) => (
        <TodoCard {...props} key={index} index={index}>
          <p>{t}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
