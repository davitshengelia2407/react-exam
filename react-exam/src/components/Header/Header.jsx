import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navUl">
          <li className="navItem">
            <NavLink className="navLink" to="/about-us">
              About Us
            </NavLink>
          </li>

          <li className="navItem">
            <NavLink className="navLink" to="/courses">
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;