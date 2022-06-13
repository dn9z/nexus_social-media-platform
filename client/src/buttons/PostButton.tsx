import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
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
    text: string
}

const PostButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button>
    <p>{props.text}</p>
  </Button>
  )
}

export default PostButton