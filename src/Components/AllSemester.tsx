import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllSemesters = () => {
  const navigate = useNavigate();
  const [semesters, setSemesters] = useState([
    { id: 1, name: "Level 1 Term 1", session: "2018-2019", batch: "2018" },
  ]);
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2>All Semesters</h2>
        <button
          className="bg-transparent text-white border-[white]"
          onClick={() => navigate("/dashboard/create-semester")}
        >
          + Add
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Batch</th>
            <th>Session</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {semesters.map((semester) => (
            <tr key={semester?.id}>
              <td>{semester!.name}</td>
              <td>{semester!.batch}</td>
              <td>{semester!.session}</td>
              <td>
                <button className="delete-btn">Delete</button>
                <button
                  className="delete-btn"
                  onClick={() =>
                    navigate(`/dashboard/semester-courses/${semester.id}`)
                  }
                >
                  View Course
                </button>
                <button
                  className="delete-btn"
                  onClick={() =>
                    navigate(`/dashboard/assign-course/${semester.id}`)
                  }
                >
                  Assign Course
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 
      <div className="form-container">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newSemester.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
        </div>
        <div>
          <label>Session:</label>
          <input
            type="text"
            value={newSemester.session}
            onChange={(e) => handleInputChange(e, "session")}
          />
        </div>
        <button className="add-btn" onClick={addRow}>
          Add Semester
        </button>
      </div> */}
    </div>
  );
};

export default AllSemesters;
