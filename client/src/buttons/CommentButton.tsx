import * as React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  height: 40px;
  width: 80px;
  background-color: springgreen;
  margin: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: grey;
    // border: 0.5px solid springgreen;
    color: springgreen;
  }
  // &:active {
  //   transform: scale(0.9);
  // }
  > p {
    font-family: Quicksand;
    font-size: 1.3rem;
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