import React from 'react';
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Main = styled.main`
display: flex;
flex-direction: row;
height: 100vh;
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
      <GlobalStyle />
      <Main>
        <Left />

        <Center>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={/* <Feed /> */""} />
              <Route path="/profile" element={""} />
              <Route path="/nexus" element={""} />
            </Routes>
          </BrowserRouter>
        </Center>
        <Right><Recommendations />
          <Activity /></Right>
      </Main>

    </>
  );
}

export default App;
