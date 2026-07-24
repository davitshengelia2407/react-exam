import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { useFormik } from "../lib/simpleFormik";
import styles from "./AddCourse.module.css";

const initialValues = { coursesTitle: "", lecturer: "", category: "Frontend", price: "", duration: "" };

function validateCourse(values) {
  const errors = {};
  if (values.coursesTitle.trim().length < 4) errors.coursesTitle = "Title must contain at least 4 characters.";
  if (values.lecturer.trim().length < 3) errors.lecturer = "Lecturer name is required.";
  if (!values.price || Number(values.price) <= 0) errors.price = "Price must be a positive number.";
  if (values.duration.trim().length < 2) errors.duration = "Duration is required.";
  return errors;
}

function AddCourse() {
  const titleRef = useRef(null);
  const navigate = useNavigate();
  const [draftCourses, setDraftCourses] = useLocalStorage("skillhouse-created-courses", []);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const submitCourse = useCallback((values) => {
    const newCourse = { ...values, id: `local-${Date.now()}`, price: Number(values.price) };
    setDraftCourses([...draftCourses, newCourse]);
    navigate("/courses");
  }, [draftCourses, navigate, setDraftCourses]);

  const formik = useFormik({ initialValues, validate: validateCourse, onSubmit: submitCourse });

  return (
    <section className={styles.page}>
      <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
        <label>Course title<input ref={titleRef} name="coursesTitle" value={formik.values.coursesTitle} onChange={formik.handleChange} onBlur={formik.handleBlur} />{formik.touched.coursesTitle && formik.errors.coursesTitle && <small>{formik.errors.coursesTitle}</small>}</label>
        <label>Lecturer<input name="lecturer" value={formik.values.lecturer} onChange={formik.handleChange} onBlur={formik.handleBlur} />{formik.touched.lecturer && formik.errors.lecturer && <small>{formik.errors.lecturer}</small>}</label>
        <label>Category<select name="category" value={formik.values.category} onChange={formik.handleChange}><option>Frontend</option><option>Backend</option><option>Design</option><option>Career</option></select></label>
        <label>Price<input name="price" type="number" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} />{formik.touched.price && formik.errors.price && <small>{formik.errors.price}</small>}</label>
        <label>Duration<input name="duration" value={formik.values.duration} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="5 weeks" />{formik.touched.duration && formik.errors.duration && <small>{formik.errors.duration}</small>}</label>
        <button type="submit">Save course</button>
      </form>
    </section>
  );
}

export default AddCourse;
