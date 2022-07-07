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


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
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
  height: 80vh;
`;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 6px solid rgb(51, 51, 51);
  height: 70%;
  position: relative;
  background: springgreen;
`;
const ProfileInfo = styled.div`
  padding: 60px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  box-shadow: 0px 2px 20px black;
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

const Feed = styled.div`
  text-align: center;
  border: 2px solid black;
  margin: 35px 15px 15px 15px;
  border-radius: 5px;
  height: auto;
`;

const Username = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;
const Email = styled.div`
  font-size: 1.3rem;
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

const Profile: React.FC = () => {

  const navigate = useNavigate();
  const { _id } = useParams();
  const [currentUser, setCurrentUser] = React.useState<ProfileUserState | null>(null);
  const [profile, setProfile] = useState<ProfileProps | null>(null);

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

  useEffect(() => {
    axios
      .get("/api/user/profile", {
        withCredentials: true,
      })
      .then((response) => {
        setProfile(response.data.profile);
        console.log("Request Profile:", response.data.profile);
      });
  }, []);

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
                profile?.background
                  ? process.env.REACT_APP_SERVER_URI + profile.background
                  : ""
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
                  profile?.avatar
                    ? process.env.REACT_APP_SERVER_URI + profile?.avatar
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
              <p>Username: {profile?.username}</p>
            </Username>

            <Email>
              <p>Email: {profile?.email}</p>
            </Email>

            {profile ? (
              <Bio>
                <p>{profile?.bio}</p>
              </Bio>
            ) : (
              ""
            )}

            {profile?.location ? (
              <Location>
                <p>{profile?.location}</p>
              </Location>
            ) : (
              ""
            )}

              <FollowContainer>
                <Following>Following:</Following>
                <Followers>Followers:</Followers>
                {!currentUser._following.includes(currentUser._id) ? (
                  <button onClick={handleFollow}>Follow</button>
                ) : (
                  <button onClick={handleUnfollow}>Unfollow</button>
                )}
              </FollowContainer>
              
              
            </ProfileInfo>
          </ProfileContainer>
          <Feed />
        </Container>
      </>
    )

  );
};

export default Profile;
