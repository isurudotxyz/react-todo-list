import React from "react";

export default function TodoCard({ todo }) {
  return (
    <li className="todoItem">
      <p>{todo}</p>
      <div className="actionsContainer">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
}
