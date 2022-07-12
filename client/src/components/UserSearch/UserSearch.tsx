import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";

import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";
import { UserSearchState } from "../../types";
import UserItem from "./UserItem";

const ListContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
`;

const UsersList = styled.ul`
  list-style: none;
`;

const SearchBarContainer = styled.div`
  width: 100%;
`;

const SearchBar = styled.input`
  width: 20%;
`;

const UserSearch: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const [users, setUsers] = useState<UserSearchState["user"]>([]);

  async function getUsers() {
    try {
      const res = await axiosApiInstance.get(
        `http://localhost:3000/api/user/getusersbyname/${searchInput}`
      );
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <ListContainer>
        <SearchBarContainer>
          <SearchBar
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            type="text"
          />
          <button onClick={() => {
            searchInput.length > 0 && getUsers()
          }}>Search</button>
        </SearchBarContainer>
        <UsersList>
          {users.map((element, i) => {
            return<UserItem key={i} user={element}/>;
          })}
        </UsersList>
      </ListContainer>
    </>
  );
};

export default UserSearch;
