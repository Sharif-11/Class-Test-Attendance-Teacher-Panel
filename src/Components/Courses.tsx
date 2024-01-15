import CourseCard from "./Course";

const Courses = () => {
  return (
    <div>
      <h1 className="text-center mb-8">Courses</h1>
      <CourseCard
        course={{
          id: 1,
          name: "Introduction to Computer Science",
          code: "CS101",
          credit: 3,
        }}
      />
    </div>
  );
};

export default Courses;
