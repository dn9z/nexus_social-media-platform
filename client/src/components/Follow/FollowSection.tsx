import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FollowState } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";
import UserItem from "../User/UserItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  border: 1px solid black;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  position: sticky;
  top: -1px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  color: springgreen;
  font-family: Quicksand;

  > h2 {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }
  > h3 {
    letter-spacing: 1rem;
  }
`;
const Sections = styled.div`
  top: 50px;
  position: sticky;
  display: flex;
  height: 50px;
  background-color: lightgrey;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      border-bottom: 2px solid white;
      color: springgreen;
    }
    > p {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      font-family: Quicksand;
    }
  }
`;

const FollowContainer = styled.div`
  margin: 1rem;
  /* list-style: none; */
`;

const ListItem = styled.div`
  cursor: pointer;
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgba(211, 211, 211, 0.4);
  border-bottom: 1px solid lightgrey;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: rgb(211, 211, 211);
  }
`;
const FollowerButton = styled.div<{ active: boolean }>`
  cursor: pointer;
  background-color: ${(active) => (active.active ? `rgb(130, 130, 130)` : "")};
`;

const FollowingButton = styled.div<{ active: boolean }>`
  cursor: pointer;
  background-color: ${(active) => (active.active ? `` : "rgb(130, 130, 130)")};
`;

const FollowSection: React.FC = () => {
  const [pageSwitch, setPageSwitch] = useState(true);
  const { _id: currentProfileId } = useParams();

  const [followingList, setFollowingList] = useState<FollowState["following"]>([]);
  const [followerList, setFollowerList] = useState<FollowState["follower"]>([]);

  useEffect(() => {
    async function getList() {
      try {
        const resFollowing = await axiosApiInstance.get(
          `http://localhost:3000/api/user/getfollowing/${currentProfileId}`
        );
        const resFollower = await axiosApiInstance.get(
          `http://localhost:3000/api/user/getfollowers/${currentProfileId}`
        );
        setFollowingList(resFollowing.data);
        setFollowerList(resFollower.data);
      } catch (error) {
        console.log(error);
      }
    }
    getList();
  }, []);

  return (
    <Container>
      <Banner>
        <h1>Username</h1>
        <h3>NEXUS</h3>
      </Banner>
      <Sections>
        <FollowerButton active={pageSwitch} onClick={() => setPageSwitch(true)}>
          <p>Followers</p>
        </FollowerButton>
        <FollowingButton active={pageSwitch} onClick={() => setPageSwitch(false)}>
          <p>Following</p>
        </FollowingButton>
      </Sections>
      <FollowContainer>
        {!pageSwitch
          ? followingList.map((element, i) => {
              return (
                <ListItem key={i}>
                  <UserItem user={element} />
                </ListItem>
              );
            })
          : followerList.map((element, i) => {
              return (
                <ListItem key={i}>
                  <UserItem user={element} />
                </ListItem>
              );
            })}
      </FollowContainer>
    </Container>
  );
};

export default FollowSection;
