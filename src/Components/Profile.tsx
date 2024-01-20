import { useAppSelector } from "../Redux/hooks";

const Profile = () => {
  const teacher = useAppSelector((state) => state.user.teacher);
  return (
    <div className="teacher-profile flex justify-center">
      <div className="profile-image-container mx-8">
        <img
          src={teacher?.profileImage}
          alt={`${teacher?.name}'s profile`}
          className="profile-image rounded-full w-[150px] h-[150px]"
        />
      </div>
      <div className="profile-details">
        <h2>{teacher?.name}</h2>
        <h6>{teacher?.designation}</h6>
        <p>
          <strong>Department:</strong> {teacher?.department}
        </p>

        <p>
          <strong>Specialization:</strong> {teacher?.specialization}
        </p>
        <p>
          <strong>Email:</strong> {teacher?.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
