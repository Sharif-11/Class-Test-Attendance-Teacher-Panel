import { useFormik } from "formik";
import { useState } from "react";
import { postData } from "../Axios/postData";
import { ErrorResponse } from "../Interfaces/response.interface";
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
        setReload(true);
        setEvaluating(false);
      } else {
        alert((result as ErrorResponse).message);
        setEvaluating(false);
      }
    },
  });

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

            <button type="submit" className="my-2 btn-outline">
              Evaluate
            </button>
          </form>
        )}
      </td>
      <td>
        <button
          className="delete-btn disabled:bg-gray-400"
          disabled={evaluated}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Ct;
