import { NavLink } from "react-router-dom";
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
      </nav>
    </header>
  );
}

export default Header;
