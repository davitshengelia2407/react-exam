import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="homeSection">
      <h1>Welcome to Course Platform</h1>
      <p className="homeText">
        Browse our programming courses, add your own, and save favorites.
      </p>
      <div className="homeBtns">
        <Link to="/courses" className="homeBtn">
          View Courses
        </Link>
        <Link to="/add-course" className="homeBtn secondary">
          Add New Course
        </Link>
      </div>
    </section>
  );
}

export default Home;
