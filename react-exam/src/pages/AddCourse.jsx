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
    </section>
  );
}

export default AddCourse;
