import './styles/TodoList.css'

const TodoList = ({children}) => {
  return (
      <ul>
          {children}
      </ul>
  );
};
export { TodoList };
