import "./styles/CreateTodoButton.css";
const CreateTodoButton = ({ setOpenModal }) => {
  const handleClick = () => {
    setOpenModal(prev => !prev);
  };
  return (
    <button className="button" onClick={handleClick}>
      <span>Agregar To Do</span>
    </button>
  );
};
export { CreateTodoButton };
