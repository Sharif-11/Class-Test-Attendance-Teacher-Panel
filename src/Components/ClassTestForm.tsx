import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postData } from "../Axios/postData";
import { ErrorResponse } from "../Interfaces/response.interface";
import Form from "./Form";
import InputField from "./InputField";

const ClassTestForm = () => {
  const { semesterId, courseCode } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: { semesterId, courseCode, full_mark: 20 },
    onSubmit: async (values) => {
      setLoading(true);
      const result = await postData("/ct", values);
      if (result.data) {
        setLoading(false);
        navigate(`/dashboard/courses/${semesterId}/${courseCode}`);
      } else {
        setLoading(false);
        setError((result as ErrorResponse).message);
      }
    },
  });
  return (
    <Form
      formik={formik}
      submitText="Create"
      title="Create CT"
      error={error || ""}
    >
      <InputField
        label="Semester Id"
        formik={formik}
        name="semesterId"
        readOnly
      />
      <InputField
        label="Course Code"
        formik={formik}
        name="courseCode"
        readOnly
      />
      <InputField
        label="Full Mark"
        formik={formik}
        name="full_mark"
        type="number"
      />
    </Form>
  );
};

export default ClassTestForm;
