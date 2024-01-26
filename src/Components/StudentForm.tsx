import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../Axios/postData";
import {
  ErrorResponse,
  StudentInput,
  StudentOutput,
} from "../Interfaces/response.interface";
import { studentValidation } from "../Yup/user.yup";
import Form from "./Form";
import InputField from "./InputField";

const StudentForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      studentId: "",
      name: "",
      email: "",
      password: "",
      department: "",
      role: "student",
      profileImage: null,
      batch: "",
      session: "",
    },
    validationSchema: studentValidation,
    onSubmit: async (values) => {
      setError("");
      // alert(JSON.stringify(values));
      const result = await postData<StudentOutput, StudentInput>(
        `/student/signup`,
        values,
        true
      );
      if (result.data) {
        navigate(`/dashboard/all-students`);
      } else {
        const message = (result as ErrorResponse).message;
        // alert(message);
        setError(message);
      }
    },
  });
  return (
    <Form
      formik={formik}
      submitText="Create"
      title="Create Student"
      error={error}
      customStyle={{
        display: "flex",
        width: "550px",
        flexWrap: "wrap",

        justifyContent: "space-between",
        flex: 2,
      }}
    >
      <InputField name="studentId" formik={formik} label="Student Id" />
      <InputField name="name" formik={formik} label="Name" />
      <InputField name="email" formik={formik} label="Email" type="Email" />
      <InputField
        name="password"
        formik={formik}
        label="Password"
        type="password"
      />
      <InputField name="department" formik={formik} label="Department" />
      <InputField name="batch" formik={formik} label="Batch" />
      <InputField name="session" formik={formik} label="Session" />
      <InputField
        name="profileImage"
        formik={formik}
        label="Profile Image"
        type="file"
      />
    </Form>
  );
};

export default StudentForm;
