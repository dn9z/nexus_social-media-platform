import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";

import { ProfileProps } from "../../types";
import EditProfileButton from "../../buttons/EditProfileButton";
import {
  MessageProvider,
  useMessageContext,
} from "../../context/MessageContext";
import axiosApiInstance from "../../util/axiosInstance";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import { ProfileUserState } from "../../types";
import FollowButton from "../../buttons/FollowButton";
import Mail from "../../icons/Mail";
import MessageBridge from "../Bridges/MessageBridge";
import UserPic from "../User/UserPic";
import { AuthContext } from "../../context/AuthContext";
import * as Hook from "usehooks-ts"
import TopMenu from "../MobileComponents/TopMenu";
<<<<<<< HEAD
=======

>>>>>>> 601a9d372c88f4224299b1146ae4c26f2918c46d

const Container = styled.div<{marginTop:string}>`
  margin-top: ${props => props.marginTop};
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: auto;
`

`

<<<<<<< HEAD
 // const Container = styled.div`
  // display: flex;
  // flex-direction: column;
 // height: 100vh;
 // overflow: scroll;

// `;
=======

/* const Container = styled.div`
 display: flex;
 flex-direction: column;
 overflow: scroll;

`; */
>>>>>>> 601a9d372c88f4224299b1146ae4c26f2918c46d

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  position: fixed;
  width: 60vw;
  top: -1px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.0);
  color:${themeConf.profilePicBorder};
  font-family: Quicksand;
  height: 60px;

  > h2 {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }
  > h3 {
    letter-spacing: 1rem;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
 
`;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  border-bottom: 1px solid rgb(51, 51, 51);
  height: 40%;

  //height: 50%;

  position: relative;
  background: springgreen;
  
`;
const ProfileInfo = styled.div`
  padding: 60px 10px 10px 10px; // top, right, bottom, left
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
  height: 60%;
  background-color: ${themeConf.backgroundColor};
  font-family: Quicksand;
`;
const AvatarImageContainer = styled.div`
  display: flex;
  box-shadow: 0px 2px 10px black;
  border-radius: 50%;
  position: absolute;
  bottom: -3rem;
  left: 5rem;
  background-color: ${themeConf.backgroundColor};
  cursor: pointer;

  @media (max-width: 575px) {
    left: 2rem;
    bottom: -2.3rem;
  }
`;

const Username = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;
const Email = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;
const Bio = styled.div`
  font-size: 1.2rem;
  font-family: Jost;
`;
const Location = styled.div`
  font-size: 1.2rem;
  font-family: Jost;
`;
const FollowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  align-items: center;
  height: auto;
  font-weight: bold;
`;

const Network = styled.div`
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: -4rem;
  right: 1rem;
`;
const BackgroundImage = styled.img`
  object-fit: "cover";
  width: 100%;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;


/* process.env.REACT_APP_SERVER_URI "http://localhost:3001/" */

const Profile: React.FC = () => {
  const smallMobile = Hook.useMediaQuery("(max-width: 294px)");
  const mobileView = Hook.useMediaQuery("(max-width: 575px)");
  const tabletView = Hook.useMediaQuery("(min-width: 576px) and (max-width: 992px)");

  const navigate = useNavigate();
  const {userId} = React.useContext(AuthContext)
  const { _id: currentProfileId } = useParams();
  const [currentUser, setCurrentUser] = useState<ProfileUserState | null>(
    null
  );
  const [loggedInUserFollowing, setLoggedInUserFollowing] = useState<string[]>([]);
  
  const [needRefresh, setNeedRefresh] = useState(false);
  const match1500 = Hook.useMediaQuery("(max-width: 1500px)");

  async function handleFollow() {
    try {
      const res = await axiosApiInstance.patch(
        `/api/user/followuser/${currentProfileId}`
      );
      setNeedRefresh(true)
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUnfollow() {
    try {
      const res = await axiosApiInstance.patch(
        `/api/user/unfollowuser/${currentProfileId}`
      );
      setNeedRefresh(true)
    } catch (error) {
      console.log(error);
    }
  }

  async function getCurrentProfileUser() {
    try {
      const res = await axiosApiInstance.get(
        `/api/user/getuserbyid/${currentProfileId}`
      );
      setCurrentUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getLoggedInUser() {
    try {
      const res = await axiosApiInstance.get(
        `/api/user/getuserbyid/${userId}`
      );
      setLoggedInUserFollowing(res.data._following);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getCurrentProfileUser();
    getLoggedInUser()
  }, []);
  

  React.useEffect(() => {
    if(needRefresh){
      getCurrentProfileUser();
      getLoggedInUser()
      setNeedRefresh(false)
    }
  }, [needRefresh]);

  return (
    currentUser && (
      <>

        <Container marginTop={match1500 ? "61px" : "0px"}>
          <Banner>
            <h1>{match1500 ? "" : currentUser.username}</h1>
           {/*  <h3>NEXUS</h3> */}
          </Banner>

  {/*      <Container>
          {mobileView? <TopMenu/> : <Banner>
            <h1>{currentUser.username}</h1>
            <h3>NEXUS</h3>
          </Banner>} */}
        


          <ProfileContainer>
            <BackgroundContainer>
              <BackgroundImage
                src={
                  currentUser.background
                    ? currentUser.background
                    : Pic
                }
                alt="Background"
              />

              <AvatarImageContainer>
                <UserPic image={currentUser.avatar} customSize={smallMobile ? "80px" : mobileView ? "100px" : tabletView ? "130px" : "150px"}/>
             {/*    <img
                  style={{
                    maxHeight: "100%",
                    width: "150px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={
                    currentUser.avatar
                      ? "http://localhost:3001/" + currentUser.avatar
                      : Pic
                  }
                  alt="Pic"
                /> */}
              </AvatarImageContainer>

              <ButtonContainer>
                <EditProfileButton
                  onClick={() => navigate("/editprofile")}
                  text="Edit Profile"
                  type="button"
                />
              </ButtonContainer>
            </BackgroundContainer>

            <ProfileInfo>
              <Username>
                <p>Username: {currentUser.username}</p>
              </Username>

              <Email>
                <p>Email: {currentUser.email}</p>
              </Email>

              {currentUser ? (
                <Bio>
                  <p>{currentUser.bio}</p>
                </Bio>
              ) : (
                ""
              )}

              {currentUser.location ? (
                <Location>
                  <p>{currentUser.location}</p>
                </Location>
              ) : (
                ""
              )}

              <BottomContainer>
                <FollowContainer>
                  <Network onClick={() => {navigate(`/network/${currentProfileId}`)}}>View Network</Network>
                  {userId !== currentProfileId && (!loggedInUserFollowing.includes(currentUser._id) ? (
                    <FollowButton
                      onClick={handleFollow}
                      text="Follow"
                      type="button"
                    />
                  ) : (
                    <FollowButton
                      onClick={handleUnfollow}
                      text="Unfollow"
                      type="button"
                    />
                  ))}
                </FollowContainer>
                <MessageProvider>
                  <MessageBridge  id={currentUser._id} />
                </MessageProvider>
              </BottomContainer>
            </ProfileInfo>
            <div>
              <Feed profileId={currentProfileId} />
            </div>
          </ProfileContainer>
        </Container>
      </>
    )
  );
};

export default Profile;
