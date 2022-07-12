import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";

import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";
import { UserItemProps } from "../../types";
import Pic from "../../img/Portrait_Placeholder.png";
import { useNavigate } from "react-router-dom";

const UserItemContainer = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
`;

const AvatarImageContainer = styled.div`
  /* display: flex; */
  /* border: 4px solid white; */
  /* box-shadow: 0px 5px 15px black; */
  /* border-radius: 50%; */
  /* position: absolute; */
  /* bottom: -3rem; */
  /* left: 5rem; */
  width: 1rem;
  height: 1rem;
  /* background-color: ${themeConf.backgroundColor}; */
  /* cursor: pointer; */
`;

const UserItem: React.FC<UserItemProps> = ({ user }) => {

  const navigate = useNavigate()

  return (
    <>
      <UserItemContainer onClick={() => {
        navigate(`/profile/${user._id}`);
      }}>
        <AvatarImageContainer>
          <img
            style={{
              width: "100%",
              borderRadius: "50%",
            }}
            src={user.avatar ? process.env.REACT_APP_SERVER_URI + user.avatar : Pic}
            alt="Avatar"
          />
        </AvatarImageContainer>
        <div>{user.username}</div>
      </UserItemContainer>
    </>
  );
};

export default UserItem;
