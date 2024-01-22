import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../Axios/postData";
import { ErrorResponse } from "../Interfaces/response.interface";
import { teacherValidation } from "../Yup/user.yup";
import Form from "./Form";
import InputField from "./InputField";

const TeacherForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      teacherId: "",
      name: "",
      email: "",
      department: "",
      designation: "",
      specialization: "",
      deptHead: false,
      password: "",
    },
    validationSchema: teacherValidation,
    onSubmit: async (values) => {
      setError("");
      const result = await postData("/teacher/signup", values, true);
      if (result.data) {
        navigate("/dashboard/all-teachers");
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
      title="Create Teacher"
      error={error}
    >
      <InputField name="teacherId" formik={formik} label="Teacher Id" />
      <InputField name="name" formik={formik} label="Name" />
      <InputField name="email" formik={formik} label="Email" type="email" />
      <InputField name="department" formik={formik} label="Department" />
      <InputField name="designation" formik={formik} label="Designation" />
      <InputField
        name="password"
        formik={formik}
        label="Password"
        type="password"
      />
      <InputField
        name="specialization"
        formik={formik}
        label="Specialization"
        type="textarea"
      />
      <InputField
        name="profileImage"
        formik={formik}
        label="Profile Image"
        type="file"
      />
    </Form>
  );
};

export default TeacherForm;
