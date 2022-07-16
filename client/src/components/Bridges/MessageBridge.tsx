import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";
import { AuthContext } from "../../context/AuthContext";
import {
  MessageProvider,
  useMessageContext,
} from "../../context/MessageContext";
import axiosApiInstance from "../../util/axiosInstance";

import Mail from "../../icons/Mail";

const Button = styled.div<{ type: string }>`
all: unset;
display: flex;
align-items: center;
justify-content: center;
width: 55px;
height: 55px;
border: 1px solid ${themeConf.backgroundColor};
border-radius: 50%;
cursor: pointer;
&:hover {
  background-color: ${themeConf.menuItemHoverColor};`;

interface BridgeProps {
  id: string;
}
const MessageBridge: React.FC<BridgeProps> = (props) => {
  const { userId } = React.useContext(AuthContext);
  const { id } = props;

  const {
    setConversations,
    conversations,
    setConversationId,
  } = useMessageContext();

  const navigate = useNavigate();

  useEffect(() => {
    const getConversations = async () => {
      const response = await axiosApiInstance.get(
        `http://localhost:3000/api/messages/myconversations`
      );

      setConversations(response.data.foundConversations);
    };
    getConversations();
  }, []);

  /*   
    const filterConversations = conversations.filter(
      (conversation) => conversation.participants._userTo === id
    ); */

  /* console.log(id); */
  const startNewConversation = async () => {
    await axiosApiInstance
      .post("http://localhost:3000/api/messages/conversation", {
        _userFrom: userId,
        _userTo: id,
      })
      .then((response) => {
        setConversationId(response.data._id);

        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    if (
      !conversations.some(
        (conversation) => conversation.participants._userTo === id
      )
    ) {
      startNewConversation();

      navigate(`/messages`);
    } else {
      alert("Conversation already exists. Click OK to get to Messages");

      navigate(`/messages`);
    }
  };
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        <Mail dropShadow={true} scaleFactor={0.65} color="white" />
      </Button>
    </>
  );
};

export default MessageBridge;
