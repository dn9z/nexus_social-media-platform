import * as React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
all: unset;
position: absolute;
top: 50%;
left: 50%;
color: springgreen;
transform: translate(-50%, -50%);
height: 30px;
border: 1px solid springgreen;
background-color: white;
font-size: 1.2rem;
border-radius: 50%;
padding: 0.5rem;
cursor: pointer;

&:hover {
  background-color: springgreen;
  color: white;
  border: 1px solid white;
}
> p {
  font-family: Quicksand;
      font-size: 1.2rem;
      font-weight: 700;
    }
`;

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (event: React.MouseEvent) => void | undefined;
   
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} type={props.type} >
        <p>{ props.text }</p>
        </ButtonStyled>
  )
}

export default Button