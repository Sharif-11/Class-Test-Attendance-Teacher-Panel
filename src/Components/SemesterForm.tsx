import { useFormik } from "formik";
import Form from "./Form";
import InputField from "./InputField";

const SemesterForm = () => {
  const formik = useFormik({
    initialValues: {
      semesterTitle: "",
      batch: "",
      session: "",
    },
    onSubmit: () => {},
  });
  return (
    <Form formik={formik} submitText="Create" title="Create Semester">
      <InputField name="semeserTitle" label="Semester Title" formik={formik} />
      <InputField name="batch" label="Batch" formik={formik} />
      <InputField name="session" label="Session" formik={formik} />
    </Form>
  );
};

export default SemesterForm;
