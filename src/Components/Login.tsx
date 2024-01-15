import { useFormik } from "formik";
import React from "react";
import styled, { keyframes } from "styled-components";
import { loginSchema } from "../Yup/login.yup";

const gradientAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const LoginBox = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
`;

const StyledLoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const Title = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

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

const SubmitButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin: 40px auto;
  letter-spacing: 4px;

  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
`;

const Span = styled.span`
  position: absolute;
  display: block;
`;

const Span1 = styled(Span)`
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: ${gradientAnimation} 1s linear infinite;
`;

const Span2 = styled(Span)`
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: ${gradientAnimation} 1s linear infinite;
  animation-delay: 0.25s;
`;

const Span3 = styled(Span)`
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: ${gradientAnimation} 1s linear infinite;
  animation-delay: 0.5s;
`;

const Span4 = styled(Span)`
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: ${gradientAnimation} 1s linear infinite;
  animation-delay: 0.75s;
`;

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      teacherId: "CSE-1801",
      password: "123456ashfaque",
      errors: null,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(values);
    },
  });
  return (
    <LoginBox>
      <StyledLoginBox>
        <Title>Login</Title>
        <form onSubmit={formik.handleSubmit}>
          <UserBox>
            <Input
              style={{
                borderColor: `${
                  formik.touched.teacherId && formik.errors.teacherId
                    ? "red"
                    : "white"
                }`,
              }}
              type="text"
              name="teacherId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.teacherId}
            />
            <Label htmlFor="teacherId">Teacher Id</Label>
            <Error>{formik.errors.teacherId}</Error>
          </UserBox>
          <UserBox>
            <Input
              style={{
                borderColor: `${
                  formik.touched.password && formik.errors.password
                    ? "red"
                    : "white"
                }`,
              }}
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <Error>{formik.errors.password}</Error>
            <Label htmlFor="password">Password</Label>
          </UserBox>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <SubmitButton>
              <Span1 />
              <Span2 />
              <Span3 />
              <Span4 />
              Login
            </SubmitButton>
          </div>
          <Error>{formik.errors.errors}</Error>
        </form>
      </StyledLoginBox>
    </LoginBox>
  );
};

export default Login;
