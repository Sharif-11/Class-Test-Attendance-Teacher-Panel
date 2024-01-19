import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllCourse.css"; // Import your CSS file for styling

const SemesterCourses: React.FC = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      courseCode: "REACT101",
      credit: 3,
      teachers: [{ name: "Mr X", email: "abc@gmail.com" }],
    },
    {
      id: 2,
      title: "Introduction to React2",
      courseCode: "REACT101",
      credit: 3,
      teachers: [
        { name: "Mr Y", email: "ab@gmail.com" },
        { name: "Mr Z", email: "ab@gmail.com" },
      ],
    },
  ]);

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2>Semester Courses</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Course Code</th>
            <th>Credit</th>
            <th>Teachers</th>
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
                {course.teachers.map((teacher) => (
                  <p>{teacher.name}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SemesterCourses;
