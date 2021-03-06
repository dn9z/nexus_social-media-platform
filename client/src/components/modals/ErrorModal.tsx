import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import World from "../../icons/World";
import Image from "../../icons/Image";
import Gif from "../../icons/Gif";
import Emoji from "../../icons/Emoji";
import Button from "../../buttons/Button";
import { ErrorModalProps } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";

const Background = styled.div`
  background-color: #4141418d;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${themeConf.backgroundColor};
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;
  width: 800px;
  height: 490px;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  width: 200px;
  height: 450px;
`;

const Left = styled.div`
  width: 200px;
  height: 450px;
`;

const Right = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 450px;
`;

const Title = styled.textarea`
  all: unset;
  width: 600px;
  height: 50px;
  font-weight: bold;
  margin-top: 20px;
  font-family: Zilla;
  font-size: 1.5rem;
`;

const Textarea = styled.textarea`
  all: unset;
  width: 600px;
  height: 200px;

  font-family: Zilla;
  font-size: 1.5rem;
`;

const ErrorModal: React.FC<ErrorModalProps> = ({ message }) => {
  const context = React.useContext(Context);
  const theme = useTheme();

  if (context.showErrorModal === true) {
    return (
      <Background
        onClick={() => {
          context.setShowErrorModal(false);
        }}
      >
        <Container
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Message>{message}</Message>
          <button
            onClick={() => {
              context.setShowErrorModal(false);
            }}
          >
            OK
          </button>
        </Container>
      </Background>
    );
  } else {
    return <></>;
  }
};

export default ErrorModal;
