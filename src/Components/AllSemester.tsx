import { useState } from "react";

const AllSemesters = () => {
  const [semesters, setSemesters] = useState([
    { id: 1, name: "Level 1 Term 1", session: "2018-2019" },
  ]);
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2>All Semesters</h2>
        <button className="bg-transparent text-white border-[white]">
          + Add
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Session</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {semesters.map((semester) => (
            <tr key={semester?.id}>
              <td>{semester?.id}</td>
              <td>{semester!.name}</td>
              <td>{semester!.session}</td>
              <td>
                <button className="delete-btn">Delete</button>
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
