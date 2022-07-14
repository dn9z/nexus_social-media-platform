import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";

interface UserPicStyle {
  customSize: string;
}

interface UserPicProps {
  image: string | undefined;
  customSize: string;
}

const Container = styled.div<UserPicStyle>`
width: ${props=>props.customSize};
height: ${props=>props.customSize};
border: 2px solid ${themeConf.profilePicBorder};
border-radius: 100%;

`

const UserPic: React.FC<UserPicProps> = ({customSize, image}) => {
  return <Container customSize={customSize}><img style={{
    width: "100%",
    borderRadius: "50%",
  }} src={image} alt="User Pic" /></Container>;
};

export default UserPic;
