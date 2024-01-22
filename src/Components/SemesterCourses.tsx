import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Axios/fecthData";
import { SuccessResponse } from "../Interfaces/response.interface";
import { SemesterCoursesType } from "../Interfaces/utils.interfaces";
import "./AllCourse.css"; // Import your CSS file for styling

const SemesterCourses: React.FC = () => {
  const { semesterId = "" } = useParams();
  const [courses, setCourses] = useState<SemesterCoursesType[]>([]);
  useEffect(() => {
    const fetchCourse = async () => {
      const result = await fetchData<SemesterCoursesType[]>(
        `semesters/courses/${semesterId}`
      );
      if (result.success) {
        const data = (result as SuccessResponse<SemesterCoursesType[]>).data;
        setCourses(data);
      }
    };
    fetchCourse();
  }, []);
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
          {courses.map((course, idx: number) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{course.course.courseTitle}</td>
              <td>{course.course.courseCode}</td>
              <td>{course.course.credit}</td>
              <td>
                {course.teachers.map((teacher) => (
                  <p>{teacher.name}</p>
                ))}
              </td>
            </tr>
          ))}
          {courses.length === 0 && (
            <div className="mt-8 mx-8 font-[900]">There is no Course</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SemesterCourses;
