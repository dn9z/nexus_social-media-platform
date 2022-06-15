import * as React from "react";
import styled from "styled-components";

interface ColorProps {
  color: string;
}

interface FilterProps {
  dropShadow:boolean;
}



const Svg = styled.svg<FilterProps>`
  transform: scale(0.55);
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const Hamburger: React.FC<ColorProps> = ({ color }) => {
  return (
    <Svg  dropShadow xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" /* stroke={color} */ fill={color} />
    </Svg>
  );
};

export default Hamburger;