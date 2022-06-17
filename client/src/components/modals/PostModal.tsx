import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import World from "../../icons/World";
import Image from "../../icons/Image";
import Gif from "../../icons/Gif";
import Emoji from "../../icons/Emoji";
import Button from "../../buttons/Button"

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${themeConf.backgroundColor};
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
  width: 800px;
  height: 490px;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 200px;
  height: 450px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 450px;
`;

const Textarea = styled.textarea`
  all: unset;
  width: 600px;
  height: 250px;
  margin-top: 20px;
  font-family: Zilla;
  font-size: 1.5rem;
`;

const PicContainer = styled.div`
  width: 4rem;
  padding-top: 1rem;
  padding-left: 1rem;
`;

interface ContainerProps {
  bottomBorder: boolean;
}

const BottomContainer = styled.div<ContainerProps>`
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => (props.bottomBorder ? "2px solid silver" : "none")};
`;

interface ModalProps {
  show: boolean;
}

const PostModal: React.FC<ModalProps> = (props) => {
  const context = React.useContext(Context);
  const theme = useTheme();

  if (context.showPostModal === true) {
    return (
      <Container>
        <Left>
          <PicContainer>
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src="https://www.zvr-info.de/wp-content/uploads/2018/02/Platzhalter.png"
              alt=""
            />
          </PicContainer>
        </Left>
        <Right>
          <Textarea placeholder="What's new?" />
          <div style={{width:"100px"}}><img
            style={{ width: "100%", marginBottom: "20px" }}
            src="https://its-mobility.de/wp-content/uploads/placeholder.png"
            alt=""
          /></div>
          <BottomContainer bottomBorder={true}>
            <World
              dropShadow={false}
              scaleFactor={0.55} 
              color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
            />
          </BottomContainer>
          <BottomContainer bottomBorder={false}>
            <div>
                <Image
                  dropShadow={false}
                  scaleFactor={0.55} 
                  color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                />
                 <Gif
                  dropShadow={false}
                  scaleFactor={0.55} 
                  color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                />
                 <Emoji
                  dropShadow={false}
                  scaleFactor={0.55} 
                  color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                />
            </div>
            <Button onClick={(event) => context.handlePostClick(event)} text="Post" type="button"/>
          </BottomContainer>
        </Right>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default PostModal;
