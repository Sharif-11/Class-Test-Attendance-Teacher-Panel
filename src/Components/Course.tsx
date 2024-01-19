// Course.ts
interface Course {
  id: number;
  courseTitle: string;
  code: string;
  credit: number;
}

// CourseCard.tsx
import React from "react";
import "./course.css";
interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.courseTitle}</h3>
      <p>
        <strong>Course Code:</strong> {course.code}
      </p>
      <p>
        <strong>Credit:</strong> {course.credit}
      </p>
      <p>
        <strong>Batch:</strong> {"2018"}
      </p>
      <p>
        <strong>Session:</strong> {"2019 - 2020"}
      </p>
    </div>
  );
};

export default CourseCard;
