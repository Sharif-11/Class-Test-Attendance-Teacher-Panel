// Course.ts
interface Course {
  id: number;
  name: string;
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
      <h3>{course.name}</h3>
      <p>
        <strong>Course Code:</strong> {course.code}
      </p>
      <p>
        <strong>Credit:</strong> {course.credit}
      </p>
    </div>
  );
};

export default CourseCard;
