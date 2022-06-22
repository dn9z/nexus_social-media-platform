import * as React from "react";
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components";
import * as themeConf from "./styles/theme";
import { useTheme } from "./context/ThemeManager";
import { Context } from "./context/Context";
import SideMenu from "./components/SideMenu/SideMenu";
import Profile from "./components/Profile/Profile";
import PostModal from "./components/modals/PostModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import AppProvider from "./context/Context";

import TopMenu from './components/MobileComponents/TopMenu'
import HomeIndex from "./components/MobileComponents/Home/HomeIndex"
import ProfileIndex from "./components/MobileComponents/Profile/ProfileIndex";

import Register from "./components/Register/Register";
import PostButton from "./buttons/PostButton";

import {CountProvider} from "./context/NumberContext"

import Groups from "./components/MobileComponents/MobileGroups";

import Info from "./icons/Info"


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

  console.log(context.showPostModal);

  return (
    <>
      <AppProvider>
        {" "}
        <GlobalStyle />
        <ThemeProvider theme={{ mode: theme.mode }}>
          {/* <HomeIndex/> */}
          {/* <ProfileIndex/> */}
          <Main>
            <Left>
              <CountProvider>
                <SideMenu />
              </CountProvider>
            </Left>
            <Center>
              <PostModal show={context.showPostModal} />
              <BrowserRouter>
                <Routes>

                  <Route
                    path="/register"
                    element={<Register/>}
                 
                    
                  />
{/* 
                  <Route path="/topmenu" element={<TopMenu />} /> */}
                  <Route path="/" element={<Feed />} />

                  <Route path="/profile" element={<Profile />} />
                  <Route path="/nexus" element={""} />
                </Routes>
              </BrowserRouter>
            </Center>
            <Right>
              <Recommendations />
              <Activity />
            </Right>
          </Main>
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
