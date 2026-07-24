import { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../components/CourseCard/CourseCard";
import { addToCart } from "../redux/cartSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  API_URL,
  getStoredCourses,
  saveCourses,
} from "../utils/coursesStorage";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useLocalStorage("courseCategory", "All");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const loadCourses = async () => {
      const stored = getStoredCourses();

      if (stored && stored.length > 0) {
        setCourses(stored);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(API_URL);
        saveCourses(res.data);
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const title = course.coursesTitle || course.courseTitle || "";
      const matchesSearch = title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || course.level === category;
      return matchesSearch && matchesCategory;
    });
  }, [courses, search, category]);

  const handleAddToCart = useCallback(
    (course) => {
      dispatch(addToCart(course));
    },
    [dispatch],
  );

  if (loading) {
    return <p className="loadingText">Loading courses...</p>;
  }

  return (
    <div className="coursesPage">
      <h1>Courses</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="categorySelect"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <p className="resultsCount">Showing {filteredCourses.length} course(s)</p>

      <div className="coursesGrid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.coursesTitle || course.courseTitle}
            lecturer={course.lecturer}
            duration={course.duration}
            price={course.price}
            level={course.level}
            id={course.id}
            inCart={cartItems.some((item) => item.id === course.id)}
            onAddToCart={() => handleAddToCart(course)}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="noResults">No courses found</p>
      )}
    </div>
  );
}

export default Courses;
