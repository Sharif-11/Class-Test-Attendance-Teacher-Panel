import { Teacher } from "./user.interface";

export type ErrorMessage = {
  path: string;
  message: string;
};
export type ErrorResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessages?: ErrorMessage[];
  stack?: string;
};
export type SuccessResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data: T;
};
export interface LoginResponse extends Teacher {
  token: string;
}
export type CourseResponse = {
  semesterId: string;
  courseCode: string;
  teacherId: string;
  semester: { semesterTitle: string; batch: string; session: string };
  course: { courseTitle: string; credit: number };
};
export type ClassTestResponse = {
  classTestId: string;
  evaluated: boolean;
  full_mark: number;
  courseCode: string;
  semesterId: string;
  createdAt: string;
  updatedAt: string;
};
export type Courses = {
  courseCode: string;
  courseTitle: string;
  credit: number;
  createdAt: string;
  updatedAt: string;
}[];
export type StudentInput = {
  studentId: string;
  name: string;
  email: string;
  password: string;
  department: string;
  role: string;
  profileImage: string | null;
  batch: string;
  session: string;
};
export type StudentOutput = {
  name: string;
  email: string;
  department: string;
  role: "student";
  profileImage: string;
  createdAt: Date;
  updatedAt: Date;
  studentId: string;
  batch: string;
  session: string;
};
