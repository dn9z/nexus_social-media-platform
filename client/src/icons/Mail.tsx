import * as React from "react";
import styled from "styled-components";
import {IconProps, FilterProps} from "../types"





const Svg = styled.svg<FilterProps>`
  transform: scale(${(props)=>props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const Mail: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg  dropShadow={dropShadow} scaleFactor={scaleFactor} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M6.85 40.75Q5.4 40.75 4.3 39.65Q3.2 38.55 3.2 37.1V10.9Q3.2 9.45 4.3 8.35Q5.4 7.25 6.85 7.25H41.15Q42.6 7.25 43.7 8.35Q44.8 9.45 44.8 10.9V37.1Q44.8 38.55 43.7 39.65Q42.6 40.75 41.15 40.75ZM24 25.45 6.85 14.35V37.1Q6.85 37.1 6.85 37.1Q6.85 37.1 6.85 37.1H41.15Q41.15 37.1 41.15 37.1Q41.15 37.1 41.15 37.1V14.35ZM24 21.9 41.15 10.9H6.9ZM6.65 14.35V10.9V14.35V37.1Q6.8 37.1 6.825 37.1Q6.85 37.1 6.85 37.1H6.65Q6.65 37.1 6.65 37.1Q6.65 37.1 6.65 37.1Z" /* stroke={color} */ fill={color} />
    </Svg>
  );
};

export default Mail;