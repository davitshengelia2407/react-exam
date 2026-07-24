import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "../redux/hooks";

import styles from "./CourseDetails.module.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {

    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => setCourse(data.find((item) => item.id === id)))
      .catch((error) => console.error("Could not load course", error));
  }, [id]);

  const handleEnroll = useCallback(() => {
    if (course) dispatch(addToCart(course));
  }, [course, dispatch]);

  if (!course) return <p className={styles.loading}>Loading course...</p>;

  return (
    <section className={styles.details}>
      <Link to="/courses" className={styles.back}>← Back to catalog</Link>
      <div className={styles.card}>
        <p className={styles.kicker}>{course.category} / {course.level}</p>
        <h1>{course.coursesTitle}</h1>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.facts}><span>{course.lecturer}</span><span>{course.duration}</span><span>{course.students} students</span><span>${course.price}</span></div>
        <button onClick={handleEnroll}>Add to cart</button>
      </div>
    </section>
  );
}

export default CourseDetails;
