import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";
import { ProfileProps } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";
import EditAvatarButton from "../../buttons/EditAvatarButton";
import EditBackgroundButton from "../../buttons/EditBackgroundButton";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 50vw;
  overflow: scroll;
`;

const Banner = styled.div`
  padding: 0px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
  color: springgreen;
  font-family: Quicksand;
  font-size: 1.6rem;
  height: 60px;
`;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 6px solid rgb(51, 51, 51);
  height: 40%;
  position: relative;
  background: springgreen;
  margin-bottom: 5rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 60%;
  width: 25vw;
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

const BackButton = styled.button`
display: flex;
align-items: center;
height: 30px;
box-shadow: 0px 0px 5px 2px black;
border-radius: 5px;
border: 2px solid white;
font-size: 1.1rem;
padding: 6px;
&:hover {
  background-color: grey;
  color: springgreen;
  border-color: white;
}
&:active {
  transform: scale(0.9);
}
`;

const Edit = styled.p`
font-size: 1.8rem;
font-family: Quicksand;
font-weight: 700;`;

const SaveButton = styled.button`
  box-shadow: 0px 0px 5px 2px black;
  border-radius: 20px;
  border: 2px solid white;
  font-size: 1.1rem;
  padding: 8px;
  &:hover {
    background-color: grey;
    color: springgreen;
    border-color: white;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 5px;
  font-family: Quicksand;
  font-weight: bold;
  width: 100%;
  > input {
    padding: 5px 0px 5px 0px;
    font-size: 1rem;
    font-family: Quicksand;
    background-color: rgba(211, 211, 211, 0.2);
  }
  > textarea {
    resize: none;
    background-color: rgba(211, 211, 211, 0.2);
    font-family: Quicksand;
    font-size: 1rem;
    border: 2px solid black;
    height: 80px;
  }
`;

const BackgroundImage = styled.img`
objectFit: "cover";
  width: 100%;
  height: 100%;
`;

const EditProfile: React.FC = () => {
  const context = React.useContext(Context);
  const authContext = React.useContext(AuthContext);
  // const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [background, setBackground] = useState<string | null>(null);

  useEffect(() => {
    axiosApiInstance
      .get("/api/user/profile", {
        withCredentials: true,
      })
      .then((response) => {
        setFirstName(response.data.profile.firstName);
        setLastName(response.data.profile.lastName);
        setUsername(response.data.profile.username);
        setEmail(response.data.profile.email);
        setBio(response.data.profile.bio);
        setLocation(response.data.profile.location);
        setAvatar(response.data.profile.avatar);
        setBackground(response.data.profile.background);
        console.log("Get Profile Request:", response.data.profile);
      });
  }, [context.avatarModalSaved, context.backgroundModalSaved]);

  const handleClick = async () => {
    const profileInfo = {
      bio: bio,
      location: location,
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
    };
    const response = await axiosApiInstance.post(
      "/api/user/editprofile",
      profileInfo
    );
    if (response.status === 200) {
      console.log("Profile saved", profileInfo);
      navigate(`/profile/${authContext.userId}`);
    }
  };

  const navigate = useNavigate()

  return (
    <Main>
      <Container>
        <Banner>
          <BackButton onClick={() => navigate(`/profile/${authContext.userId}`)}>X</BackButton>
          <Edit>Edit</Edit>
          <SaveButton onClick={handleClick}>Save</SaveButton>
        </Banner>

        <BackgroundContainer>
          <EditBackgroundButton
            onClick={() => context.setShowBackgroundModal(true)}
            text="Edit"
            type="button"
          />
          <BackgroundImage src={background ? process.env.REACT_APP_SERVER_URI + background : ""}
              alt="Background"/>

          <AvatarImageContainer>
            <img
              style={{
                maxHeight: "100%",
                width: "150px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={avatar ? process.env.REACT_APP_SERVER_URI + avatar : Pic}
              alt="Avatar"
            />
            <EditAvatarButton
              onClick={() => context.setShowAvatarModal(true)}
              text="Edit"
              type="button"
            />
          </AvatarImageContainer>
        </BackgroundContainer>

        <FormContainer>
          {/* <Label>First Name
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            name="firstName"
            // placeholder="First Name"
          />
          </Label>
          
          <Label>Last Name
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            name="lastName"
            // placeholder="Last Name"
          />
          </Label> */}

          <Label>
            Username
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              name="username"
              // placeholder="Username"
            />
          </Label>

          <Label>
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              // placeholder="Email"
            />
          </Label>

          <Label>
            Bio
            <textarea
              onChange={(e) => setBio(e.target.value)}
              name="bio"
              value={bio}
            />
          </Label>
          <Label>
            Location
            <textarea
              onChange={(e) => setLocation(e.target.value)}
              name="location"
              value={location}
            />
          </Label>
        </FormContainer>
      </Container>
    </Main>
  );
};

export default EditProfile;
