import { Link, Outlet } from "react-router-dom";
import axiosInstance, { setAuthHeader } from "../Axios/axiosInstance";
import { setTeacher } from "../Redux/Slicers/teacherSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const Dashboard = () => {
  const deptHead =
    useAppSelector((state) => state.user?.teacher?.deptHead) || false;
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    axiosInstance
      .post("/auth/teacher/logout")
      .then(({ data }) => {
        data.success && setAuthHeader();
        data.success && dispatch(setTeacher(null));
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        alert(err?.message);
      });
  };
  return (
    <div className="md:flex h-[100vh] w-[100vw] p-5">
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 my-8 md:mb-0 w-[15%]">
        <li>
          <Link
            to="./"
            className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
            aria-current="page"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="./courses"
            className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full"
          >
            My Courses
          </Link>
        </li>
        {deptHead && (
          <li>
            <Link
              to="./all-course"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full"
            >
              All Courses
            </Link>
          </li>
        )}
        {deptHead && (
          <li>
            <Link
              to="./all-semester"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full"
            >
              All Semesters
            </Link>
          </li>
        )}
        {deptHead && (
          <li>
            <Link
              to="./all-students"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full"
            >
              Add Student
            </Link>
          </li>
        )}
        {deptHead && (
          <li>
            <Link
              to="./all-teachers"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full"
            >
              All Teachers
            </Link>
          </li>
        )}

        <li>
          <button
            className="outline-none inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
      <div className="p-6 text-medium text-gray-500  rounded-lg w-[80%] h-[85%]  items-center my-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
