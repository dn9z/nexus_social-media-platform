import * as React from "react";
import styled from "styled-components";
import { useMessageContext } from "../../context/MessageContext";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import SentMessage from "./MessageItems/SentMessage";
import ReceivedMessage from "./MessageItems/ReceivedMessage";
import MessagePrompt from "./Controls/MessagePrompt";
import NewMessageSearch from "./Controls/NewMessageSearch";
import NewMessageModal from "../modals/NewMessageModal";
import axiosApiInstance from "../../util/axiosInstance";
import { AuthContext } from "../../context/AuthContext";
import { useInterval } from "usehooks-ts";
import UserPic from "../User/UserPic";
import Pic from "../../img/Portrait_Placeholder.png";

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

  @media (max-width: 575px) {
    position: relative;
    margin: 0;
    width: auto;
    flex-direction: column;
    align-items: none;
  }

  @media (min-width: 576px) and (max-width: 1500px)  {
    width: 90%;
    margin: auto;
    margin-top: 70px;
  }
`;

const ListContainer = styled.div`

  width: 40%;
  height: 100%;
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;

  @media (max-width: 575px) {
    position: sticky;
    width: 100%;
    top: 60px;
    height: 30%;
  }
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

  @media (max-width: 575px) {
    height: 100%;
    width: 100%;
    margin-top: 60px;
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

  @media (max-width: 575px) {
    height: auto%;
    overflow-y: scroll;
  }
`;
/** */
const MessageMain: React.FC = () => {
  const {
    conversationId,
    setConversationId,
    isCreated,
    recipient,
    setRecipient,
    recipientId,
    setRecipientId,
    users,
    setUsers,
  } = useMessageContext();

  const { userId } = React.useContext(AuthContext);
  const context = React.useContext(Context);

  const [conversationToDisplay, setConversationToDisplay] = React.useState<
    Array<{
      date: string;
      participants: { _userFrom: string; _userTo: string };
      text: string;
      _conversation: string;
      _id: string;
    }>
  >();

  const [list, setList] = React.useState<
    Array<{
      _id: string;
      participants: { _userFrom: string; _userTo: string };
    }>
  >();

  const POLL_RATE = 500;

  /**
   * useInterval is a hook that runs a function every x seconds
   * @param callback - function to run
   * @param POLL_RATE - how often to run the function
   */

  useInterval(() => {
    const getConversations = async () => {
      const response = await axiosApiInstance.get(
        `http://localhost:3000/api/messages/myconversations`
      );

      setList(response.data.foundConversations);
    };
    getConversations();
  }, POLL_RATE);

  /**
   * useEffect to load conversations when new message isCreated, making sure to render on state change
   * @param isCreated - boolean to check if message isCreated
   * @param conversationId - id of conversation to load
   */
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
   * function to find the recipients username in users[] with id (string)
   * @param id : string
   * @returns
   */

  const getUsername = (id: string) => {
    return users?.find((user) => user._id === id)!.username;
  };

  /**
   * function to find the recipients avatar in users[] with id (string)
   * @param id : string
   * @returns
   */
  const getAvatar = (id: string) => {
    return users?.find((user) => user._id === id)!.avatar;
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
              <UserPic
                customSize="40px"
                image={
                  getAvatar(conversation.participants._userTo)
                    ? getAvatar(conversation.participants._userTo)
                    : Pic
                }
              />
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
              avatar=""
            />
          );
        } else {
          return (
            <ReceivedMessage
              key={message._id}
              text={message.text}
              username={getUsername(message.participants._userFrom)!}
              date={message.date}
              avatar={
                getAvatar(message.participants._userFrom)
                  ? getAvatar(message.participants._userFrom)
                  : Pic
              }
            />
          );
        }
      });
    }
  };

  return (
    <Container>
      <NewMessageModal show={context.showNewMessageModal} />
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

/* user.avatar ? "http://localhost:3001/" + user.avatar : Pic */
