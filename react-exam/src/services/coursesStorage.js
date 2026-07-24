import axios from "axios";

export const COURSES_STORAGE_KEY = "skillhouse-courses";
export const COURSES_API_URL = "https://6a5f78b4b1933e9d25fc5913.mockapi.io/courses";

export function normalizeCourse(course) {
  return {
    id: String(course.id ?? `local-${Date.now()}`),
    coursesTitle: course.coursesTitle ?? course.title ?? "Untitled course",
    lecturer: course.lecturer ?? "Skillhouse mentor",
    duration: course.duration ?? "4 weeks",
    price: Number(course.price ?? 0),
    level: course.level ?? "All levels",
    category: course.category ?? "All",
    description:
      course.description ??
      "This course provides practical knowledge and helps students build real-world development skills through structured lessons and projects.",
  };
}

export function readStoredCourses() {
  const storedCourses = window.localStorage.getItem(COURSES_STORAGE_KEY);
  if (!storedCourses) return [];

  try {
    const parsedCourses = JSON.parse(storedCourses);
    return Array.isArray(parsedCourses) ? parsedCourses.map(normalizeCourse) : [];
  } catch (error) {
    console.error("Stored courses are not valid JSON", error);
    return [];
  }
}

export function writeStoredCourses(courses) {
  window.localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(courses.map(normalizeCourse)));
}

export async function loadCoursesOnce() {
  const storedCourses = readStoredCourses();
  if (storedCourses.length > 0) {
    return storedCourses;
  }

  const response = await axios.get(COURSES_API_URL);
  const normalizedCourses = Array.isArray(response.data) ? response.data.map(normalizeCourse) : [];
  writeStoredCourses(normalizedCourses);
  return normalizedCourses;
}
