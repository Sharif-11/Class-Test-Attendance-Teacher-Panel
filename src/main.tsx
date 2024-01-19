import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AllCourse from "./Components/AllCourse.tsx";
import AllSemesters from "./Components/AllSemester.tsx";
import AllStudent from "./Components/AllStudent.tsx";
import AllTeacher from "./Components/AllTeachers.tsx";
import AssignForm from "./Components/AssignForm.tsx";
import Courses from "./Components/Courses.tsx";
import Dashboard from "./Components/Dashboard.tsx";
import Profile from "./Components/Profile.tsx";
import SemesterCourses from "./Components/SemesterCourses.tsx";
import SemesterForm from "./Components/SemesterForm.tsx";
import StudentForm from "./Components/StudentForm.tsx";
import TeacherForm from "./Components/TeacherForm.tsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "all-course",
        element: <AllCourse />,
      },
      {
        path: "all-semester",
        element: <AllSemesters />,
      },
      {
        path: "all-students",
        element: <AllStudent />,
      },
      {
        path: "all-teachers",
        element: <AllTeacher />,
      },
      {
        path: "semester-courses/:semesterId",
        element: <SemesterCourses />,
      },
      {
        path: "create-teacher",
        element: <TeacherForm />,
      },
      {
        path: "create-student",
        element: <StudentForm />,
      },
      {
        path: "create-semester",
        element: <SemesterForm />,
      },
      {
        path: "assign-course/:semesterId",
        element: <AssignForm />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
