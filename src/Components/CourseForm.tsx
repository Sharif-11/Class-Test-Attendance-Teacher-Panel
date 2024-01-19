import { useFormik } from "formik";
import Form from "./Form";
import InputField from "./InputField";

const CourseForm = () => {
  const formik = useFormik({
    initialValues: {
      courseCode: "",
      courseTitle: "",
      credit: "",
    },
    onSubmit: () => {},
  });
  return (
    <Form formik={formik} submitText="Create" title="Create Course">
      <InputField name="courseCode" label="Course Code" formik={formik} />
      <InputField name="courseTitle" label="Course Title" formik={formik} />
      <InputField name="credit" label="Credit" formik={formik} type="number" />
    </Form>
  );
};

export default CourseForm;
