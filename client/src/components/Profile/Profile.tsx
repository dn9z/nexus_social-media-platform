import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";

import { ProfileProps } from "../../types";
import EditProfileButton from "../../buttons/EditProfileButton";

import axiosApiInstance from "../../util/axiosInstance";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import { ProfileUserState } from "../../types";
import FollowButton from "../../buttons/FollowButton"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
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
  min-height: 80vh;
  overflow: visible;
`;


const BackgroundContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 6px solid rgb(51, 51, 51);
  height: 60%;
  position: relative;
  background: springgreen;
`;
const ProfileInfo = styled.div`
  padding: 60px 10px 10px 10px; // top, right, bottom, left
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
  height: 30%;
  background-color: ${themeConf.backgroundColor};
  font-family: Quicksand;
`;
const AvatarImageContainer = styled.div`
  display: flex;
  border: 4px solid white;
  box-shadow: 0px 5px 15px black;
  border-radius: 50%;
  position: absolute;
  bottom: -3rem;
  left: 5rem;
  width: 10rem;
  height: 10rem;
  background-color: ${themeConf.backgroundColor};
  cursor: pointer;
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

const Following = styled.div``;
const Followers = styled.div`
  margin-left: 40px;
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
/* process.env.REACT_APP_SERVER_URI "http://localhost:3001/" */


const Profile: React.FC = () => {

  const navigate = useNavigate();
  const { _id } = useParams();
  const [currentUser, setCurrentUser] = React.useState<ProfileUserState | null>(null);
console.log(currentUser);
  async function handleFollow() {
    try {
      const res = await axiosApiInstance.patch(`http://localhost:3000/api/user/followuser/${_id}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUnfollow() {
    try {
      const res = await axiosApiInstance.patch(`http://localhost:3000/api/user/unfollowuser/${_id}`);
    } catch (error) {
      console.log(error);
    }
  }


  React.useEffect(() => {
    async function getUser() {
      try {
        const res = await axiosApiInstance.get(`http://localhost:3000/api/user/getuserbyid/${_id}`);
        setCurrentUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);
  

    return (
    currentUser && (
      <>
        <Container>
          <Banner>
            <h1>{currentUser.username}</h1>
            <h3>NEXUS</h3>
          </Banner>
          
          <ProfileContainer>
          
          
             <BackgroundContainer>
            <BackgroundImage
              src={
                currentUser.background
                  ? process.env.REACT_APP_SERVER_URI + currentUser.background
                  : Pic
              }
              alt="Background"
            />

            <AvatarImageContainer>
              <img
                style={{
                  maxHeight: "100%",
                  width: "150px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={
                  currentUser.avatar
                    ? process.env.REACT_APP_SERVER_URI + currentUser.avatar
                    : Pic
                }
                alt="Pic"
              />
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

              <FollowContainer>
                <Following>Following:</Following>
                <Followers>Followers:</Followers>
                {!currentUser._following.includes(currentUser._id) ? (
                  <FollowButton
                  // onClick={(event) => context.handlePostClick(event)}
                  onClick={handleFollow}
                  text="Follow"
                  type="button"
                />
                ) : (
                  <FollowButton
                  // onClick={(event) => context.handlePostClick(event)}
                  onClick={handleUnfollow}
                  text="Unfollow"
                  type="button"
                />
                )}
              </FollowContainer>
              
              
            </ProfileInfo>
            <div>
            <Feed profileId={_id} />
            </div>
            
          </ProfileContainer>
         
        </Container>
      </>
    )

  );
};

export default Profile;
