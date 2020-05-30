export default function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const graph: number[][] = new Array(numCourses).fill(null).map(() => []);
  /* index is course number; value is the number of prerequisites for this course; */
  const map = new Array(numCourses).fill(0);
  const courses = [];

  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    map[course]++;
  }

  for (let i = 0; i < numCourses; i++) {
    !map[i] && courses.push(i);
  }

  while (courses.length > 0) {
    numCourses--;
    for (const c of graph[courses.shift()!]) {
      !--map[c] && courses.push(c);
    }
  }

  return !numCourses;
}
