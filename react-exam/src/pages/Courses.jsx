<<<<<<< HEAD
import { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import CourseCard from "../components/CourseCard/CourseCard";
import { addToFavorites } from "../store/favoritesSlice";
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
      const matchesSearch = title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || course.level === category;
      return matchesSearch && matchesCategory;
    });
  }, [courses, search, category]);

  const handleAddFavorite = useCallback(
    (course) => {
      dispatch(addToFavorites(course));
    },
    [dispatch]
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

      <p className="resultsCount">
        Showing {filteredCourses.length} course(s)
      </p>

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
            onAddFavorite={() => handleAddFavorite(course)}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="noResults">No courses found</p>
      )}
    </div>
=======
import { useCallback, useEffect, useMemo, useState } from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "../redux/hooks";
import styles from "./Courses.module.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
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
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
  );
}

export default Courses;
