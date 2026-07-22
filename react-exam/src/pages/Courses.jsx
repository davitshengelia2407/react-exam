import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("https://6a5f78b4b1933e9d25fc5913.mockapi.io/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Courses</h1>

      <CourseCard courses={courses} />
    </div>
  );
}

export default Courses;