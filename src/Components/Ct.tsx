import { useFormik } from "formik";
import { useState } from "react";
import { postData } from "../Axios/postData";
import {
  ClassTestResponse,
  ErrorResponse,
} from "../Interfaces/response.interface";
import { evaluateCtschema } from "../Yup/ct.yup";
const Ct = ({
  idx,
  full_mark,
  evaluated,
  classTestId,
  setReload,
}: {
  idx: number;
  full_mark: number;
  evaluated: boolean;
  classTestId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setReload: any;
}) => {
  const [evaluating, setEvaluating] = useState(false);
  const formik = useFormik({
    initialValues: {
      excelFile: null,
    },
    validationSchema: evaluateCtschema,
    onSubmit: async (values) => {
      setEvaluating(true);
      const result = await postData(
        `/ct/evaluate-ct/${classTestId}`,
        values,
        true
      );
      if (result.data) {
        setReload((pre: boolean) => !pre);
        setEvaluating(false);
      } else {
        alert((result as ErrorResponse).message);
        setEvaluating(false);
      }
    },
  });
  const handleCancellation = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await postData<ClassTestResponse, any>(
      `/ct/cancel-evaluation/${classTestId}`,
      {}
    );
    if (result.data) {
      setReload((pre: boolean) => !pre);
    } else {
      alert((result as ErrorResponse).message);
    }
  };
  const handleDelete = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const result = await postData<ClassTestResponse, any>(
    //   `/ct/${classTestId}`,
    //   {}
    // );
    // if (result.data) {
    //   setReload((pre: boolean) => !pre);
    // } else {
    //   alert((result as ErrorResponse).message);
    // }
  };

  return (
    <tr key={idx}>
      <td>{`CT-0${idx + 1}`}</td>
      <td>{full_mark}</td>
      <td>
        {evaluated ? (
          "Evaluated"
        ) : evaluating ? (
          "evaluating"
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <input
              name="excelFile"
              type="file"
              onChange={(event) =>
                formik.setFieldValue("excelFile", event.currentTarget.files![0])
              }
              onBlur={formik.handleBlur}
            />

            <button type="submit" className="my-1 btn-outline">
              Evaluate
            </button>
          </form>
        )}
      </td>
      <td>
        {evaluated === false ? (
          <button
            className="delete-btn disabled:bg-gray-400"
            onClick={handleDelete}
          >
            Delete
          </button>
        ) : (
          <button
            className="delete-btn disabled:bg-gray-400"
            onClick={handleCancellation}
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default Ct;
