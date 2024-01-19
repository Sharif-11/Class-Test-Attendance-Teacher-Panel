import { useFormik } from "formik";
import Form from "./Form";
import InputField from "./InputField";

const TeacherForm = () => {
  const formik = useFormik({
    initialValues: {
      teacherId: "CSE-1801",
      name: "",
      email: "",
      department: "",
      designation: "",
      specialization: "",
      deptHead: false,
      password: "",
      errors: null,
    },

    onSubmit: (values) => {
      alert(values);
    },
  });
  return (
    <Form formik={formik} submitText="Create" title="Create Teacher">
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
