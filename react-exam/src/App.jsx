import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import AddCourse from "./pages/AddCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/add-course" element={<AddCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
