import React from "react";

export default function TodoInput(props) {
  const { handleAddTodos, values, setValue } = props;
  return (
    <header>
      <input
        value={values}
        placeholder="Enter to do..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(values);
          console.log();
        }}
      >
        Add
      </button>
    </header>
  );
}
