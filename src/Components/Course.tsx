import { Course } from "../Interfaces/utils.interfaces";
import "./course.css";
const CourseCard = ({
  courseTitle,
  credit,
  batch,
  session,
  semesterTitle,
  courseCode,
}: Course) => {
  return (
    <div className="course-card">
      <h3>{courseTitle}</h3>
      <p>
        <strong>Course Code:</strong> {courseCode}
      </p>
      <p>
        <strong>Credit:</strong> {credit}
      </p>
      <p>
        <strong>{semesterTitle}</strong>
      </p>
      <p>
        <strong>Batch:{batch}</strong>
      </p>
      <p>
        <strong>Session:{session}</strong>
      </p>
    </div>
  );
};

export default CourseCard;
