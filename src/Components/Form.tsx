/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { keyframes } from "styled-components";
const gradientAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;
const FormContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
`;
const Container = styled.div`
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
const SubmitButton = styled.button`
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
const Error = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -4px;
`;
const Form = ({
  title,
  formik,
  children,
  submitText,
  disabled,
  error,
}: {
  title: string;
  formik: any;
  children: any;
  submitText: string;
  disabled?: boolean;
  error?: string;
}) => {
  return (
    <FormContainer>
      <Container>
        <Title>{title}</Title>
        <form onSubmit={formik.handleSubmit}>
          {children}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <SubmitButton type="submit" disabled={disabled || false}>
              <Span1 />
              <Span2 />
              <Span3 />
              <Span4 />
              {submitText}
            </SubmitButton>
          </div>
          <Error>{error}</Error>
        </form>
      </Container>
    </FormContainer>
  );
};

export default Form;
