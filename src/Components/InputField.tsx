/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

const UserBox = styled.div`
  position: relative;
  margin-bottom: 16px;
`;
const Error = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -4px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;
const InputField = ({
  formik,
  type,
  name,
  label,
  readOnly,
  className = "",
  value = "",
}: {
  formik: any;
  type?: string;
  name: string;
  label: string;
  readOnly?: boolean;
  className?: string;
  value?: string;
}) => {
  return (
    <UserBox>
      <Input
        style={{
          borderColor: `${
            formik.touched[name] && formik.errors[name] ? "red" : "white"
          }`,
        }}
        type={type || "text"}
        name={name}
        value={formik.values[name] ?? value}
        onChange={
          type === "file"
            ? (event) =>
                formik.setFieldValue(name, event.currentTarget.files![0])
            : formik.handleChange
        }
        onBlur={formik.handleBlur}
        readOnly={readOnly || false}
        className={className}
      />
      <Label htmlFor={name}>{label}</Label>
      <Error>{formik.errors[name]}</Error>
    </UserBox>
  );
};

export default InputField;
