import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
/* import World from "../../icons/World"; */
import Image from "../../icons/Image";
/* import Gif from "../../icons/Gif";
import Emoji from "../../icons/Emoji"; */
import Button from "../../buttons/Button";
import { AuthContext } from "../../context/AuthContext";
import UserPic from "../User/UserPic";
import { ModalProps, PModalBottomContainerProps } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";
import { useInterval } from "usehooks-ts";
import Pic from "../../img/Portrait_Placeholder.png";
import { reforwardRef } from "react-chartjs-2/dist/utils";
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
  border: 2px solid yellow;

  @media (min-width: 575px) and (max-width: 867px) {
    width: 90vw;
    height: 60vh;
    top: 40%;
  }

  @media (max-width: 575px) {
    width: 90%;
    height: 82%;
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 200px;
  height: 450px;

  @media (max-width: 575px) {
    height: auto;
    width: 90%;
  }
  @media (min-width: 575px) and (max-width: 867px) {
    height: 60vh;
    width: 30%;
  }
`;

const Right = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 450px;

  @media (max-width: 575px) {
    width: 90%;
    height: 80%;
  }

  @media (min-width: 575px) and (max-width: 867px) {
    width: 70%;
    height: 60vh;
  }
`;

const Title = styled.textarea`
  all: unset;
  width: 600px;
  height: 50px;
  font-weight: bold;
  margin-top: 20px;
  font-family: Zilla;
  font-size: 1.5rem;

  @media (max-width: 867px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    margin-top: 0px;
  }
`;

const Textarea = styled.textarea`
  all: unset;
  width: 600px;
  height: 200px;
  font-family: Zilla;
  font-size: 1.5rem;

  @media (max-width: 867px) {
    width: 100%;
  }
`;

const PicContainer = styled.div`
  padding: 5px;
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 867px) {
    width: auto;
  }
`;

const BottomContainer = styled.div<PModalBottomContainerProps>`
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: ${(props) =>
    props.bottomBorder ? "2px solid silver" : "none"};
`;

const Input = styled.input`
  background-color: white;
  font-size: 1rem;
  font-family: Zilla;
  border: 1px solid transparent;
  background-color: transparent;
  padding-top: 3px;
  height: 35px;
  z-index: 5;
  color: ${themeConf.fontColor};
  cursor: pointer;
  :hover {
    border: 1px solid ${themeConf.menuItemHoverColor};
    color: ${themeConf.fontColor};
  }
`;
const IconContainer = styled.div`
  z-index: 3;
  position: absolute;
  top: 5px;
  left: 10%;
`;
const PostModal: React.FC<ModalProps> = (props) => {
  const context = React.useContext(Context);
  const theme = useTheme();
  const { userId } = React.useContext(AuthContext);
  const [userAvatar, setUserAvatar] = React.useState("");
  const [imagePath, setImagePath] = React.useState<File | null>(null);
  const [SET, setSET] = React.useState("");

  React.useEffect(() => {
    const getUserAvatar = async () => {
      const response = await axiosApiInstance.get(
        `/api/user/getuserbyid/${userId}`
      );

      setUserAvatar(response.data.avatar);
    };
    getUserAvatar();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      date: new Date(Date.now()),
      title: formData.get("title"),
      body: formData.get("body"),
      media: formData.get("image") ? formData.get("image") : "",
    };

    const axiosOptions = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await axiosApiInstance.post(
        "/api/post/create",
        data,
        axiosOptions
      );

      if (response.status === 200) {
        console.log(response.data);
        context.setShowPostModal(false);
        context.setNeedRefresh(true);
      }
    } catch (error) {
      console.log(error);
      // setIsError(true);
      // setErrorMessage(error.response.data.message);
    }
  }

  const inputRef = React.useRef<HTMLInputElement>({
    files: null,
  } as HTMLInputElement);
  /* 
    React.useEffect(() => {
      inputRef!.current!.focus();
    },[inputRef]); */

  /*    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setImagePath(event.target.files![0]);
    } */
  console.log(imagePath);
  const handleFileUpload = async () => {
    setImagePath(inputRef.current!.files![0]);
  console.log(imagePath);
    const formData = new FormData();
    formData.append("_user", userId);
    formData.append("media", imagePath?.name!);
    formData.append("title", "imagePath?.name!");
    formData.append("body", "imagePath?.name!");
    formData.append("date", Date.now().toString());
    const response = await axiosApiInstance.post(
      "/api/post/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      console.log(response);
      setSET(response.data.createdPost.media);
    }
  };

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
              <UserPic image={userAvatar} customSize="55px" />
            </PicContainer>
          </Left>
          <Right onSubmit={handleSubmit} encType="multipart/form-data">
            <Title name="title" placeholder="Title" />
            <Textarea name="body" placeholder="...Body" />
            {imagePath ? (
              <img
                style={{ width: "20%", marginBottom: "20px" }}
                src={`//${SET}`}
                alt=""
              />
            ) : (
              <img
                style={{ width: "20%", marginBottom: "20px" }}
                src={Pic}
                alt=""
              />
            )}
            <BottomContainer bottomBorder={true}>
              {/*     <World
                dropShadow={false}
                scaleFactor={0.55}
                color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
              /> */}
            </BottomContainer>
            <BottomContainer bottomBorder={false}>
              <Input

                /*          onChange={(event)=>setImagePath(event.target.value)} */
                /*   onChange={(e) => { handleFileChange(e);  }} */
                onChange={() => {
                  handleFileUpload();
                }}
                ref={inputRef}

                style={{ display: "inline-block" }}
                type="file"
                name="image"
                accept="image/*"
              />

              <IconContainer>
                <Image
                  dropShadow={false}
                  scaleFactor={0.55}
                  color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                />
              </IconContainer>

              {/*  <Gif
                  dropShadow={false}
                  scaleFactor={0.55}
                  color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                />
                <Emoji
                  dropShadow={false}
                  scaleFactor={0.55}
                  color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
                /> */}

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
