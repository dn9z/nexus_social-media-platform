import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";

const UserContainer = styled.div`
  min-height: 50px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateBox = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  font-family: Inconsolata;
  color: ${themeConf.fontColor};
`;

const ChatBubble = styled.div`
  min-width: 20%;
  width: auto;
  height: auto;
  border: 1px solid transparent;
  border-radius: 15px 15px 0 15px;
  background-color: #8b14f9;
  font-family: Zilla;
  padding: 0.5rem;
  color: white;
  & > p {
    line-break: word;
  }
`;



interface MessageProps {
    text: string,
    date: object
}

const SentMessage: React.FC<MessageProps> = ({text,date}) => {
  
  return (
    <UserContainer>
      <ColumnContainer>
        <ChatBubble>
          
          <p>{text}</p>
          
        </ChatBubble>
        <DateBox>{date.toLocaleString()}</DateBox>
      </ColumnContainer>
    </UserContainer>
  );
};

export default SentMessage;
