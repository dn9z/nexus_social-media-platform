import * as React from "react";
import * as HookForm from "react-hook-form";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import { AuthContext } from "../../context/AuthContext";
import {
  FormProps,
  InputTextFieldProps,
  DataInputProps,
  RegisterProps as LoginProps,
} from "../../types";
import Button from "../../buttons/Button";
import Info from "../../icons/Info";
import Logo from "../../icons/Logo";
import Visbility from "../../buttons/Visbility";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import StandardHeader from "../../components/Header/StandardHeader";


const c1 = "#7a5dd1";
const c2 = "#00ffd0";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 430px;
  width: 275px;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
  background-color: ${themeConf.backgroundColor};
  margin: auto;
  margin-top: 5rem;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const context = React.useContext(Context);
  const { handleLogin} = React.useContext(AuthContext);

  // const [json, setJson] = React.useState<string>();
  const { register, handleSubmit } = HookForm.useForm<LoginProps>();
  const { mode } = useTheme();

  const onSubmit = async (data: LoginProps) => {
    try {
      const response = await axios.post("/api/user/login", data, {
        withCredentials: true
      });
      if (response.status === 200) {
        //everything went well!
        console.log(response.data.user.username.username)
        console.log("login successful");

        handleLogin(response.data.user.username, response.data.user._id);
        navigate("/");
        
      }
    } catch (error) {
      console.log(error);
      // setIsError(true);
      // setErrorMessage(error.response.data.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StandardHeader headingSize="1.75rem" subheading="" width="200px">
        <Logo scaleFactor={3} colorProps={{ colorOne: c1, colorTwo: c2 }} />
      </StandardHeader>
      <Container>
        <Label>
          <label>E-Mail</label>
        </Label>
        <Field>
          <Input passwordField={false} type="email" {...register("email", { required: true })} />
        </Field>
        <Label>
          <label>password</label>
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
      </Container>
      <Button onClick={() => {}} text="Login" type="submit" />
      <Footer>
        <p>No account? </p>
        <Link to="/register">Sign Up!</Link>
      </Footer>
    </FormContainer>
  );
};

export default Login;
