import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    console.log(todos);
  }
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}></TodoInput>
      <TodoList todos={todos}></TodoList>
    </>
  );
}

export default App;
