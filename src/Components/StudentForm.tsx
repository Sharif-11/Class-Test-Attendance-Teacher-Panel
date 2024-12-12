import { useFormik } from "formik";
import { useState } from "react";
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
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      studentId: "1804001",
      name: "",
      email: "u1804001@student.cuet.ac.bd",
      password: "u1804001",
      department: "CSE",
      role: "student",
      profileImage:'',
      batch: "2018",
      session: "2018-2019",
    },
    validationSchema: studentValidation,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");
      // alert(JSON.stringify(values));
      const result = await postData<StudentOutput, StudentInput>(
        `/student/signup`,
        values,
        true
      );
      if (result.data) {
        setLoading(false);
        setError("success");
        //navigate(`/dashboard/all-students`);
      } else {
        setLoading(false);
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
      loading={loading}
      loadingText="Creating..."
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
