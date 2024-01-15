import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AllCourse from "./Components/AllCourse.tsx";
import AllSemesters from "./Components/AllSemester.tsx";
import Courses from "./Components/Courses.tsx";
import Dashboard from "./Components/Dashboard.tsx";
import Profile from "./Components/Profile.tsx";
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
