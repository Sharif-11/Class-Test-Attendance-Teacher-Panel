import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../Axios/postData";
import { ErrorResponse } from "../Interfaces/response.interface";
import { CourseInput, CourseOutput } from "../Interfaces/utils.interfaces";
import { courseSchema } from "../Yup/course.yup";
import Form from "./Form";
import InputField from "./InputField";

const CourseForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      courseCode: "",
      courseTitle: "",
      credit: 3,
    },
    validationSchema: courseSchema,
    onSubmit: async (values) => {
      setError("");
      const result = await postData<CourseOutput, CourseInput>(
        "/courses",
        values
      );
      if (result.data) {
        navigate("/dashboard/all-course");
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
      title="Create Course"
      error={error}
    >
      <InputField name="courseCode" label="Course Code" formik={formik} />
      <InputField name="courseTitle" label="Course Title" formik={formik} />
      <InputField name="credit" label="Credit" formik={formik} type="number" />
    </Form>
  );
};

export default CourseForm;
