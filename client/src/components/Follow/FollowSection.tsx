import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Followers from "./Followers";
import Following from "./Following";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  border: 1px solid black;
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

  > h2 {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }
  > h3 {
    letter-spacing: 1rem;
  }
`;
const Sections = styled.div`
top: 50px;
position: sticky;
  display: flex;
  height: 50px;
  background-color: lightgrey;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 50%;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      border-top: 2px solid white;
      border-radius: 5px;
      color: springgreen;
     
    }
    > p {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      font-family: Quicksand;
    }
  }
`;

const FollowContainer = styled.div`
  margin: 1rem;
`;



const FollowSection: React.FC = () => {
  
  const [followSection, setFollowSection] = useState(true)

  return (
    <Container>
      <Banner>
        <h1>Username</h1>
        <h3>NEXUS</h3>
      </Banner>
      <Sections>
        <div onClick={() => setFollowSection(true)}>
          <p>Follower</p> 
        </div>
        <div onClick={() => setFollowSection(false)}>
          <p>Following</p>
        </div>
      </Sections>

      <FollowContainer>
        {followSection ? <Followers/> : <Following/>}
      </FollowContainer>
    </Container>
  );
};

export default FollowSection;
