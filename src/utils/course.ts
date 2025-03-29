import { Course } from '@/structures';

export function reduceCoursesDuration(
  courses: Course[],
  filterFn?: (course: Course) => boolean,
): number {
  return courses
    .filter((course) => (filterFn ? filterFn(course) : true))
    .reduce((total, course) => total + course.duration, 0);
}
