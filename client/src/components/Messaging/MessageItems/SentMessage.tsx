import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import { MessageProps } from "../../../types";

const UserContainer = styled.div`
  min-height: 50px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 50px;
  }
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

  @media (max-width: 575px) {
    margin-top: 0px;
  }

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

  @media (max-width: 575px) {
    margin: 5px;
  }
`;
const Username = styled.p`
font-family: NotoSans;
font-size: 0.8rem;
margin-bottom: 0.5rem;
letter-spacing: 0.1rem;

@media (max-width: 575px) {
  margin: 0px;
}

`



const SentMessage: React.FC<MessageProps> = ({text,date,username}) => {
  
  return (
    <UserContainer>
      <ColumnContainer>
        <ChatBubble>
        <Username>{username}</Username>
          <p>{text}</p>
          
        </ChatBubble>
        <DateBox>{date}</DateBox>
      </ColumnContainer>
    </UserContainer>
  );
};

export default SentMessage;
