import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllTeacher.css"; // Import your CSS file for styling

const AllTeacher: React.FC = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([
    {
      id: "CSE-1801",
      name: "Ashfaque Habib",
      email: "ashfaque@cuet.ac.bd",
      department: "CSE",
    },
    {
      id: "CSE-1802",
      name: "Shafiul Alam Forhad",
      email: "forhad@cuet.ac.bd",
      department: "CSE",
    },
  ]);

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2>All Teachers</h2>
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
          {teachers?.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.department}</td>
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

export default AllTeacher;
