import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pageSize } from "../../Shared/pageSize";
import { fetchData } from "../Axios/fecthData";
import { Courses, SuccessResponse } from "../Interfaces/response.interface";
import "./AllCourse.css"; // Import your CSS file for styling
import Pagination from "./Pagination";

const AllCourse: React.FC = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Courses>([]);
  const [nextCourses, setNextCourses] = useState<Courses>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialIdx, setInitialIndex] = useState(0);
  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchData<Courses>(`/courses?page=${currentPage}`);
      if (result.success) {
        const data = (result as SuccessResponse<Courses>).data;
        setCourses(data);
      }
    };
    const fetchNextCourses = async () => {
      const result = await fetchData<Courses>(
        `/courses?page=${currentPage + 1}`
      );
      if (result.success) {
        const data = (result as SuccessResponse<Courses>).data;
        setNextCourses(data);
      }
    };
    fetchCourses();
    fetchNextCourses();
    setInitialIndex(pageSize * (currentPage - 1));
  }, [currentPage]);

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2 style={{ color: "white", fontWeight: "bold" }}>All Courses</h2>
        <button
          className="bg-transparent text-white border-[white]"
          onClick={() => navigate("/dashboard/create-course")}
        >
          + Add
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx: number) => (
            <tr key={idx}>
              <td>{idx + 1 + initialIdx}</td>
              <td>{course.courseTitle}</td>
              <td>{course.courseCode}</td>
              <td>{course.credit}</td>
              <td>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {courses.length > 0 && (
        <Pagination
          currentPage={currentPage}
          nextItems={nextCourses}
          setCurrentPage={setCurrentPage}
        />
      )}

      {/* <div className="form-container">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={newCourse.title}
            onChange={(e) => handleInputChange(e, "title")}
          />
        </div>
        <div>
          <label>Course Code:</label>
          <input
            type="text"
            value={newCourse.courseCode}
            onChange={(e) => handleInputChange(e, "courseCode")}
          />
        </div>
        <div>
          <label>Credit:</label>
          <input
            type="number"
            value={newCourse.credit}
            onChange={(e) => handleInputChange(e, "credit")}
          />
        </div>
        <button className="add-btn" onClick={addRow}>
          Add Course
        </button>
      </div> */}
    </div>
  );
};

export default AllCourse;
