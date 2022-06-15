import * as React from 'react';
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components"
import * as themeConf from "./styles/theme"
import { useTheme } from './context/ThemeManager';
import { Context } from "./context/Context";
import SideMenu from "./components/SideMenu/SideMenu"
import Profile from "./components/Profile/Profile"
import PostModal from "./components/modals/PostModal"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed/Feed';
import AppProvider from "./context/Context"

import PostButton from "./buttons/PostButton"

import TopMenu from "./components/MobileComponents/TopMenu";
import Groups from './components/MobileComponents/Groups';





const Main = styled.main`
display: flex;
flex-direction: row;
height: 100vh;
color: ${themeConf.fontColor};
background-color: ${themeConf.backgroundColor};
`

const Left = styled.div`

width: 20vw;
`

const Center = styled.div`

width: 60vw;
`

const Right = styled.div`

width: 20vw;
display: flex; 
flex-direction: column;
`

const Recommendations = styled.div`
border: 1px solid black;
height: 50%;
`


const Activity = styled.div`
border: 1px solid black;
height: 50%;
`



function App() {

  
  const theme = useTheme();
   
  const context = React.useContext(Context);

  console.log(context.showPostModal);

  return (
    <>


      <AppProvider> <GlobalStyle />
        <ThemeProvider theme={{ mode: theme.mode }}>
          <Main>
          
            <Left><SideMenu /></Left>
            <Center>
            <PostModal show={context.showPostModal}/>
              <BrowserRouter>
                <Routes>
                  <Route path="/topmenu" element={<TopMenu />} />
                  <Route path="/" element={ <Feed />} />
                 
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/nexus" element={""} />
                </Routes>
              </BrowserRouter>
            </Center>
            <Right><Recommendations />
              <Activity /></Right>
          </Main>
        </ThemeProvider>
      </AppProvider>

    </>



  );
}

export default App;




