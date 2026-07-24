import { NavLink } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { useSelector } from "../../redux/hooks";
import styles from "./Header.module.css";

function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <header className={styles.header}>
      <NavLink className={styles.brand} to="/">Skillhouse</NavLink>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink className={styles.link} to="/courses">Courses</NavLink>
        <NavLink className={styles.link} to="/courses/new">Add course</NavLink>
        <NavLink className={styles.link} to="/about-us">About</NavLink>
        <NavLink className={styles.cartLink} to="/cart">Cart <span>{cartCount}</span></NavLink>
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
      </nav>
    </header>
  );
}

export default Header;
