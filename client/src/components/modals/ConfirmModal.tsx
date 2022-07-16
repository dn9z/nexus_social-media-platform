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
import { ConfirmModalProps } from "../../types";
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
  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px silver;
  min-width: 300px;
  max-width: 800px;
  height: 190px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Zilla;
  font-size: 1.5rem;
`;

const Message = styled.p`
 all: unset;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;`



const ConfirmModal: React.FC<ConfirmModalProps> = ({
  showConfirmModal,
  setShowConfirmModal,
  confirmFn,
  idToDelete,
}) => {
  const context = React.useContext(Context);
  const theme = useTheme();

  if (showConfirmModal === true) {
    return (
      <Background
        onClick={() => {
          setShowConfirmModal(false);
        }}
      >
        <Container
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Message>Are you sure?</Message>
          <ButtonDiv>
            <Button
              onClick={() => {
                confirmFn(idToDelete);
                setShowConfirmModal(false);
                context.setNeedRefresh(!context.needRefresh);
                context.setPageNumber(1)
              }}
              text={"Yes"}
            />
            
            
            <Button
              onClick={() => {
                setShowConfirmModal(false);
              }}
              text={"No"}
            />
          </ButtonDiv>
          
        </Container>
      </Background>
    );
  } else {
    return <></>;
  }
};

export default ConfirmModal;
