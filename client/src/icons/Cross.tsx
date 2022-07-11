import * as React from "react";
import styled from "styled-components";
import {IconProps, FilterProps} from "../types"





const Svg = styled.svg<FilterProps>`
  transform: scale(${(props)=>props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const Cross: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg dropShadow={dropShadow} scaleFactor={scaleFactor} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></Svg>
  );
};

export default Cross;