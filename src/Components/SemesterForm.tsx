import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../Axios/postData";
import { ErrorResponse } from "../Interfaces/response.interface";
import { SemesterOutput, semesterInput } from "../Interfaces/utils.interfaces";
import { semesterSchema } from "../Yup/semester.yup";
import Form from "./Form";
import InputField from "./InputField";

const SemesterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      semesterTitle: "",
      batch: "",
      session: "",
    },
    validationSchema: semesterSchema,
    onSubmit: async (values) => {
      const result = await postData<SemesterOutput, semesterInput>(
        `/semesters`,
        values
      );
      if (result.data) {
        navigate("/dashboard/all-semester");
      } else {
        const message = (result as ErrorResponse).message;
        setError(message);
      }
    },
  });
  return (
    <Form
      formik={formik}
      submitText="Create"
      title="Create Semester"
      error={error}
    >
      <InputField name="semesterTitle" label="Semester Title" formik={formik} />
      <InputField name="batch" label="Batch" formik={formik} />
      <InputField name="session" label="Session" formik={formik} />
    </Form>
  );
};

export default SemesterForm;
