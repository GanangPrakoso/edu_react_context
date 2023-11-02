import { useContext } from "react";
import ThemeContext from "../context/themeContext";

export default function Navbar() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <nav className={`navbar ${theme[theme.currentTheme].bgColor}`}>
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <button
            className={theme[theme.currentTheme].buttonTheme}
            onClick={theme.toggleTheme}
          >
            Toggle to {theme.currentTheme === "dark" ? "light" : "dark"}
          </button>
        </div>
      </nav>
    </>
  );
}
