import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import Logo from "../../icons/Logo";

interface HeaderProps {

  headingSize: string;

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
 
  align-items: center;

  & > h1 {
    font-size: ${(props) => props.headingSize};
    font-weight: 500;
    font-family: Quicksand;
    letter-spacing: 1rem;
    padding-right: 2rem;
  }

`;

const StandardHeader: React.FC<HeaderProps> = (props) => {
  const { headingSize, width } = props;
  return (
    <Header headingSize={headingSize} width={width}>
     
    <h1>NEXUS</h1>
  
    </Header>
  );
};

export default StandardHeader;
