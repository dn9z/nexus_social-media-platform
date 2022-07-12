import * as React from "react";
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components";
import * as themeConf from "./styles/theme";
import { useTheme } from "./context/ThemeManager";
import { Context } from "./context/Context";
import { AuthContext } from "./context/AuthContext";

import SideMenu from "./components/SideMenu/SideMenu";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";

import PostModal from "./components/modals/PostModal";
import NewMessageModal from "./components/modals/NewMessageModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import AppProvider from "./context/Context";

import TopMenu from "./components/MobileComponents/TopMenu";
import HomeIndex from "./components/MobileComponents/Home/HomeIndex";
import ProfileIndex from "./components/MobileComponents/Profile/ProfileIndex";


import MessageMain from "./components/Messaging/MessageMain"

import Register from "./components/AuthForms/Register";
import Login from "./components/AuthForms/Login";

import PostButton from "./buttons/PostButton";

import { CountProvider } from "./context/NumberContext";

import Groups from "./components/MobileComponents/MobileGroups";

import Info from "./icons/Info";

import FollowSection from "./components/Follow/FollowSection";

import AvatarUploadModal from "./components/modals/AvatarUploadModal";
import BackgroundUploadModal from "./components/modals/BackgroundUploadModal";

import Logout from "./components/Logout/Logout";
import UserSearch from "./components/UserSearch/UserSearch";



const Main = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;
  color: ${themeConf.fontColor};
  background-color: ${themeConf.backgroundColor};
`;

const Left = styled.div`
  width: 20vw;
`;

const Center = styled.div`
  width: 60vw;
`;

const Right = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
`;

const Recommendations = styled.div`
  border: 1px solid black;
  height: 50%;
`;

const Activity = styled.div`
  border: 1px solid black;
  height: 50%;
`;

function App() {
  const theme = useTheme();

  const context = React.useContext(Context);
  const { loggedIn } = React.useContext(AuthContext);

  return (
      <AppProvider>
        <GlobalStyle />
        <ThemeProvider theme={{ mode: theme.mode }}>
          {/* <HomeIndex/> */}
          {/* <ProfileIndex/> */}
          <BrowserRouter>
            {loggedIn ? (
              <Main>
                <Left>
                  <CountProvider>
                    <SideMenu />
                  </CountProvider>
                </Left>
                <Center>
                  <PostModal show={context.showPostModal} />

                  <NewMessageModal show={context.showNewMessageModal} />


                  <AvatarUploadModal show={context.showAvatarModal} />
                  <BackgroundUploadModal show={context.showBackgroundModal} />


                  <Routes>
                  <Route path="/follow" element={<FollowSection />}/>
                    {/*<Route path="/topmenu" element={<TopMenu />} /> */}
                    <Route path="/" element={<Feed />} />
                    <Route path="/messages" element={<MessageMain />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/editprofile" element={<EditProfile />} />


                    <Route path="/profile/:_id" element={<Profile />} />
                    <Route path="/search" element={<UserSearch/>} />

                    <Route path="/nexus" element={""} />
                    <Route path='/logout' element={<Logout/>}/>
                  </Routes>
                </Center>
                <Right>
                  <Recommendations />
                  <Activity />
                </Right>
              </Main>
            ) : (
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            )}
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
  );
}

export default App;
