import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink className="logoText" to="/">
          CourseApp
        </NavLink>

        <ul className="navUl">
          <li className="navItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
              to="/courses"
            >
              Courses
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
              to="/courses/new"
            >
              Add Course
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navLink active" : "navLink"
              }
              to="/cart"
            >
              Cart ({cartCount})
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
