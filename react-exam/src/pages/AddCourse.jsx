<<<<<<< HEAD
import { useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addCourseToStorage } from "../utils/coursesStorage";
import "./AddCourse.css";

const courseSchema = Yup.object({
  coursesTitle: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  lecturer: Yup.string().required("Lecturer is required"),
  duration: Yup.string().required("Duration is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  level: Yup.string()
    .oneOf(["Beginner", "Intermediate", "Advanced"])
    .required("Level is required"),
});

const initialValues = {
  coursesTitle: "",
  lecturer: "",
  duration: "",
  price: "",
  level: "Beginner",
};

function AddCourse() {
  const navigate = useNavigate();
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    addCourseToStorage(values);
    resetForm();
    navigate("/");
  };

  return (
    <section className="addCourseSection">
      <h1>Add New Course</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={courseSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="addCourseForm">
            <div className="formGroup">
              <label htmlFor="coursesTitle">Course Title</label>
              <Field
                innerRef={titleRef}
                id="coursesTitle"
                name="coursesTitle"
                type="text"
                placeholder="e.g. React Basics"
              />
              <ErrorMessage
                name="coursesTitle"
                component="div"
                className="errorMsg"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="lecturer">Lecturer</label>
              <Field
                id="lecturer"
                name="lecturer"
                type="text"
                placeholder="Lecturer name"
              />
              <ErrorMessage
                name="lecturer"
                component="div"
                className="errorMsg"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="duration">Duration</label>
              <Field
                id="duration"
                name="duration"
                type="text"
                placeholder="e.g. 6 Weeks"
              />
              <ErrorMessage
                name="duration"
                component="div"
                className="errorMsg"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="price">Price ($)</label>
              <Field
                id="price"
                name="price"
                type="number"
                placeholder="99"
              />
              <ErrorMessage name="price" component="div" className="errorMsg" />
            </div>

            <div className="formGroup">
              <label htmlFor="level">Level</label>
              <Field as="select" id="level" name="level">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </Field>
              <ErrorMessage name="level" component="div" className="errorMsg" />
            </div>

            <button type="submit" disabled={isSubmitting} className="submitBtn">
              {isSubmitting ? "Saving..." : "Add Course"}
            </button>
          </Form>
        )}
      </Formik>
=======
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
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
    </section>
  );
}

export default AddCourse;
