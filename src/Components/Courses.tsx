import { useEffect, useState } from "react";
import { fetchData } from "../Axios/fecthData";
import {
  CourseResponse,
  SuccessResponse,
} from "../Interfaces/response.interface";
import CourseCard from "./Course";

const Courses = () => {
  const [myCourses, setMyCourses] = useState<CourseResponse[]>([]);
  useEffect(() => {
    const fetchCourse = async () => {
      const result = await fetchData<CourseResponse[]>(
        "/courses/teacher-courses"
      );
      if (result.success) {
        const data = (result as SuccessResponse<CourseResponse[]>).data;
        setMyCourses(data);
      }
    };
    fetchCourse();
  }, []);
  return (
    <div>
      <h1 className="text-center mb-8">Courses</h1>
      <div className="flex flex-wrap">
        {myCourses.map((course: CourseResponse, idx: number) => (
          <CourseCard
            key={idx}
            courseCode={course.courseCode}
            {...course.semester}
            {...course.course}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
