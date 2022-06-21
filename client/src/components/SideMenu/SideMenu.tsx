import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import Home from "../../icons/Home";
import User from "../../icons/User";
import Mail from "../../icons/Mail";
import Notifications from "../../icons/Notifications";
import Bookmarks from "../../icons/Bookmarks";
import Groups from "../../icons/Groups";
import Settings from "../../icons/Settings";
import LightMode from "../../icons/LightMode";
import DarkMode from "../../icons/DarkMode";
import NumberAlert from "../../icons/NumberAlert";
import Button from "../../buttons/Button";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";

const Container = styled.div`
  height: 630px;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid grey;

  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
`;

const Header = styled.div`
  margin: 1rem;
  > h1 {
    font-family: Quicksand;
    letter-spacing: 1rem;
  }
`;
const Item = styled.button`
  all: unset;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  padding: 0.25rem;
  &:active,
  &:hover {
    background-color: ${themeConf.menuItemHoverColor};
  }
  > p {
    font-family: Inconsolata;
    font-size: 1.5rem;
    font-weight: 500;
    padding-right: 1rem;
  }
`;

const SideMenu: React.FC = () => {
  const context = React.useContext(Context);
  const theme = useTheme();
  return (
    <Container>
      {" "}
      <Header>
        <h1>NEXUS</h1>
      </Header>
      <Item onClick={(event) => context.handleClick(event)}>
        <Home dropShadow={true} scaleFactor={0.55} color={context.color} />
        <p>Home</p>
      </Item>
      <Item onClick={(event) => context.handleClick(event)}>
        <User dropShadow={true} scaleFactor={0.55} color={context.color} />
        <p>Profile</p>
      </Item>
      <Item onClick={(event) => context.handleClick(event)}>
        <Mail dropShadow={true} scaleFactor={0.55} color={context.color} />
        <NumberAlert
          displayState={context.numberIconDisplayState}
          number={context.numberIconNums.mails}
        />
        <p>Mail</p>
      </Item>
      <Item onClick={(event) => context.handleClick(event)}>
        <Notifications
          dropShadow={true}
          scaleFactor={0.55}
          color={context.color}
        />
        <NumberAlert
          displayState={context.numberIconDisplayState}
          number={context.numberIconNums.notifications}
        />
        <p>Notifications</p>
      </Item>
      <Item onClick={(event) => context.handleClick(event)}>
        <Bookmarks dropShadow={true} scaleFactor={0.55} color={context.color} />
        <p>Bookmarks</p>
      </Item>
      <Item onClick={(event) => context.handleClick(event)}>
        <Groups dropShadow={true} scaleFactor={0.55} color={context.color} />
        <p>Nexi</p>
      </Item>
      <Item onClick={(event) => context.handleClick(event)}>
        <Settings dropShadow={true} scaleFactor={0.55} color={context.color} />
        <p>Settings</p>
      </Item>
      <Item onClick={() => theme.toggle()}>
        {theme.mode === "light" ? (
          <DarkMode
            dropShadow={true}
            scaleFactor={0.55}
            color={context.color}
          />
        ) : (
          <LightMode
            dropShadow={true}
            scaleFactor={0.55}
            color={context.color}
          />
        )}
        {theme.mode === "light" ? <p>Dark mode</p> : <p>Light mode</p>}
      </Item>
      <Button
        onClick={(event) => context.handlePostClick(event)}
        text="Post"
        type="button"
      />
    </Container>
  );
};

export default SideMenu;
