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
import NewMessageModal from "../modals/NewMessageModal";
import SentMessage from "./MessageItems/SentMessage";
import ReceivedMessage from "./MessageItems/ReceivedMessage";
import MessagePrompt from "./Controls/MessagePrompt";
import NewMessageSearch from "./Controls/NewMessageSearch";
import axiosApiInstance from "../../util/axiosInstance";
import { AuthContext } from "../../context/AuthContext";
import UserPic from "../User/UserPic";

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

const ListItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0.5rem;
  color: ${themeConf.fontColor};
  font-family: NotoSans;
  font-size: 1.25rem;
  &:hover {
    background-color: ${themeConf.menuItemHoverColor};
  }
  & > p {
    margin-left: 0.5rem;
    font-size: 0.9rem;

    letter-spacing: 0.1rem;
  }
`;

const MessageMain: React.FC = () => {
  const [conversationToDisplay, setConversationToDisplay] = React.useState<
    Array<{
      date: string;
      participants: { _userFrom: string; _userTo: string };
      text: string;
      _conversation: string;
      _id: string;
    }>
  >();
  const {
    conversationId,
    setConversationId,
    isCreated,
    recipient,
    setRecipient,
    recipientId,
    setRecipientId,
  } = React.useContext(Context);
  const { userId } = React.useContext(AuthContext);
  const [list, setList] = React.useState<
    Array<{
      _id: string;
      participants: { _userFrom: string; _userTo: string };
    }>
  >();

  const [users, setUsers] =
    React.useState<Array<{ username: string; _id: string }>>();

  console.log(userId);

  React.useEffect(() => {
    const getConversations = async () => {
      const response = await axiosApiInstance.get(
        `http://localhost:3000/api/messages/myconversations`
      );

      setList(response.data.foundConversations);
    };
    getConversations();
  }, []);

  React.useEffect(() => {
    const getConversations = async () => {
      if (isCreated === false) {
        const response = await axiosApiInstance.get(
          `http://localhost:3000/api/messages/conversation/${conversationId}`
        );

        setConversationToDisplay(response.data.foundMessages);
      } else {
        const response = await axiosApiInstance.get(
          `http://localhost:3000/api/messages/conversation/${conversationId}`
        );

        setConversationToDisplay(response.data.foundMessages);
      }
    };
    getConversations();
  }, [conversationId, isCreated]);

  React.useEffect(() => {
    const getUsers = async () => {
      const response = await axiosApiInstance.get(
        `http://localhost:3000/api/messages/users`
      );

      setUsers(response.data.foundUsers);
    };
    getUsers();
  }, []);

  /**
   * function to find the recipients username in users[] with an id (string)
   * @param id : string
   * @returns
   */

  const getUsername = (id: string) => {
    return users?.find((user) => user._id === id)!.username;
  };

  const conversationListItem = () => {
    if (list) {
      return list!.map((conversation) => {
        return (
          <div
            key={conversation._id}
            onClick={() => {
              setConversationId(conversation._id);
              setRecipientId(conversation.participants._userTo);
              setRecipient(getUsername(conversation.participants._userTo)!);
            }}
          >
            <ListItemContainer>
              <UserPic customSize="30px" image={undefined} />
              <p>{getUsername(conversation.participants._userTo)}</p>
            </ListItemContainer>
          </div>
        );
      });
    }
  };

  const messageListItemByDate = () => {
    return conversationToDisplay!.sort(
      (a: { date: string }, b: { date: string }) =>
        Date.parse(a.date) - Date.parse(b.date)
    );
  };

  const messageList = () => {
    if (conversationToDisplay) {
      return messageListItemByDate().map((message) => {
        if (message.participants._userFrom === userId) {
          return (
            <SentMessage
              key={message._id}
              text={message.text}
              username={getUsername(message.participants._userFrom)!}
              date={message.date}
            />
          );
        } else {
          return (
            <ReceivedMessage
              key={message._id}
              text={message.text}
              username={getUsername(message.participants._userFrom)!}
              date={message.date}
            />
          );
        }
      });
    }
  };

  return (
    <Container>
      <ListContainer>
        <NewMessageSearch />
        {conversationListItem()}
      </ListContainer>

      <MessageContainer>
        {messageList()}

        <MessagePrompt _userTo={recipientId!} username={recipient!} />
      </MessageContainer>
    </Container>
  );
};

export default MessageMain;
