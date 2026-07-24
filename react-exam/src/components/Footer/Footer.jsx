<<<<<<< HEAD
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Course Learning Platform - React Exam Project</p>
      <p className="footerSmall">2026</p>
=======
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Skillhouse Academy. Built for practical web learning.</p>
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
    </footer>
  );
}

export default Footer;
