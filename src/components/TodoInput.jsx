import React from "react";

export default function TodoInput(props) {
  const [values, setValue] = React.useState("");
  const { handleAddTodos } = props;
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
