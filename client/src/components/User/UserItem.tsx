import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import UserPic from "./UserPic";
import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";
import { UserItemProps } from "../../types";
import Pic from "../../img/Portrait_Placeholder.png";
import { useNavigate } from "react-router-dom";

const UserItemContainer = styled.li`
  width: 40vw;
  height: 100%;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  margin-left: 1.5rem;
  font-family: Quicksand;
  font-size: 1.25rem;
`
/* "http://localhost:3001/"
process.env.REACT_APP_SERVER_URI */
const UserItem: React.FC<UserItemProps> = ({ user }) => {

  const navigate = useNavigate()

  return (
    <>
      <UserItemContainer onClick={() => {
        navigate(`/profile/${user._id}`);
      }}>
       
          <UserPic customSize="50px" image={user.avatar ? "http://localhost:3001/" + user.avatar : Pic} />
       
       
        <UserInfo>{user.username}</UserInfo>
      </UserItemContainer>
    </>
  );
};

export default UserItem;
