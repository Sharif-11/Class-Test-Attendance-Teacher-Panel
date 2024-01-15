// Teacher.ts
interface Teacher {
  id: number;
  name: string;
  department: string;
  designation: string;
  specialization: string;
  profileImageUrl: string;
  email: string;
}

// TeacherProfile.tsx
import React from "react";

interface TeacherProfileProps {
  teacher: Teacher;
}

const Profile: React.FC<TeacherProfileProps> = ({
  teacher = {
    id: 1,
    name: "John Doe",
    department: "Computer Science",
    designation: "Professor",
    specialization: "Machine Learning",
    profileImageUrl: "path-to-profile-image.jpg",
    email: "john@gmail.com",
  },
}) => {
  return (
    <div className="teacher-profile">
      <div className="profile-image-container">
        <img
          src={teacher.profileImageUrl}
          alt={`${teacher.name}'s profile`}
          className="profile-image"
        />
      </div>
      <div className="profile-details">
        <h2>{teacher.name}</h2>
        <p>
          <strong>Department:</strong> {teacher.department}
        </p>
        <p>
          <strong>Designation:</strong> {teacher.designation}
        </p>
        <p>
          <strong>Specialization:</strong> {teacher.specialization}
        </p>
        <p>
          <strong>Email:</strong> {teacher.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
