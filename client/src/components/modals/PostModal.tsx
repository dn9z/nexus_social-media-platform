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
import axios from 'axios'
/**
 *
 *
 *
 */
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

const Right = styled.form`
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

const BottomContainer = styled.div<PModalBottomContainerProps>`
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) =>
    props.bottomBorder ? "2px solid silver" : "none"};
`;

const PostModal: React.FC<ModalProps> = (props) => {
  const context = React.useContext(Context);
  const theme = useTheme();

  async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    console.log(event)
    event.preventDefault()
    const formData = new FormData(event.currentTarget);

    const data = {
      date: new Date(Date.now()),
      title: 'title',
      body: formData.get('body'),
      media: 'empty'
    }
    console.log(data)

    try {
      const response = await axios.post("http://localhost:3000/api/post/create", data);

      if (response.status === 200) {
        //everything went well!
        console.log("post was created");
        //  navigate("/login");
        // setShowModal(false)
      }
    } catch (error) {
      console.log(error);
      // setIsError(true);
      // setErrorMessage(error.response.data.message);
    }
  }

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
        <Right onSubmit={handleSubmit}>
          <Textarea name="body" placeholder="What's new?" />
          {/* image placeholder pic */}
          {/** */}
          <div style={{ width: "100px" }}>
            <img
              style={{ width: "100%", marginBottom: "20px" }}
              src="https://its-mobility.de/wp-content/uploads/placeholder.png"
              alt=""
            />
          </div>
          <BottomContainer bottomBorder={true}>
            <World
              dropShadow={false}
              scaleFactor={0.55}
              color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
            />
          </BottomContainer>
          <BottomContainer bottomBorder={false}>
            <div>
              {/**
               * @Deniz Denke mal, hier kommen am besten onClick-Handler hin, für Pic-Upload, Gif-Upload.
               *        Wenn du diese in context schreibst, kannst du den type in types.ts so setzen:
               *        handleSomeBlaBlaClick:  (event: React.MouseEvent) => void;
               *        Die Emoji funktion packe ich ins backlog. 
               */}
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
               {/**
               * @Deniz Für den Post Submit hab ich noch keine submit function geschrieben. 
               *      onClick={(event) => context.handlePostClick(event)} schließt das modal aktuell einfach wieder    
               */}
            {/* <Button
              
              // onClick={(event) => context.handlePostClick(event)}
              text="Post"
              // type="submit"
            /> */}
              <button>Submit</button>
          </BottomContainer>
        </Right>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default PostModal;
