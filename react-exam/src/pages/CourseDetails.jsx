import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "../redux/hooks";
import { loadCoursesOnce } from "../services/coursesStorage";
import styles from "./CourseDetails.module.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    loadCoursesOnce()
      .then((data) => setCourse(data.find((item) => item.id === id)))
      .catch((error) => console.error("Could not load course", error));
  }, [id]);

  const handleEnroll = useCallback(() => {
    if (course) dispatch(addToCart(course));
  }, [course, dispatch]);

  if (!course) return <p className={styles.loading}>Loading course...</p>;

  return (
    <section className={styles.detailsSection}>
      <Link to="/courses" className={styles.back}>← Back to catalog</Link>
      <div className={styles.detailsCard}>
        <h1>{course.coursesTitle}</h1>
        <p>
          <strong>Lecturer:</strong> {course.lecturer}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Level:</strong> {course.level}
        </p>
        <p>
          <strong>Price:</strong> ${course.price}
        </p>
        <p className={styles.description}>
          This course provides practical knowledge and helps students build
          real-world development skills through structured lessons and
          projects.
        </p>
        <button className={styles.enrollBtn} onClick={handleEnroll}>Enroll Now</button>
      </div>
    </section>
  );
}

export default CourseDetails;
