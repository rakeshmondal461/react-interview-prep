import "./App.css";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TaskList />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
