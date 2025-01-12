import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodos, handleEditTodos, index } = props;
  return (
    <li className="todoItem">
      <p>{children}</p>
      <div className="actionsContainer">
        <button
          onClick={(e) => {
            handleEditTodos(index);
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={(e) => {
            handleDeleteTodos(index);
          }}
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
