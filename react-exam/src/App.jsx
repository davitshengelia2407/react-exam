import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutUs from "./pages/AboutUs";
import AddCourse from "./pages/AddCourse";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/new" element={<AddCourse />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
