import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../Axios/fecthData";
import { SuccessResponse } from "../Interfaces/response.interface";
import { SemesterOutput } from "../Interfaces/utils.interfaces";
import Pagination from "./Pagination";

const AllSemesters = () => {
  const navigate = useNavigate();
  const [semesters, setSemesters] = useState<SemesterOutput[]>([]);
  const [nextItems, setNextItems] = useState<SemesterOutput[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetchData<SemesterOutput>(
        `/semesters?page=${currentPage}`
      );
      if (result.success) {
        const data = (result as SuccessResponse<SemesterOutput[]>).data;
        setSemesters(data);
      }
    };
    const fetchNextItems = async () => {
      const result = await fetchData<SemesterOutput>(
        `/semesters?page=${currentPage + 1}`
      );
      if (result.success) {
        const data = (result as SuccessResponse<SemesterOutput[]>).data;
        setNextItems(data);
      }
    };
    fetchItems();
    fetchNextItems();
  }, [currentPage]);
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h2 style={{ fontWeight: "bold", color: "white" }}>All Semesters</h2>
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
          {semesters.map((semester, idx) => (
            <tr key={idx}>
              <td>{semester.semesterTitle}</td>
              <td>{semester.batch}</td>
              <td>{semester.session}</td>
              <td>
                <button className="delete-btn">Delete</button>
                <button
                  className="delete-btn"
                  onClick={() =>
                    navigate(
                      `/dashboard/semester-courses/${semester.semesterId}`
                    )
                  }
                >
                  View Course
                </button>
                <button
                  className="delete-btn"
                  onClick={() =>
                    navigate(`/dashboard/assign-course/${semester.semesterId}`)
                  }
                >
                  Assign Course
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {semesters.length > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          nextItems={nextItems}
        />
      )}
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
