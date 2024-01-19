import { useFormik } from "formik";
import Form from "./Form";
import InputField from "./InputField";

const StudentForm = () => {
  const formik = useFormik({
    initialValues: {
      studentId: "",
      name: "",
      email: "",
      password: "",
      department: "",
      role: "student",
    },
    onSubmit: () => {},
  });
  return (
    <Form formik={formik} submitText="Create" title="Create Student">
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
