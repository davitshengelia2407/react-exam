import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.about}>
      <div className={styles.story}>
        <p>About us</p>
        <h1>Small classes, direct feedback, and projects people actually finish.</h1>
        <span>Skillhouse is a practice-first learning space for web developers. The platform keeps the catalog simple, the lessons structured, and every course connected to portfolio-ready work.</span>
      </div>
      <div className={styles.cards}>
        <article><strong>01</strong><h2>Quality courses</h2><p>Clear lessons, realistic tasks, and code reviews.</p></article>
        <article><strong>02</strong><h2>Expert lecturers</h2><p>Mentors with production experience guide each track.</p></article>
        <article><strong>03</strong><h2>Career growth</h2><p>Students leave with projects, confidence, and next steps.</p></article>
      </div>
    </section>
  );
}

export default AboutUs;
