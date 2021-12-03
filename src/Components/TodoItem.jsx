import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./styles/TodoItem.css";

const TodoItem = ({ text, isCompleted, toggleCompleteTodo, deleteTodo }) => {
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;
  const checkIcon = <FontAwesomeIcon icon={faCheck} />;

  /* 
  // const [textStyle] = useState(isCompleted ? "text--Completed" : null);
  // const [checkStyle] = useState(
  //   isCompleted ? "icon icon-Check icon-Check--Completed" : "icon icon-Check"
  // ); */

  return (
    <li>
      <span
        className={`icon icon-Check ${isCompleted && "icon-Check--Completed"}`}
        onClick={toggleCompleteTodo}
      >
        {checkIcon}
      </span>
      <p className={`text ${isCompleted && "text--Completed"}`}>{text}</p>
      <span className="icon icon-Delete" onClick={deleteTodo}>
        {trashIcon}
      </span>
    </li>
  );
};

export { TodoItem };
