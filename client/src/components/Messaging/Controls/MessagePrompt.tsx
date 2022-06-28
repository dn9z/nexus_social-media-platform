import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import Image from "../../../icons/Image";
import Gif from "../../../icons/Gif";
import Send from "../../../icons/Send";


const IconContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0 0.25rem;
width: 55px;
height: 55px;
border-radius: 50%;
&:hover { background-color:${themeConf.menuItemHoverColor}};
`



const Prompt = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MessageInput = styled.span`
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
    content: "Enter your message";
    color: gray;
  }
`;

const MessagePrompt:React.FC = () => {
    const theme = useTheme();
  return (
    <Prompt>
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
      placeholder="Enter Message"
      contentEditable
    ></MessageInput>
    <IconContainer>
      <Send
        dropShadow={false}
        scaleFactor={0.65}
        color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
      />
    </IconContainer>
  </Prompt>
  )
}

export default MessagePrompt