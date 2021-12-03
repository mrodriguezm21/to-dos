import { useContext } from "react";

import "./styles/TodoCounter.css";

/* Context */
import { Context } from "../Contexts/TodoContext";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(Context);
  return (
    <h1 className="counter">
      Has completado {completedTodos} de {totalTodos} TO DO's
    </h1>
  );
};
export { TodoCounter };
