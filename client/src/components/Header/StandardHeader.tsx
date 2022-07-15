import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import Logo from "../../icons/Logo";

interface HeaderProps {
  children: React.ReactElement;
  headingSize: string;
  subheading: string;
  width: string;
}

interface HeaderFilterProps {
  headingSize: string;
  width: string;
}

const Header = styled.div<HeaderFilterProps>`
  color: ${themeConf.fontColor};
  margin: 0 1rem;
  width: ${(props) => props.width};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-family: Inconsolata;
    font-size: 1.5rem;
    /* padding-left: 0.5rem; */
  }
  & > h1 {
    font-size: ${(props) => props.headingSize};
    font-weight: 500;
    font-family: Quicksand;
    letter-spacing: 1rem;
    padding-right: 2rem;
  }
  & > div {
    & > svg {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 374px) and (max-width: 575px) {
    position: relative;
    right: 25px;
    width: 60vw;
  }

  @media (max-width: 300px) {
    right: 38px;
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

  }
`;

const StandardHeader: React.FC<HeaderProps> = (props) => {
  const { children, subheading, headingSize, width } = props;
  return (
    <Header headingSize={headingSize} width={width}>
      <p>{subheading}</p>
      <h1>NEXUS</h1>
      <div>{children}</div>
    </Header>
  );
};

export default StandardHeader;
