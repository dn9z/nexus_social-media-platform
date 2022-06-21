import * as React from "react";
import styled from "styled-components";
import {IconProps, FilterProps} from "../types"





const Svg = styled.svg<FilterProps>`
  transform: scale(${(props)=>props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const User: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg  dropShadow={dropShadow} scaleFactor={scaleFactor} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M24 23.65Q20.45 23.65 18.2 21.4Q15.95 19.15 15.95 15.6Q15.95 12.05 18.2 9.8Q20.45 7.55 24 7.55Q27.55 7.55 29.8 9.8Q32.05 12.05 32.05 15.6Q32.05 19.15 29.8 21.4Q27.55 23.65 24 23.65ZM7.25 41.5V36.05Q7.25 34 8.25 32.525Q9.25 31.05 10.85 30.3Q14.3 28.7 17.525 27.925Q20.75 27.15 24 27.15Q27.25 27.15 30.45 27.95Q33.65 28.75 37.1 30.3Q38.75 31.1 39.75 32.55Q40.75 34 40.75 36.05V41.5ZM10.9 37.85H37.1V36.05Q37.1 35.25 36.675 34.575Q36.25 33.9 35.65 33.6Q32.4 32.05 29.65 31.425Q26.9 30.8 24 30.8Q21.1 30.8 18.325 31.425Q15.55 32.05 12.35 33.6Q11.7 33.9 11.3 34.575Q10.9 35.25 10.9 36.05ZM24 20Q25.9 20 27.15 18.75Q28.4 17.5 28.4 15.6Q28.4 13.7 27.15 12.45Q25.9 11.2 24 11.2Q22.1 11.2 20.85 12.45Q19.6 13.7 19.6 15.6Q19.6 17.5 20.85 18.75Q22.1 20 24 20ZM24 15.6Q24 15.6 24 15.6Q24 15.6 24 15.6Q24 15.6 24 15.6Q24 15.6 24 15.6Q24 15.6 24 15.6Q24 15.6 24 15.6Q24 15.6 24 15.6Q24 15.6 24 15.6ZM24 37.85Q24 37.85 24 37.85Q24 37.85 24 37.85Q24 37.85 24 37.85Q24 37.85 24 37.85Q24 37.85 24 37.85Q24 37.85 24 37.85Q24 37.85 24 37.85Q24 37.85 24 37.85Z" /* stroke={color} */ fill={color}/>
    </Svg>
  );
};

export default User;