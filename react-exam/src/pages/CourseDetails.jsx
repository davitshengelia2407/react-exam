import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `https://6a5f78b4b1933e9d25fc5913.mockapi.io/courses/${id}`
        );

        setCourse(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="detailsSection">
      <div className="detailsCard">
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

        <p className="description">
          This course provides practical knowledge and helps students build
          real-world development skills through structured lessons and
          projects.
        </p>

        <button className="enrollBtn">
          Enroll Now
        </button>
      </div>
    </section>
  );
}

export default CourseDetails;