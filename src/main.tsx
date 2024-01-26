/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AllCourse from "./Components/AllCourse.tsx";
import AllSemesters from "./Components/AllSemester.tsx";
import AllStudent from "./Components/AllStudent.tsx";
import AllTeacher from "./Components/AllTeachers.tsx";
import AssignForm from "./Components/AssignForm.tsx";
import ClassTestForm from "./Components/ClassTestForm.tsx";
import ClassTests from "./Components/Classtests.tsx";
import CourseForm from "./Components/CourseForm.tsx";
import Courses from "./Components/Courses.tsx";
import Dashboard from "./Components/Dashboard.tsx";
import OnlyHead from "./Components/OnlyHead.tsx";
import Profile from "./Components/Profile.tsx";
import Protected from "./Components/Protected.tsx";
import SemesterCourses from "./Components/SemesterCourses.tsx";
import SemesterForm from "./Components/SemesterForm.tsx";
import StudentForm from "./Components/StudentForm.tsx";
import TeacherForm from "./Components/TeacherForm.tsx";
import store from "./Redux/store.ts";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
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
        element: (
          <OnlyHead>
            <AllCourse />
          </OnlyHead>
        ),
      },
      {
        path: "all-semester",
        element: (
          <OnlyHead>
            <AllSemesters />
          </OnlyHead>
        ),
      },
      {
        path: "all-students",
        element: (
          <OnlyHead>
            <AllStudent />
          </OnlyHead>
        ),
      },
      {
        path: "all-teachers",
        element: (
          <OnlyHead>
            <AllTeacher />
          </OnlyHead>
        ),
      },
      {
        path: "semester-courses/:semesterId",
        element: <SemesterCourses />,
      },
      {
        path: "create-teacher",
        element: (
          <OnlyHead>
            <TeacherForm />
          </OnlyHead>
        ),
      },
      {
        path: "create-student",
        element: (
          <OnlyHead>
            {" "}
            <StudentForm />
          </OnlyHead>
        ),
      },
      {
        path: "create-semester",
        element: (
          <OnlyHead>
            <SemesterForm />
          </OnlyHead>
        ),
      },
      {
        path: "create-course",
        element: (
          <OnlyHead>
            <CourseForm />
          </OnlyHead>
        ),
      },
      {
        path: "assign-course/:semesterId",
        element: (
          <OnlyHead>
            <AssignForm />
          </OnlyHead>
        ),
      },
      {
        path: "courses/:semesterId/:courseCode",
        element: <ClassTests />,
      },
      {
        path: "courses/:semesterId/:courseCode/create-ct",
        element: <ClassTestForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
