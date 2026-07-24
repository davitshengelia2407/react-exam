import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.kicker}>React exam project</p>
        <h1>Practical courses without the boring platform feeling.</h1>
        <p className={styles.copy}>Browse lessons, filter by category, open dynamic details, and collect courses in a Redux Toolkit cart.</p>
        <div className={styles.actions}><Link to="/courses">Explore courses</Link><Link to="/courses/new">Add new course</Link></div>
      </div>
      <div className={styles.panel}><span>6</span><p>curated starter courses loaded with Fetch API</p></div>
    </section>
  );
}

export default Home;
