import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchData } from "../Axios/fecthData";
import {
  ClassTestResponse,
  SuccessResponse,
} from "../Interfaces/response.interface";
import Ct from "./Ct";

const ClassTests = () => {
  const navigate = useNavigate();
  const { semesterId, courseCode } = useParams();
  const [ct, setCt] = useState<ClassTestResponse[]>([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const fetchCt = async () => {
      const result = await fetchData(
        `/ct/teacher-ct/${semesterId}/${courseCode}`
      );
      if (result.success) {
        const data = (result as SuccessResponse<ClassTestResponse[]>).data;
        setCt(data);
      }
    };
    fetchCt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  return (
    <div className="container ">
      <div className="flex justify-between items-cente">
        <h2>All Class Tests</h2>
        <button
          className="bg-transparent text-white border-[white]"
          onClick={() =>
            navigate(`/dashboard/courses/${semesterId}/${courseCode}/create-ct`)
          }
        >
          + New
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Full Mark</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{ overflow: "scroll" }}>
          {ct.map((ct: ClassTestResponse, idx: number) => (
            <Ct {...ct} idx={idx} setReload={setReload} />
          ))}
          {ct.length === 0 && (
            <p className="text-white my-8 text-center mx-auto">
              There is no Class Test
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClassTests;
