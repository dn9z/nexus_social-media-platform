import * as React from 'react';
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import SideMenu from "./components/SideMenu"
import Profile from "./components/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed/Feed';
import AppProvider from "./context/Context"


const Main = styled.main`
display: flex;
flex-direction: row;
height: 100vh;
background-color: #f8f8ff;
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
  

  
  
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <Main>
          <Left><SideMenu /></Left>
          <Center>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/nexus" element={""} />
              </Routes>
            </BrowserRouter>
          </Center>
          <Right><Recommendations />
            <Activity /></Right>
        </Main>
        </AppProvider>
    </>   
  );
}

export default App;




