// <<<<<<< HEAD
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { getCourseById, API_URL } from "../utils/coursesStorage";
// import "./CourseDetails.css";
// =======
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "../redux/hooks";

import styles from "./CourseDetails.module.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
// <<<<<<< HEAD
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadCourse = async () => {
//       const storedCourse = getCourseById(id);

//       if (storedCourse) {
//         setCourse(storedCourse);
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await axios.get(`${API_URL}/${id}`);
//         setCourse(res.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadCourse();
//   }, [id]);

//   if (loading) {
//     return <h2 className="loadingText">Loading...</h2>;
//   }
// =======
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

  if (!course) {
    return <h2 className="loadingText">Course not found</h2>;
  }

  const title = course.coursesTitle || course.courseTitle;

  return (
// <<<<<<< HEAD
//     <section className="detailsSection">
//       <div className="detailsCard">
//         <h1>{title}</h1>

//         <p>
//           <strong>Lecturer:</strong> {course.lecturer}
//         </p>

//         <p>
//           <strong>Duration:</strong> {course.duration}
//         </p>

//         <p>
//           <strong>Level:</strong> {course.level}
//         </p>

//         <p>
//           <strong>Price:</strong> ${course.price}
//         </p>

//         <p className="description">
//           This course provides practical knowledge and helps students build
//           real-world development skills through structured lessons and projects.
//         </p>
// =======
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
