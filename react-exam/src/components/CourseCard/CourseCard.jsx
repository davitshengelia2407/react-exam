<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({
  id,
  title,
  lecturer,
  duration,
  price,
  level,
  onAddFavorite,
}) {
  const navigate = useNavigate();
=======
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045

function CourseCard({ course, onAddToCart, inCart }) {
  return (
<<<<<<< HEAD
    <div className="courseCard">
      <h2>{title}</h2>
      <p>
        <span className="label">Lecturer:</span> {lecturer}
      </p>
      <p>
        <span className="label">Duration:</span> {duration}
      </p>
      <p>
        <span className="label">Level:</span> {level}
      </p>
      <p className="price">${price}</p>

      <div className="cardBtns">
        <button
          className="detailsBtn"
          onClick={() => navigate(`/course-details/${id}`)}
        >
          View Details
        </button>
        <button className="favBtn" onClick={onAddFavorite}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
=======
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
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
