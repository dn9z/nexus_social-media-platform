import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import Hamburger from "../../icons/Hamburger";
import User from "../../icons/User";
import * as themeConf from "../../styles/theme";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
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

const Item = styled.div`
  all: unset;
  &: active {
    background-color: springgreen;
  }
`;

const TopMenu: React.FC = () => {
  const context = React.useContext(Context);
  const [hidden, setHidden] = useState(true);

  return (
    <Container>
      <Item onClick={() => setHidden((s) => !s)}>
        <Hamburger dropShadow={false} scaleFactor={0.55} color={context.color} />
        {!hidden ? <HamburgerMenu /> : null}
      </Item>

      <Label>
        NEXUS
      </Label>

      <Item onClick={() => {}}>
        <User dropShadow={false} scaleFactor={0.55} color={context.color} />
      </Item>
    </Container>
  );
};

export default TopMenu;
