import * as React from "react";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";
import axiosApiInstance from "../../util/axiosInstance";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import { ProfileUserState } from "../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
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

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 6px solid rgb(51, 51, 51);
  height: 80vh;
  position: relative;
  background: springgreen;
`;
const ProfileInfo = styled.div`
  padding: 60px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  box-shadow: 0px 2px 20px black;
  height: auto;
  background-color: ${themeConf.backgroundColor};
  font-family: Quicksand;
`;
const Image = styled.div`
  display: flex;
  border: 4px solid white;
  box-shadow: 0px 5px 15px black;
  border-radius: 50%;
  position: absolute;
  bottom: -3rem;
  left: 5rem;
  width: 12rem;
  height: 12rem;
  background-color: ${themeConf.backgroundColor};
  cursor: pointer;
`;
// const Feed = styled.div`
//   text-align: center;
//   border: 2px solid black;
//   margin: 35px 15px 15px 15px;
//   border-radius: 5px;
//   height: auto;
// `;

const Username = styled.div`
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;
const Email = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;
const SelfInfo = styled.div`
  font-size: 1.2rem;
  font-family: Jost;
`;
const KeyData = styled.div`
  font-size: 1.2rem;
  font-family: Jost;
`;
const FollowContainer = styled.div`
  display: flex;
  font-weight: bold;
`;

const Following = styled.div``;
const Followers = styled.div`
  margin-left: 40px;
`;

const Profile: React.FC = () => {
  const { _id } = useParams();
  const [currentUser, setCurrentUser] = React.useState<ProfileUserState | null>(null);

  async function handleFollow() {
    try {
      const res = await axiosApiInstance.patch(`http://localhost:3000/api/user/followuser/${_id}`);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    async function getUser() {
      try {
        const res = await axiosApiInstance.get(`http://localhost:3000/api/user/getuserbyid/${_id}`);        
        setCurrentUser(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  }, []);

  return (
    currentUser && (
      <>
        <Container>
          <Banner>
            <h1>{currentUser.username}</h1>
            <h3>NEXUS</h3>
          </Banner>
          <ProfileContainer>
            <Background>
              <div>{/* BackgroundImage */}</div>
              <Image>
                <img style={{ borderRadius: "50%" }} src={Pic} alt="Pic" />
              </Image>
            </Background>
            <ProfileInfo>
              <Username>
                <p>{currentUser.username}</p>
              </Username>
              {/* <Email>
                <p>Email</p>
              </Email> */}
              <SelfInfo>
                <p>Some personal Info Text</p>
              </SelfInfo>
              <KeyData>
                <p>Some Key Data</p>
              </KeyData>
              <FollowContainer>
                <Following>Following:</Following>
                <Followers>Followers:</Followers>
                <button onClick={handleFollow}>Follow</button>
              </FollowContainer>
            </ProfileInfo>
          </ProfileContainer>
          <Feed />
        </Container>
      </>
    )
  );
};

export default Profile;
