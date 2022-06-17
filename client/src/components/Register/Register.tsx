import * as React from "react";
import * as HookForm from "react-hook-form";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import { FormProps, InputTextFieldProps, DataInputProps, RegisterProps } from "../../types";
import Button from "../../buttons/Button";
import Info from "../../icons/Info";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 630px;
  width: 275px;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
  background-color: ${themeConf.backgroundColor};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Input = styled.input`
  width: 225px;
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

const Register: React.FC = () => {
  const [json, setJson] = React.useState<string>();
  const { register, handleSubmit } = HookForm.useForm<RegisterProps>();
  const {mode} = useTheme()

  const onSubmit = (data: RegisterProps) => {
    setJson(JSON.stringify(data));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <Container>
        <Label>
          <label>First name</label>
        </Label>
        <Field>
          <Input {...register("firstName", { required: true })} />
        </Field>
        <Label>
          <label>Last name</label>
        </Label>
        <Field>
          <Input {...register("lastName", { required: true })} />
        </Field>
        <Label>
          <label>User name</label>
          <Icon>
            <Info color={mode==="dark" ? "white" : "black"} scaleFactor={0.45} dropShadow={false} />
          </Icon>
        </Label>
        <Field>
          <Input {...register("userName", { required: true })} />
        </Field>
        <Label>
          <label>E-Mail</label>
        </Label>
        <Field>
          <Input type="email" {...register("eMailAddress", { required: true })} />
        </Field>
        <Label>
          <label>password</label>
          <Icon>
            <Info color={mode==="dark" ? "white" : "black"}  scaleFactor={0.45} dropShadow={false} />
          </Icon>
        </Label>
        <Field>
          <Input type="password" {...register("password", { required: true })} />
        </Field>
        {json}
      </Container>
      <Button onClick={()=>{}} text="Register" type="submit"/>
    </FormContainer>
  );
};

export default Register;
