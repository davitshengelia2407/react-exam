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
    category: course.category ?? "Frontend",
    rating: Number(course.rating ?? 4.7),
    students: Number(course.students ?? 0),
    description:
      course.description ??
      "A practical course with structured lessons, hands-on exercises, and portfolio-ready work.",
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

  const response = await fetch(COURSES_API_URL);
  if (!response.ok) {
    throw new Error(`Courses request failed with ${response.status}`);
  }

  const apiCourses = await response.json();
  const normalizedCourses = Array.isArray(apiCourses) ? apiCourses.map(normalizeCourse) : [];
  writeStoredCourses(normalizedCourses);
  return normalizedCourses;
}
