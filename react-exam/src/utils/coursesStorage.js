const STORAGE_KEY = "coursesList";
export const API_URL =
  "https://6a5f78b4b1933e9d25fc5913.mockapi.io/courses";

export function getStoredCourses() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveCourses(courses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
}

export function getCourseById(id) {
  const courses = getStoredCourses();
  if (!courses) return null;
  return courses.find((c) => String(c.id) === String(id)) || null;
}

export function addCourseToStorage(courseData) {
  const courses = getStoredCourses() || [];
  const newCourse = {
    ...courseData,
    id: `local-${Date.now()}`,
    price: Number(courseData.price),
  };
  const updated = [...courses, newCourse];
  saveCourses(updated);
  return newCourse;
}
