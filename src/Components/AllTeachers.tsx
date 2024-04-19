import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../Axios/fecthData";
import { SuccessResponse } from "../Interfaces/response.interface";
import { Teacher } from "../Interfaces/user.interface";
import "./AllTeacher.css"; // Import your CSS file for styling
import Pagination from "./Pagination";

const AllTeacher: React.FC = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [nextItems, setNextItems] = useState<Teacher[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetchData<Teacher[]>(`/teacher?page=${currentPage}`);
      if (result.success) {
        const data = (result as SuccessResponse<Teacher[]>).data;
        setTeachers(data);
      }
    };
    const fetchNextItems = async () => {
      const result = await fetchData<Teacher[]>(
        `/teacher?page=${currentPage + 1}`
      );
      if (result.success) {
        const data = (result as SuccessResponse<Teacher[]>).data;
        setNextItems(data);
      }
    };
    fetchItems();
    fetchNextItems();
  }, [currentPage]);
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2 style={{ color: "white", fontWeight: "bold" }}>All Teachers</h2>
        <button
          className="bg-transparent text-white border-[white]"
          onClick={() => navigate("/dashboard/create-teacher")}
        >
          + Add
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers?.map((teacher, idx: number) => (
            <tr key={idx}>
              <td>{teacher.teacherId}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.department}</td>
              <td>{/* <button className="delete-btn">Delete</button> */}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        nextItems={nextItems}
        setCurrentPage={setCurrentPage}
      />
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

export default AllTeacher;
