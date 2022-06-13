import * as React from 'react';
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components"
import * as themeConf from "./styles/theme"
import { useTheme } from './context/ThemeManager';
import { Context } from "./context/Context";
import SideMenu from "./components/SideMenu"
import Profile from "./components/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed/Feed';
import AppProvider from "./context/Context"

import PostButton from "./buttons/PostButton"


const Main = styled.main`
display: flex;
flex-direction: row;
height: 100vh;
color: ${themeConf.fontColor};
background-color: ${themeConf.backgroundColor};
`

const Left = styled.div`
border: 1px solid black;
width: 20vw;
`

const Center = styled.div`
border: 1px solid black;
width: 60vw;
`

const Right = styled.div`
border: 1px solid black;
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




  return (
    <>


      <AppProvider> <GlobalStyle />
        <ThemeProvider theme={{ mode: theme.mode }}>

          <Main>
            <Left><SideMenu /></Left>
            <Center>
              <BrowserRouter>
                <Routes>
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




