import * as React from "react";
import styled from "styled-components";
import {IconProps, FilterProps} from "../types"





const Svg = styled.svg<FilterProps>`
  transform: scale(${(props)=>props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
    
`;

const Visible: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg  dropShadow={dropShadow} scaleFactor={scaleFactor} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path  d="M24 29.65Q26.75 29.65 28.7 27.675Q30.65 25.7 30.65 23Q30.65 20.25 28.675 18.3Q26.7 16.35 24 16.35Q21.25 16.35 19.3 18.325Q17.35 20.3 17.35 23Q17.35 25.75 19.325 27.7Q21.3 29.65 24 29.65ZM24 28.45Q21.7 28.45 20.125 26.85Q18.55 25.25 18.55 23Q18.55 20.7 20.15 19.125Q21.75 17.55 24 17.55Q26.3 17.55 27.875 19.15Q29.45 20.75 29.45 23Q29.45 25.3 27.85 26.875Q26.25 28.45 24 28.45ZM24 35.4Q17.8 35.4 12.65 32.025Q7.5 28.65 4.8 23Q7.5 17.35 12.65 13.975Q17.8 10.6 24 10.6Q30.2 10.6 35.35 13.975Q40.5 17.35 43.2 23Q40.5 28.65 35.35 32.025Q30.2 35.4 24 35.4ZM24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23ZM24 34.3Q29.8 34.3 34.625 31.25Q39.45 28.2 42 23Q39.45 17.8 34.625 14.75Q29.8 11.7 24 11.7Q18.2 11.7 13.375 14.75Q8.55 17.8 6 23Q8.55 28.2 13.375 31.25Q18.2 34.3 24 34.3Z" /* stroke={color} */ fill={color} />
    </Svg>
  );
};

export default Visible;