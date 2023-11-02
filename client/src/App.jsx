import { useState } from "react";
import AnimePage from "./pages/AnimePage";
import Navbar from "./components/Navbar";
import ThemeContext from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider
        value={{
          currentTheme: "dark",
        }}
      >
        <Navbar />
        <AnimePage />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
