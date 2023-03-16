import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <i className="icon"></i>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
