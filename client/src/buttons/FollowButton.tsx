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
  height: 30px;
  width: 90px;
  margin-left: 3rem;
  background-color: springgreen;
  border: 1px solid white;
  color: white;
  cursor: pointer;
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
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => Promise<void>;
   
}

const FollowButton: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} type={props.type} >
        <p>{ props.text }</p>
        </ButtonStyled>
  )
}

export default FollowButton