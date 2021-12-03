import { useContext } from "react";
/* Context */
import { Context } from "../Contexts/TodoContext";
/* Components */
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import {TodoForm} from './TodoForm'

import "./styles/AppUI.css";

const AppUI = () => {
  const {
    totalTodos,
    searchedTodos,
    deleteTodo,
    toggleCompleteTodo,
    todolistEmpty,
    openModal,
    setOpenModal,
  } = useContext(Context);

  return (
    <div className="TodoContainer">
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todolistEmpty(totalTodos, searchedTodos)}

        {searchedTodos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            isCompleted={item.isCompleted}
            toggleCompleteTodo={() => toggleCompleteTodo(item.text)}
            deleteTodo={() => deleteTodo(item.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
export { AppUI };
