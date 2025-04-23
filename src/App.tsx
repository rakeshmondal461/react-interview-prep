import "./App.css";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <ThemeProvider>
        <div className="App">
          <TaskList />
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
