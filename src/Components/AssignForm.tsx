import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postData } from "../Axios/postData";
import { ErrorResponse } from "../Interfaces/response.interface";
import {
  AssignCourseInput,
  AssignCourseOutput,
} from "../Interfaces/utils.interfaces";
import { assignSchema } from "../Yup/assign.yup";
import Form from "./Form";
import InputField from "./InputField";

const AssignForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { semesterId = "" } = useParams();
  const formik = useFormik({
    initialValues: {
      semesterId,
      courseCode: "",
      teacherId: "",
    },
    validationSchema: assignSchema,
    onSubmit: async (values) => {
      setError("");
      const result = await postData<AssignCourseOutput, AssignCourseInput>(
        `/semesters/assign-course/${semesterId}`,
        values
      );
      if (result.data) {
        navigate(`/dashboard/semester-courses/${semesterId}`);
      } else {
        const message = (result as ErrorResponse).message;
        setError(message);
      }
    },
  });
  return (
    <Form
      formik={formik}
      submitText="Assign"
      title="Assign Course"
      error={error}
    >
      <InputField
        name="semesterId"
        label="Semester Id"
        formik={formik}
        readOnly
      />
      <InputField name="courseCode" label="Course Code" formik={formik} />
      <InputField name="teacherId" label="Teacher Id" formik={formik} />
    </Form>
  );
};

export default AssignForm;
