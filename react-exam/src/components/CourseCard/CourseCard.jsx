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

  return (
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
