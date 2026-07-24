<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
import AboutUs from "./pages/AboutUs";
import AddCourse from "./pages/AddCourse";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
<<<<<<< HEAD
import AddCourse from "./pages/AddCourse";
=======
import Courses from "./pages/Courses";
import Home from "./pages/Home";
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
<<<<<<< HEAD
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/add-course" element={<AddCourse />} />
=======
          <Route path="/courses/new" element={<AddCourse />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
