import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import Hamburger from "../../icons/Hamburger";
import Logo from "../../icons/Logo";
import User from "../../icons/User";
import * as themeConf from "../../styles/theme";
import HamburgerMenu from "../MobileComponents/HamburgerMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Hook from "usehooks-ts";

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 99%;
  background-color: rgb(51, 51, 51);
  z-index: 10;
  height: 60px;
`;

const Label = styled.h1`
  color: springgreen;
  font-family: Quicksand;
  letter-spacing: 1rem;
  font-weight: 700;
  font-size: clamp(1.2rem, 0.8203rem + 2.1695vw, 1.6rem);
`;

const Center = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
`

const Item = styled.div<{ margin?: string }>`

 
  margin: ${(props) => props.margin};
  &::active {
    background-color: springgreen;
  }
`;

const TopMenu: React.FC = () => {
  const context = React.useContext(Context);
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const match1500 = Hook.useMediaQuery("(max-width: 1500px)");
  const { userId } = React.useContext(AuthContext);
  const c1 = "#7a5dd1";
  const c2 = "#00ffd0";
  return (
    <Container>
      <Item  onClick={() => setHidden((s) => !s)}>
        <Hamburger  dropShadow={true} scaleFactor={0.55} color="white"/>
        {!hidden ? <HamburgerMenu /> : null}
      </Item>

      <Center>
        <Label>NEXUS</Label>
        <Logo scaleFactor={1.3} colorProps={{ colorOne: c1, colorTwo: c2 }} />
      </Center>
      <Item
        onClick={() => {
          navigate(`/profile/${userId}`);
        }}
      >
        <User dropShadow={false} scaleFactor={0.55} color="white" />
      </Item>
    </Container>
  );
};

export default TopMenu;
