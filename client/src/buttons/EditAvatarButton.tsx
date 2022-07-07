import * as React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
text-align: center;
all: unset;
position: absolute;
top: 0.2rem;
right: -1rem;
height: 30px;
border: 1px solid black;
// background-color: rgba(0, 0, 0, 0.7);
// color: springgreen;
background-color: white;
font-size: 1.2rem;
border-radius: 50%;
padding: 0.5rem;

box-shadow: 0px 0px 2px 2px black;
&:hover {
  background-color: grey;
  color: springgreen;
  border: 2px solid white;
}
&:active {
  transform: scale(0.9);
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