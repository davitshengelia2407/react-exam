import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

function CourseCard({ course, onAddToCart, inCart }) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>{course.category} · {course.level}</div>
      <h2>{course.coursesTitle}</h2>
      <p className={styles.description}>{course.description}</p>
      <dl className={styles.stats}>
        <div><dt>Lecturer</dt><dd>{course.lecturer}</dd></div>
        <div><dt>Duration</dt><dd>{course.duration}</dd></div>
        <div><dt>Rating</dt><dd>{course.rating}</dd></div>
      </dl>
      <div className={styles.footer}>
        <strong>${course.price}</strong>
        <Link to={`/course-details/${course.id}`}>Details</Link>
        <button onClick={() => onAddToCart(course)} disabled={inCart}>{inCart ? "Added" : "Add"}</button>
      </div>
    </article>
  );
}

export default memo(CourseCard);
