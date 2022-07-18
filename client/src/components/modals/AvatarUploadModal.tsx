import * as React from "react";
import { Context } from "../../context/Context";
import styled from "styled-components";
import { ModalProps } from "../../types";
import Button from "../../buttons/Button"
import axiosApiInstance from "../../util/axiosInstance";
import * as themeConf from "../../styles/theme";


const Background = styled.div`
  background-color: #4141418d;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  z-index: 10;
`;

const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 25%;
  left: 50%;
  padding: 15px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;
  z-index: 15;

  @media (max-width: 575px) {
    width: 80vw;
  }
`;

const Input = styled.input`
  background-color: white;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1.3rem;
 font-family: Zilla;
content:"none";
 color: ${themeConf.fontColor}};
 &::before {
  content: "Choose file";
  cursor: pointer;
  font-family: Quicksand;
  color:black;
  font-size: 1.5rem;
  font-weight: bold;
  }
  :hover {
    background-color: springgreen;
    color: white;
}
@media (max-width: 575px) {
  width: 100%;
  display: flex;
  font-size: clamp(0.8rem, 0.4203rem + 2.1695vw, 1.2rem);
  &::before {
    font-size: clamp(1rem, 0.5254rem + 2.7119vw, 1.5rem);
}

`;

const AvatarUploadModal: React.FC<ModalProps> = () => {
  const context = React.useContext(Context);


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      avatar: formData.get("image"),
    };

    try {
      const response = await axiosApiInstance.post("/api/user/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("image was uploaded", data);
        context.setShowAvatarModal(false);
        context.setAvatarModalSaved(avatarModalSaved => !avatarModalSaved);
      }
    } catch (error) {
      console.log(error);
    }
  }


  if (context.showAvatarModal === true) {
    return (
      <Background
        onClick={() => {
          context.setShowAvatarModal(false);
        }}
      >
        <FormContainer onSubmit={handleSubmit} encType="multipart/form-data"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <label>
            <Input
              // style={{ display: "" }}
              type="file"
              name="image"
              accept="image/*"
            />
          </label>
          <Button text="Save" type="submit" />

        </FormContainer>
      </Background>
    );
  } else {
    return <></>;
  }
};

export default AvatarUploadModal;
