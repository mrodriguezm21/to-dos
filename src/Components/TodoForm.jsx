import { useContext, useState } from "react";
import { Context } from "../Contexts/TodoContext";

import "./styles/TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(Context);

  const handleValueChange = ({ target: { value } }) => {
    setNewTodoValue(value);
  };

  const handleOnCancel = () => {
    setOpenModal((prev) => !prev);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!newTodoValue) {
       alert("El campo esta vacio"); 
       return;
    }
    addTodo(newTodoValue);
    setOpenModal((prev) => !prev);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label>Escribe el TO DO</label>
      <textarea
        value={newTodoValue}
        onChange={handleValueChange}
        placeholder="Realizar la tarea de matematicas"
      ></textarea>
      <div className="form-buttonContainer">
        <button
          onClick={handleOnCancel}
          type="button"
          className="button formButton formButton--cancel"
        >
          <span>Cancelar</span>
        </button>
        <button type="submit" className="button formButton formButton--add">
          <span>Añadir</span>
        </button>
      </div>
    </form>
  );
};
export { TodoForm };
