import { useTheme } from "../ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "☀️" : "🌙"} Mode
    </button>
  );
};

export default ThemeToggle;
