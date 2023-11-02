import { useState } from "react";
import AnimePage from "./pages/AnimePage";
import Navbar from "./components/Navbar";
import ThemeContext from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeContext.Provider
        value={{
          currentTheme: theme,
          toggleTheme,
          light: {
            buttonTheme: "btn btn-light",
            bgColor: "bg-light",
            fontColor: "text-dark",
          },
          dark: {
            buttonTheme: "btn btn-dark",
            bgColor: "bg-dark",
            fontColor: "text-light",
          },
        }}
      >
        <Navbar />
        <AnimePage />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
