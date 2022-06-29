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
import { ModalProps, PModalBottomContainerProps } from "../../types";
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

const PicContainer = styled.div`
  width: 4rem;
  padding-top: 1rem;
  padding-left: 1rem;
`;

const BottomContainer = styled.div<PModalBottomContainerProps>`
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => (props.bottomBorder ? "2px solid silver" : "none")};
`;

const PostModal: React.FC<ModalProps> = (props) => {
  const context = React.useContext(Context);
  const theme = useTheme();
  const [imagePath, setImagePath] = React.useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      date: new Date(Date.now()),
      title: formData.get("title"),
      body: formData.get("body"),
      media: formData.get("image"),
    };

    try {
      const response = await axiosApiInstance.post("http://localhost:3000/api/post/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("post was created");
        // setShowModal(false)
        context.setShowPostModal(false);
      }
    } catch (error) {
      console.log(error);
      // setIsError(true);
      // setErrorMessage(error.response.data.message);
    }
  }

  if (context.showPostModal === true) {
    return (
      <Background
        onClick={() => {
          context.setShowPostModal(false);
        }}
      >
        <Container
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Left>
            <PicContainer>
              <img
                style={{ width: "100%", borderRadius: "50%" }}
                src="https://www.zvr-info.de/wp-content/uploads/2018/02/Platzhalter.png"
                alt=""
              />
            </PicContainer>
          </Left>
          <Right onSubmit={handleSubmit} encType="multipart/form-data">
            <Title name="title" placeholder="Title" />
            <Textarea name="body" placeholder="...Body" />
            {imagePath ? (
              <img style={{ width: "20%", marginBottom: "20px" }} src={`/${imagePath}`} alt="" />
            ) : (
              <img
                style={{ width: "20%", marginBottom: "20px" }}
                src="https://its-mobility.de/wp-content/uploads/placeholder.png"
                alt=""
              />
            )}
            <BottomContainer bottomBorder={true}>
              <World
                dropShadow={false}
                scaleFactor={0.55}
                color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
              />
            </BottomContainer>
            <BottomContainer bottomBorder={false}>
              <div>
                <label>
                  <Image
                    dropShadow={false}
                    scaleFactor={0.55}
                    color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                  />
                  <input style={{ display: "" }} type="file" name="image" accept="image/*" />
                </label>

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
              <Button text="Post" type="submit" />
            </BottomContainer>
          </Right>
        </Container>
      </Background>
    );
  } else {
    return <></>;
  }
};

export default PostModal;
