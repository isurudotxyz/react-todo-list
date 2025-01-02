import React from "react";

export default function TodoList() {
  let todos = ["Study programming", "Eat healthier", "Go to the gym"];

  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <li className="todoItem" index={index}>
          {todo}
        </li>
      ))}
    </ul>
  );
}
