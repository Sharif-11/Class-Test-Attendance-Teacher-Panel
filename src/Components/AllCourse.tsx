import React, { useState } from "react";
import "./AllCourse.css"; // Import your CSS file for styling

const AllCourse: React.FC = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      courseCode: "REACT101",
      credit: 3,
    },
    {
      id: 2,
      title: "Introduction to React2",
      courseCode: "REACT101",
      credit: 3,
    },
  ]);

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2>All Courses</h2>
        <button className="bg-transparent text-white border-[white]">
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
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.courseCode}</td>
              <td>{course.credit}</td>
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

export default AllCourse;
