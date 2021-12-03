import { createContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const Context = createContext();

const TodoProvider = (props) => {
  const [todos, saveTodos] = useLocalStorage("todos_v1", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  /* Handlers */

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  let totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchTerm.length > 2) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  const toggleCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, isCompleted: false });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const todolistEmpty = (total, searched) => {
    if (!total) {
      return <p>Crea tu primer to do</p>;
    } else {
      if (!searched.length) {
        return <p>No hay to dos que cumplan con la búsqueda</p>;
      }
    }
  };

  return (
    <Context.Provider
      value={{
        completedTodos,
        totalTodos,
        searchTerm,
        setSearchTerm,
        searchedTodos,
        toggleCompleteTodo,
        addTodo,
        deleteTodo,
        todolistEmpty,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { TodoProvider, Context };
