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

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  function editDeleteTodos(index) {}

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}></TodoInput>
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos}></TodoList>
    </>
  );
}

export default App;
