import * as React from "react";
import styled from "styled-components";
import {IconProps, FilterProps} from "../types"





const Svg = styled.svg<FilterProps>`
  transform: scale(${(props)=>props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const Bookmarks: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg  dropShadow={dropShadow} scaleFactor={scaleFactor} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M39.75 42.1V4Q39.75 4 39.75 4Q39.75 4 39.75 4H10.85V0.35H39.75Q41.2 0.35 42.3 1.45Q43.4 2.55 43.4 4V42.1ZM8.25 42.05 20.35 36.85 32.45 42.05V11.3Q32.45 11.3 32.45 11.3Q32.45 11.3 32.45 11.3H8.25Q8.25 11.3 8.25 11.3Q8.25 11.3 8.25 11.3ZM4.6 47.55V11.3Q4.6 9.85 5.7 8.75Q6.8 7.65 8.25 7.65H32.45Q33.9 7.65 35.025 8.75Q36.15 9.85 36.15 11.3V47.55L20.35 40.9ZM8.25 11.3Q8.25 11.3 8.25 11.3Q8.25 11.3 8.25 11.3H32.45Q32.45 11.3 32.45 11.3Q32.45 11.3 32.45 11.3H20.35Z" /* stroke={color} */ fill={color} />
    </Svg>
  );
};

export default Bookmarks;