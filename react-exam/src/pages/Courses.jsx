import { useCallback, useEffect, useMemo, useState } from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "../redux/hooks";
import { loadCoursesOnce } from "../services/coursesStorage";
import styles from "./Courses.module.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    loadCoursesOnce()
      .then(setCourses)
      .catch((error) => console.error("Could not load courses", error));
  }, []);

  const categories = useMemo(() => ["All", ...new Set(courses.map((course) => course.category))], [courses]);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = category === "All" || course.category === category;
      const matchesText = [course.coursesTitle, course.lecturer, course.description]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
      return matchesCategory && matchesText;
    });
  }, [category, courses, query]);

  const handleAddToCart = useCallback((course) => {
    dispatch(addToCart(course));
  }, [dispatch]);

  return (
    <section className={styles.page}>
      <div className={styles.heading}>
        <p>Catalog</p>
        <h1>Pick a course that feels useful this week.</h1>
      </div>
      <div className={styles.filters}>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title, lecturer, topic..." />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <div className={styles.grid}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} onAddToCart={handleAddToCart} inCart={cartItems.some((item) => item.id === course.id)} />
        ))}
      </div>
    </section>
  );
}

export default Courses;
