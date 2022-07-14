import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import UserPic from "../../User/UserPic"
import { MessageProps } from "../../../types";

const Container = styled.div`
  min-height: 50px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const RowContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  min-width: 70%;
  width: auto;
  height: auto;
  border: 1px solid transparent;
  border-radius: 0 15px 15px 15px;
  background-color: #f1dcff;
  font-family: Zilla;
  padding: 0.5rem;
  color: black;
  & > p {
    line-break: word;
  }
`;
const Username = styled.p`
font-family: NotoSans;
font-size: 0.8rem;
margin-bottom: 0.5rem;
letter-spacing: 0.1rem;`



const ReceivedMessage: React.FC<MessageProps> = ({text, date, username, avatar}) => {
  

  return (
    <Container>
      <RowContainer>
        <UserPic customSize="30px" image={avatar}/>
        <ColumnContainer>
          <ChatBubble>
          <Username>{username}</Username>
            <p>{text}</p>
          </ChatBubble>

          <DateBox>{date}</DateBox>
        </ColumnContainer>{" "}
      </RowContainer>
    </Container>
  );
};

export default ReceivedMessage;
