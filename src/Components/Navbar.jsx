//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { Link } from "react-router-dom";
import { useGlobalState } from "../Context/Context";

const Navbar = () => {
  const { state, dispatch } = useGlobalState();
  const { theme } = state;
  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };
  return (
    <nav className={theme}>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className="navContainer">
        <Link to="/">
          <img className="navLogo" src="/DH.ico" />
        </Link>
        <Link to="/">
          <h2 className={theme}>Home</h2>
        </Link>
        <Link to="/contact">
          <h2 className={theme}>Contacto</h2>
        </Link>
        <Link to="/favs">
          <h2 className={theme}>Favoritos</h2>
        </Link>
        <button
          className={theme === "light" ? "btnTheme" : "btnThemeSun"}
          onClick={changeTheme}
        >
          {theme === "light" ? (
            <i className="bx bxs-moon"></i>
          ) : (
            <i className="bx bxs-sun"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
