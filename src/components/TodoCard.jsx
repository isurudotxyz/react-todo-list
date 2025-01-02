import React from "react";

export default function TodoCard({ todo, index }) {
  return (
    <li className="todoItem" key={index}>
      {todo}
    </li>
  );
}
