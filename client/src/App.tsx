import * as React from "react";
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components";
import * as themeConf from "./styles/theme";
import { useTheme } from "./context/ThemeManager";
import { Context } from "./context/Context";
import { AuthContext } from "./context/AuthContext";
import { MessageProvider } from "./context/MessageContext";
import axiosApiInstance from "./util/axiosInstance";
import SideMenu from "./components/SideMenu/SideMenu";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";

import PostModal from "./components/modals/PostModal";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import AppProvider from "./context/Context";

import TopMenu from "./components/MobileComponents/TopMenu";
import HomeIndex from "./components/MobileComponents/Home/HomeIndex";
import ProfileIndex from "./components/MobileComponents/Profile/ProfileIndex";

import MessageMain from "./components/Messaging/MessageMain";

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

import StandardBackground from "./components/Backgrounds/StandardBackground";

import UserSearch from "./components/UserSearch/UserSearch";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import * as Hook from "usehooks-ts";

import NewHeader from "./components/Header/NewHeader";
import StandardHeader from "./components/Header/StandardHeader";
import Logo from "./icons/Logo";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  color: ${themeConf.fontColor};
  background-color: ${themeConf.backgroundColor};
`;

const Left = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100vh;
`;

const Center = styled.div<{ width: string }>`
  width: ${(props) => props.width};

  overflow: auto;
`;

const Right = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Activity = styled.div`
  height: 50%;
`;

const c1 = "#7a5dd1";
const c2 = "#00ffd0";

function App() {
  const theme = useTheme();

  const context = React.useContext(Context);
  const match1500 = Hook.useMediaQuery("(max-width: 1500px)");
  const { loggedIn } = React.useContext(AuthContext);

  const mobileView = Hook.useMediaQuery("(max-width: 575px)");
  const TabletView = Hook.useMediaQuery(
    "(min-width: 576px) and (max-width: 1024px)"
  );
  const match1024 = Hook.useMediaQuery("(max-width: 1024px)");
  const match1800 = Hook.useMediaQuery("(max-width: 1800px)");
const match1200 = Hook.useMediaQuery("(max-width: 1200px)");
console.log(loggedIn)
  return (
    <AppProvider>
      <GlobalStyle />
      <ThemeProvider theme={{ mode: theme.mode }}>
        {/* <HomeIndex/> */}
        {/* <ProfileIndex/> */}
        <BrowserRouter>
          <Main>
            {loggedIn && (
              <Left width={match1024 ? "0vw" : "20vw"}>
                {/*  {loggedIn && ( mobileView ? "" : match1024 ? "" :
              <Left width={"auto"}>  */}

                {match1024 ? <TopMenu /> : <SideMenu />}
              </Left>
            )}
            <Center width={match1024 ? "99vw" : match1200 ? "80vw" : "60vw"}>
              {loggedIn && (
                <>
                  <PostModal show={context.showPostModal} />

                  <AvatarUploadModal show={context.showAvatarModal} />
                  <BackgroundUploadModal show={context.showBackgroundModal} />
                </>
              )}
              <Routes>
                <Route
                  path="/network/:_id"
                  element={
                    <ProtectedRoute auth={loggedIn}>
                      <FollowSection />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/"
                  element={
                    <ProtectedRoute auth={loggedIn}>
                      <Feed />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/messages"
                  element={
                    <MessageProvider>
                      <ProtectedRoute auth={loggedIn}>
                        <MessageMain />
                      </ProtectedRoute>
                    </MessageProvider>
                  }
                />
                <Route
                  path="/editprofile"
                  element={
                    <ProtectedRoute auth={loggedIn}>
                      <EditProfile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile/:_id"
                  element={
                    <ProtectedRoute auth={loggedIn}>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <ProtectedRoute auth={loggedIn}>
                      <UserSearch />
                    </ProtectedRoute>
                  }
                />
                {/* <Route path="/nexus" element={""} /> */}
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Center>

            {loggedIn && (
           <Right width={match1200 ? "0vw" : "20vw"}>
                {/*  {loggedIn && ( mobileView ? "" : match1024 ? "" :
              <Right> */}

                {/* <Recommendations /> */}
                <div style={{ position: "fixed", top: "5vh", right: "-5vw" }}>
                  {match1500 ? (
                    <NewHeader headingSize={match1200 ? "0px" : "2.75rem"} width={match1200 ? "0px" : "300px"} />
                  ) : (
                    <StandardHeader
                      headingSize={
                        match1800
                          ? "1.75rem"
                          : "2.75rem" && match1024
                          ? "0px"
                          : "2.75rem"
                      }
                      subheading={""}
                      width={"330px"}
                    >
                      <Logo
                        scaleFactor={match1800 ? 2 : 4}
                        colorProps={{ colorOne: c1, colorTwo: c2 }}
                      />
                    </StandardHeader>
                  )}
                </div>
                <Activity />
              </Right>
            )}
          </Main>
        </BrowserRouter>
        {/* <StandardBackground/> */}
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
