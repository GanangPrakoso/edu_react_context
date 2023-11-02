import { useContext } from "react";
import ThemeContext from "../context/themeContext";

export default function Navbar() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand"></a>
          <button className="btn btn-primary">Toggle theme</button>
        </div>
      </nav>
    </>
  );
}
