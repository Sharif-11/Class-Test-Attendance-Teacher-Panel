import { useNavigate } from "react-router-dom";
import { Course } from "../Interfaces/utils.interfaces";
import "./course.css";
const CourseCard = ({
  courseTitle,
  credit,
  batch,
  session,
  semesterTitle,
  courseCode,
  semesterId,
}: Course) => {
  const navigate = useNavigate();
  return (
    <div
      className="course-card"
      onClick={() => navigate(`/dashboard/courses/${semesterId}/${courseCode}`)}
    >
      <h3 className="text-[cyan]">{courseTitle}</h3>
      <p>
        <strong>Course Code: </strong> {courseCode}
      </p>
      <p>
        <strong>Credit: </strong> {credit}
      </p>
      <p>
        <strong>{semesterTitle}</strong>
      </p>
      <p>
        <strong>Batch: {batch}</strong>
      </p>
      <p>
        <strong>Session: {session}</strong>
      </p>
    </div>
  );
};

export default CourseCard;
