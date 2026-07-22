import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ courses }) {
  const navigate = useNavigate();

  return (
    <div className="coursesContainer">
      {courses.map((course) => (
        <div className="courseCard" key={course.id}>
          <h2>{course.coursesTitle}</h2>

          <p>{course.lecturer}</p>
          <p>{course.duration}</p>
          <p>${course.price}</p>
          <p>{course.level}</p>

          <button
            onClick={() =>
              navigate(`/course-details/${course.id}`)
            }
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;