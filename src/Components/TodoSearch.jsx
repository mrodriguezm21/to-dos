import { useContext } from "react";
/* Context */
import { Context } from "../Contexts/TodoContext";
/* Styles */
import "./styles/TodoSearch.css";

const TodoSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(Context);

  const handleSearchTermChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  return (
    <input
      placeholder="Busqueda"
      className="searchBar"
      value={searchTerm}
      onChange={handleSearchTermChange}
    ></input>
  );
};
export { TodoSearch };
