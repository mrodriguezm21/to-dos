/* Components */
import { TodoProvider } from "./Contexts/TodoContext";
import { AppUI } from "./Components/AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
