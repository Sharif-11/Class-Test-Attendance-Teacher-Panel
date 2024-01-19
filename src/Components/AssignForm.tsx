import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import Form from "./Form";
import InputField from "./InputField";

const AssignForm = () => {
  const { semesterId } = useParams();
  const formik = useFormik({
    initialValues: {
      semesterId,
      courseCode: "",
      teacherId: "",
    },
    onSubmit: () => {},
  });
  return (
    <Form formik={formik} submitText="Assign" title="Assign Course">
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
