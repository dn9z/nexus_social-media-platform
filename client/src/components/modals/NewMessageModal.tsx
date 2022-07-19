import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import { useMessageContext } from "../../context/MessageContext";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import MessagePrompt from "../Messaging/Controls/MessagePrompt";
import SearchInput from "../Inputs/SearchInput";
import { ModalProps, PModalBottomContainerProps } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";
import UserPic from "../User/UserPic";
import Pic from "../../img/Portrait_Placeholder.png";
import { contextType } from "react-infinite-scroller";


const Background = styled.div`
  background-color: #4141418d;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${themeConf.backgroundColor};
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;
  width: 800px;
  height: 520px;
  z-index: 5;

  @media (min-width: 575px) and (max-width: 867px) {
    width: 90vw;
    height: 60vh;
    
  }

  @media (max-width: 575px) {
    width: 90%;
    height: 82%;
    display: flex;
    flex-direction: column;
  }
`;

const Right = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

const BottomContainer = styled.div<PModalBottomContainerProps>`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) =>
    props.bottomBorder ? "2px solid silver" : "none"};
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  padding: 1rem 0.5rem;
  align-items: center;
  color: ${themeConf.fontColor};
  font-family: NotoSans;
  font-size: 1.25rem;
  &:hover {
    background-color: ${themeConf.menuItemHoverColor};
  }
  &:active {
    transform: scale(0.95);
  }
  & > :nth-child(2) {
    margin-left: 1.5rem;
  }
`;
const NewMessageModal: React.FC<ModalProps> = (props) => {
  const msg = useMessageContext()

  const context = React.useContext(Context);
  const { userId } = React.useContext(AuthContext);

  const [selectedUser, setSelectedUser] = React.useState("");


  const [usersToDisplay, setUsersToDisplay] =
    React.useState<Array<{ username: string; _id: string, avatar:string }>>();

  React.useEffect(() => {
    const getUsers = async () => {
      const response = await axiosApiInstance.get(
        "/api/messages/users"
      );

      msg.setUsers(response.data.foundUsers);
    };
    getUsers();
  }, []);

  React.useEffect(() => {
    const getConversations = async () => {
      const response = await axiosApiInstance.get(
        "/api/messages/conversations"
      );

      msg.setConversations(response.data.foundConversations);
    };
    getConversations();
  }, []);



  React.useEffect(() => {
    function filterUsers(item: { username: string; _id: string, avatar:string }) {
      //filter out users that have already been contacted
      return !msg.conversations!.some(
        (entry) => entry.participants._userTo === item._id
      );
    }

    const newArray = msg.users?.filter(filterUsers);
    setUsersToDisplay(newArray);
  }, [msg.users, msg.conversations]);



  const startConversation = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    msg.setRecipientId(event.currentTarget.getAttribute("data-id"));
    msg.setRecipient(event.currentTarget.getAttribute("data-name"));
    await axiosApiInstance
      .post("/api/messages/conversation", {
        _userFrom: userId,
        _userTo: event.currentTarget.getAttribute("data-id"),
      })
      .then((response) => {
        console.log(response);
        msg.setConversationId(response.data.createdConversation._id);
      })
      .catch((err) => {
        context.setShowNewMessageModal(true);
      });

    context.setShowNewMessageModal(false);
  };

  const usersList = () => {
    return usersToDisplay?.map((user, index) => {
      if (user.username.includes(selectedUser) && selectedUser.length > 0) {
        return (
          <ListItem
            data-id={user._id}
            data-name={user.username}
            onClick={(event) => startConversation(event)}
            key={index}
          >
            <UserPic image={user.avatar ? user.avatar : Pic} customSize="30px" />
            <div key={user._id}>{`${user.username}`}</div>
          </ListItem>
        );
      }
    });
  };

  if (context.showNewMessageModal === true) {
    return (
      <Background
        onClick={() => {
          context.setShowNewMessageModal(false);
        }}
      >
        <Container
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Right>
            <BottomContainer bottomBorder={true}>
              <SearchInput
              onClick={(event:React.SyntheticEvent) => {event.preventDefault()}}
                onChange={(event) => {
                  setSelectedUser(event.target.value);
                }}
                searchValue={selectedUser}
                placeholder="Search users"
              />
            </BottomContainer>
            <BottomContainer bottomBorder={false}>
              {usersList()}
            </BottomContainer>
          </Right>
        </Container>
      </Background>
    );
  } else {
    return <></>;
  }
};

export default NewMessageModal;
