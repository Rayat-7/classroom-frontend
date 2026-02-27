export interface Subject {
  id: string;
  courseCode: string;
  name: string;
  department: string;
  description: string;
}

export const mockSubjects: Subject[] = [
  {
    id: "1",
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Fundamental concepts of computing, algorithms, and problem-solving using programming.",
  },
  {
    id: "2",
    courseCode: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Vector spaces, matrices, linear transformations, and applications to engineering and science.",
  },
  {
    id: "3",
    courseCode: "ENG301",
    name: "Academic Writing and Research",
    department: "English",
    description:
      "Advanced composition, research methods, and critical analysis for academic and professional contexts.",
  },
];

export default mockSubjects;
