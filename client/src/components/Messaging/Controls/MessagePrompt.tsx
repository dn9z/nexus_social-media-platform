import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import { AuthContext } from "../../../context/AuthContext";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import Image from "../../../icons/Image";
import Gif from "../../../icons/Gif";
import Send from "../../../icons/Send";
import axiosApiInstance from "../../../util/axiosInstance";
import { useMessageContext } from "../../../context/MessageContext";


const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.25rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  &:hover {
    background-color: ${themeConf.menuItemHoverColor};
  }
`;

const Prompt = styled.form`
  width: 100%;
  position: relative;
  bottom: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 575px) {
    position: fixed;
  }
`;

const MessageInput = styled.span<{username: string}>`
  padding: 1rem;
  border: 1px solid grey;
  height: auto;
  width: 60%;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  line-break: word;
  font-family: Zilla;
  font-size: 1rem;
  &:empty::before {
    content: "Enter message for ${props => props.username}";
    color: gray;
  }

  @media (max-width: 575px) {
    padding: 5px;
    border-radius: 10px;
  }
`;

const SubmitButton = styled.button`
  all: unset;
`;
interface MessageProps {
_userTo: string,
username: string


}
const MessagePrompt: React.FC<MessageProps> = (props) => {
  const msg = useMessageContext()
  const context = React.useContext(Context)
  const {  userId } = React.useContext(AuthContext);
  const [message, setMessage] = React.useState("");




  
  const theme = useTheme();

  const handleInput = (event: React.SyntheticEvent) => {
    setMessage(event.currentTarget.innerHTML);
    
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.children[2].innerHTML = ""

   /*  _userFrom: props._userTo,
      _userTo: userId,
      _userFrom: userId,
      _userTo: props._userTo, */

    
    const data = {
      _userFrom: userId,
      _userTo: props._userTo,
      _conversation: msg.conversationId,
      date: new Date(Date.now()),
      text: message,
      /* media: "empty", */
    };

    try {
      const response = await axiosApiInstance.post(
        "http://localhost:3000/api/messages",
        data
      );

      if (response.status === 200) {
        
        msg.setIsCreated(!msg.isCreated);
      }
    } catch (error) {
      console.log(error);
      // setIsError(true);
      // setErrorMessage(error.response.data.message);
    }
    
  }

  /* const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
     event.currentTarget.previousElementSibling!.innerHTML = ""
  };
 */
  return (
    <Prompt onSubmit={(event) => handleSubmit(event)}>
      <IconContainer>
        <Image
          dropShadow={false}
          scaleFactor={0.65}
          color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
        />
      </IconContainer>
      <IconContainer>
        <Gif
          dropShadow={false}
          scaleFactor={0.65}
          color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
        />
      </IconContainer>
      <MessageInput
        role="textbox"
        data-name="messageInput"
        onInput={(event) => handleInput(event)}
        username={props.username}
        contentEditable
      ></MessageInput>
      <SubmitButton /* onClick={handleClick} */ type="submit">
        <IconContainer>
          <Send
            dropShadow={false}
            scaleFactor={0.65}
            color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
          />
        </IconContainer>
      </SubmitButton>
    </Prompt>
  );
};

export default MessagePrompt;
