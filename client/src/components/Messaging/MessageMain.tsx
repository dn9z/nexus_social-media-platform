import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import Search from "../../icons/Search";
import NewMessage from "../../icons/NewMessage";
import Send from "../../icons/Send";
import Emoji from "../../icons/Emoji";
import Button from "../../buttons/Button";
import SentMessage from "./MessageItems/SentMessage";
import ReceivedMessage from "./MessageItems/ReceivedMessage";
import MessagePrompt from "./Controls/MessagePrompt";
import NewMessageSearch from "./Controls/NewMessageSearch"

const Container = styled.div`
  width: calc(60vw - 2.6rem);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 97vh;

  margin: 0.8rem;
  border: 1px solid grey;
  background-color: ${themeConf.backgroundColor};
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
`;

const ListContainer = styled.div`
  width: 40%;
  height: 100%;
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
`;


const MessageContainer = styled.div`
  padding: 0.5rem;
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: all 0.5s ease-out;
  &:hover {
    transition: all 0.5s ease-out;
    overflow-y: scroll;
  }
`;

const today: object = new Date();

const MessageMain: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ListContainer>
        <NewMessageSearch/>
      </ListContainer>
      <MessageContainer>
        <SentMessage text="Hello, how are you?" date={today} />
        <ReceivedMessage text="I'm fine, thanks. How about you?" date={today} />

        <MessagePrompt />
      </MessageContainer>
    </Container>
  );
};

export default MessageMain;
