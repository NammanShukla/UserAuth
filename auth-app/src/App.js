import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AuthPanel from "./components/AuthPanel";

import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AuthProvider>
      <div className={`app ${theme}`}>
        <header className="header">
          <h1>A Very Simple Authentication App</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </header>
        <AuthPanel />
      </div>
    </AuthProvider>
  );
};

export default App;
