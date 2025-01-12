import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [values, setValue] = React.useState("");

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

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index];
    setValue(valueToBeEdited);
    handleDeleteTodos(index);
  }

  return (
    <>
      <TodoInput
        values={values}
        setValue={setValue}
        handleAddTodos={handleAddTodos}
      ></TodoInput>
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
      ></TodoList>
    </>
  );
}

export default App;
