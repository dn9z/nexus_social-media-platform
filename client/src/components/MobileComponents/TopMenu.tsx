import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import {AuthContext} from "../../context/AuthContext";
import Hamburger from "../../icons/Hamburger";
import Logo from "../../icons/Logo";
import User from "../../icons/User";
import * as themeConf from "../../styles/theme";
import HamburgerMenu from "../MobileComponents/HamburgerMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Hook from "usehooks-ts"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: rgb(51, 51, 51);
  z-index: 10;
  height: 60px;
`;
const Label = styled.span`
  color: springgreen;
  font-family: Quicksand;
  letter-spacing: 1rem;
  font-weight: 700;
  font-size: clamp(1.2rem, 0.8203rem + 2.1695vw, 1.6rem);
`;

const Item = styled.div<{margin?:string}>`
  all: unset;
  z-index: 60;
  margin: ${props => props.margin};
  &::active {
    background-color: springgreen;
  }
`;

const TopMenu: React.FC = () => {
  const context = React.useContext(Context);
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate()
  const match1500 = Hook.useMediaQuery("(max-width: 1500px)");
  const { userId} = React.useContext(AuthContext);
  const c1 = "#7a5dd1";
  const c2 = "#00ffd0";
  return (
    <Container>
      <Item margin={match1500 ? "50px 0 0 30px" : "0px"} onClick={() => setHidden((s) => !s)}>
      <Logo 
                      scaleFactor={3}
                      colorProps={{ colorOne: c1, colorTwo: c2 }}
                    />
        {!hidden ? <HamburgerMenu /> : null}
      </Item>

      <Label>
        NEXUS
      </Label>

      <Item onClick={() => {navigate(`/profile/${userId}`)}}>
        <User dropShadow={false} scaleFactor={0.55} color="white" />
      </Item>
    </Container>
  );
};

export default TopMenu;
