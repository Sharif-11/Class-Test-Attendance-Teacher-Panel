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
