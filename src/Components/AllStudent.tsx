import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllStudent.css"; // Import your CSS file for styling

const AllStudent: React.FC = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    {
      id: 1804001,
      name: "Anirban Barua",
      email: "u1804001@student.cuet.ac.bd",
      department: "CSE",
    },
    {
      id: 1804002,
      name: "Tanvir Rahman",
      email: "u1804002@student.cuet.ac.bd",
      department: "CSE",
    },
  ]);

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2>All Students</h2>
        <button
          className="bg-transparent text-white border-[white]"
          onClick={() => navigate("/dashboard/create-student")}
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
          {students?.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default AllStudent;
