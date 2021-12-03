/* Components */
import { TodoProvider } from "./Contexts/TodoContext";
import { AppUI } from "./Components/AppUI";

/* Data */
// /* const defaultTodos = [
//   { text: "Learn React", isCompleted: false },
//   { text: "Make a react app", isCompleted: false },
//   { text: "Chill", isCompleted: false },
//   { text: "Jugar", isCompleted: true },
//   { text: "Leer Mangas", isCompleted: false },
// ]; */

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
