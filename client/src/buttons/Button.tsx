import * as React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 0.25rem;
  height: 40px;
  width: 110px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: springgreen;
  color: white;
  &:hover {
    background-color: white;
    border: 1px solid springgreen;
    color: springgreen;
  }
  &:active {
    transform: scale(0.9);
  }
  > p {
    font-family: Quicksand;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (event: React.MouseEvent) => void;
   
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} type={props.type} >
        <p>{ props.text }</p>
        </ButtonStyled>
  )
}

export default Button