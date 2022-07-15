import * as React from "react";
import * as HookForm from "react-hook-form";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import {
  FormProps,
  InputTextFieldProps,
  DataInputProps,
  RegisterProps,
} from "../../types";
import Button from "../../buttons/Button";
import Info from "../../icons/Info";
import Logo from "../../icons/Logo";
import Visbility from "../../buttons/Visbility";
import StandardHeader from "../../components/Header/StandardHeader";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useMediaQuery } from "usehooks-ts";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 650px;
  width: 545px;
  margin: 5rem auto;
  padding: 1rem;
  position: relative;
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
  background-color: ${themeConf.backgroundColor};

  @media (max-width: 575px) {
    align-items: center;
    margin: 0;
    height: auto;
    width: 100vw;
    padding-top: 3rem;
    border: none;
    box-shadow: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  color: ${themeConf.fontColor};
  margin: 0 1rem;
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-family: Inconsolata;
    font-size: 1.5rem;
    /* padding-left: 0.5rem; */
  }
  & > h1 {
    font-size: 3.75rem;
    font-weight: 500;
    font-family: Quicksand;
    letter-spacing: 1rem;
    padding-right: 2rem;
  }
  & > div {
    & > svg {
      margin-bottom: 50px;
    }
  }
`;

const Subheading = styled.div`
  color: ${themeConf.fontColor};
  position: absolute;
  right: 0;
  top: 34%;
  width: 240px;
  margin: 1rem;
  font-family: Inconsolata;
  font-size: 2rem;
  text-align: right;
  font-style: normal;
  & > div {
    font-family: Quicksand;
    font-style: normal;
    font-size: 2.5rem;
    font-weight: 500;
    margin-right: 2rem;
    height: 30px;
    letter-spacing: 0.75rem;
    transform: scale(1.3);
  }

  @media (max-width: 575px) {
    display: flex;
    position: relative;
    left: -15px;
    right: 0;
    margin: 0;
    top: 0;
    font-size: clamp(0.8rem, 0.0407rem + 4.339vw, 1.6rem);
    width: 80vw;

    & > div {
      width: 130px;
      margin: 0;
      margin-top: 0.2rem;
      margin-left: 0.8rem;
      margin-right: 0.8rem;
      padding-left: 0.8rem;
      font-size: clamp(0.8rem, 0.0407rem + 4.339vw, 1.6rem);
      height: 1rem;
      letter-spacing: 0.4rem;
      
    }
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.div`
  height: 30px;
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Quicksand;
`;

const Input = styled.input<InputTextFieldProps>`
  width: ${(props) => (props.passwordField ? "180px" : "225px")};
  height: 35px;
  border: 1px solid ${themeConf.fontColor};
  color: ${themeConf.fontColor};
  background-color: ${themeConf.backgroundColor};
  font-family: Quicksand;
  font-size: 1rem;
  border-radius: 5px;
  padding: 5px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0.25rem;
  > p {
    font-family: Inconsolata;
    font-size: 1rem;
    font-weight: 500;
    padding-right: 1rem;
    color: ${themeConf.fontColor};
  }
  > a {
    font-family: Quicksand;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 10%;
    color: ${themeConf.fontColor};
    text-decoration: none;
    &:hover {
      background-color: ${themeConf.menuItemHoverColor};
    }
  }
    @media (max-width: 575px) {
      position: relative;
    }
`;

const c1 = "#7a5dd1";
const c2 = "#00ffd0";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const small = useMediaQuery("(max-width: 359px)");
  const medium = useMediaQuery("(max-width: 575px)");

  const context = React.useContext(Context);
  // const [json, setJson] = React.useState<string>();
  const { register, handleSubmit } = HookForm.useForm<RegisterProps>();
  const { mode } = useTheme();

  const onSubmit = async (data: RegisterProps) => {
    // setJson(JSON.stringify(data));
    console.log(data);
    if (data.password === data.rePassword) {
      try {
        const response = await axios.post("/api/user/register", data);
        if (response.status === 200) {
          //everything went well!
          console.log("user was created");
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        // setIsError(true);
        // setErrorMessage(error.response.data.message);
      }
    } else {
      alert("Password does not match!");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StandardHeader
        headingSize={small ? "1.4rem" : "1.75rem"}
        subheading={medium ? "" : "welcome to"}
        width={"230px"}
      >
        <Logo
          scaleFactor={small ? 2 : 3}
          colorProps={{ colorOne: c1, colorTwo: c2 }}
        />
      </StandardHeader>
    
        <Subheading>
          The social board with its <div>users</div> 
          <br />in focus
        </Subheading>
      

      <Container>
        <Label>
          <label>First name</label>
        </Label>
        <Field>
          <Input
            passwordField={false}
            {...register("firstName", { required: true })}
          />
        </Field>
        <Label>
          <label>Last name</label>
        </Label>
        <Field>
          <Input
            passwordField={false}
            {...register("lastName", { required: true })}
          />
        </Field>
        <Label>
          <label>Username</label>
          <Icon>
            <Info
              color={mode === "dark" ? "white" : "black"}
              scaleFactor={0.45}
              dropShadow={false}
            />
          </Icon>
        </Label>
        <Field>
          <Input
            passwordField={false}
            {...register("username", { required: true })}
          />
        </Field>
        <Label>
          <label>E-Mail</label>
        </Label>
        <Field>
          <Input
            passwordField={false}
            type="email"
            {...register("email", { required: true })}
          />
        </Field>
        <Label>
          <label>Password</label>
          <Icon>
            <Info
              color={mode === "dark" ? "white" : "black"}
              scaleFactor={0.45}
              dropShadow={false}
            />
          </Icon>
        </Label>
        <Field>
          <Input
            passwordField={true}
            type={context.showPassword ? "text" : "password"}
            {...register("password", { required: true })}
          />
          <Visbility />
        </Field>
        <Field>
          <Input
            passwordField={true}
            type={context.showPassword ? "text" : "password"}
            {...register("rePassword", { required: true })}
          />
          <Visbility />
        </Field>
      </Container>
      <Button onClick={() => {}} text="Register" type="submit" />
      <Footer>
        <p>Already registered? </p>
        <Link to="/login">Login</Link>
      </Footer>
    </FormContainer>
  );
};

export default Register;
