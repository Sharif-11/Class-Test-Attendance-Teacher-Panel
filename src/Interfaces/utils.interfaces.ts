export interface Course {
  courseCode: string;
  courseTitle: string;
  credit: number;
  batch: string;
  session: string;
  semesterTitle: string;
  semesterId: string;
}
export type CourseInput = {
  courseCode: string;
  courseTitle: string;
  credit: number;
};
export type CourseOutput = {
  courseCode: string;
  courseTitle: string;
  credit: number;
  createdAt: Date;
  updatedAt: Date;
};
export type semesterInput = {
  semesterTitle: string;
  batch: string;
  session: string;
};
export type SemesterOutput = {
  semesterTitle: string;
  batch: string;
  semesterId: string;
  session: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AssignCourseInput = {
  semesterId: string;
  courseCode: string;
  teacherId: string;
};
export type AssignCourseOutput = {
  semesterId: string;
  courseCode: string;
  teacherId: string;
  semester: {
    semesterTitle:
      | "Level-1 Term-1"
      | "Level-1 Term-2"
      | "Level-2 Term-1"
      | "Level-2 Term-2"
      | "Level-3 Term-1"
      | "Level-3 Term-2"
      | "Level-4 Term-1"
      | "Level-4 Term-2";
    batch: string;
  };
  course: { courseCode: string; courseTitle: string; credit: number };
  teacher: { name: string; email: string };
};
