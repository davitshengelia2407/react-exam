import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { getCourseById, API_URL } from "../utils/coursesStorage";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCourse = async () => {
      const storedCourse = getCourseById(id);

      if (storedCourse) {
        setCourse(storedCourse);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setCourse(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [id]);

  const handleAddToCart = useCallback(() => {
    if (course) {
      dispatch(addToCart(course));
    }
  }, [course, dispatch]);

  if (loading) {
    return <h2 className="loadingText">Loading...</h2>;
  }

  if (!course) {
    return <h2 className="loadingText">Course not found</h2>;
  }

  const title = course.coursesTitle || course.courseTitle;

  return (
    <section className="detailsSection">
      <div className="detailsCard">
        <h1>{title}</h1>

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

        <p className="description">
          This course provides practical knowledge and helps students build
          real-world development skills through structured lessons and projects.
        </p>

        <button className="enrollBtn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default CourseDetails;
