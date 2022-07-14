import * as React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  all: unset;
  margin: 
  // z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 0.5rem;
  border: 2px solid white;
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
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (event: React.MouseEvent) => void | undefined;
   
}

const EditProfileButton: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} type={props.type} >
        <p>{ props.text }</p>
        </ButtonStyled>
  )
}

export default EditProfileButton