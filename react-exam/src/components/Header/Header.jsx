import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  return (
    <header className="header">
      <nav className="nav">
        <span className="logoText">CourseApp</span>
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
              to="/add-course"
            >
              Add Course
            </NavLink>
          </li>
        </ul>
        <div className="favBadge">Favorites: {favoritesCount}</div>
      </nav>
    </header>
  );
}

export default Header;
