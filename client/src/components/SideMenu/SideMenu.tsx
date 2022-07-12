import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";

import Home from "../../icons/Home";
import User from "../../icons/User";
import Mail from "../../icons/Mail";
import Logout from "../../icons/LogoutIcon";
import Notifications from "../../icons/Notifications";
import Bookmarks from "../../icons/Bookmarks";
import Groups from "../../icons/Groups";
import Settings from "../../icons/Settings";
import LightMode from "../../icons/LightMode";
import DarkMode from "../../icons/DarkMode";
import NumberAlert from "../../icons/NumberAlert";
import Button from "../../buttons/Button";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import axiosApiInstance from "../../util/axiosInstance";
import {useCount} from "../../context/NumberContext";

const Container = styled.div`
  height: auto;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid grey;

  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
`;

const Header = styled.div`
  margin: 1rem;
  > h1 {
    font-family: Quicksand;
    letter-spacing: 1rem;
  }
`;
const Item = styled.button`
  all: unset;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  padding: 0.25rem;
  &:active,
  &:hover {
    background-color: ${themeConf.menuItemHoverColor};
  }
  > p {
    font-family: Inconsolata;
    font-size: 1.5rem;
    font-weight: 500;
    padding-right: 1rem;
  }
`;

const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  const count = useCount()

  const context = React.useContext(Context);
  const { userId } = React.useContext(AuthContext);
  const theme = useTheme();




  const handleLogout = async () => {
    try {
      await axiosApiInstance.get("http://localhost:3000/api/user/logout");

      handleLogin("", ""); // empty strings will resolve to falsey value


      // Navigate("/");
      navigate('/')
    } catch (error) {
      console.log(error);
      // setIsError(true);
      // setErrorMessage(error.response.data.message);
    }
  };


  return (
    <Container>
      <Header>
        <h1>NEXUS</h1>
      </Header>
      <Item onClick={() => {}}>
        <Home dropShadow={true} scaleFactor={0.55} color="white" />
        <p>Home</p>
      </Item>

      <Item onClick={() => {navigate(`/profile/${userId}`)}}>
        <User dropShadow={true} scaleFactor={0.55} color="white" />

 

        <p>Profile</p>
      </Item>
      <Item onClick={() => {navigate(`/messages`)}}>
        <Mail dropShadow={true} scaleFactor={0.55} color="white" />
        <NumberAlert
          displayState={true}
          number={count.messageNumberState.count}
        />
        <p>Mail</p>
      </Item>
      <Item onClick={() => {}}>

        <Notifications dropShadow={true} scaleFactor={0.55} color="white" />


        <NumberAlert
          displayState={true}
          number={count.notificationNumberState.count}
        />
        <p>Notifications</p>
      </Item>
      <Item onClick={() => {}}>
        <Bookmarks dropShadow={true} scaleFactor={0.55} color="white" />
        <p>Bookmarks</p>
      </Item>
      <Item onClick={() => {}}>
        <Groups dropShadow={true} scaleFactor={0.55} color="white" />
        <p>Nexi</p>
      </Item>
      <Item onClick={() => {}}>
        <Settings dropShadow={true} scaleFactor={0.55} color="white" />
        <p>Settings</p>
      </Item>
      <Item onClick={() => theme.toggle()}>
        {theme.mode === "light" ? (

          <DarkMode dropShadow={true} scaleFactor={0.55} color="white" />
        ) : (
          <LightMode dropShadow={true} scaleFactor={0.55} color="white" />

        )}
        {theme.mode === "light" ? <p>Dark mode</p> : <p>Light mode</p>}
      </Item>
      <Item onClick={() => navigate("/logout")}>
        <Logout dropShadow={true} scaleFactor={0.55} color="white" />
        <p>Logout</p>
      </Item>
      <Button
        // onClick={(event) => context.handlePostClick(event)}
        onClick={() => {
          context.setShowPostModal(true);
        }}
        text="Post"
        type="button"
      />
    </Container>
  );
};

export default SideMenu;
