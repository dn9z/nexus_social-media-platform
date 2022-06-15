import * as React from "react";
import styled from "styled-components";
import {IconProps} from "../types"


interface FilterProps {
  dropShadow:boolean;
}


const Svg = styled.svg<FilterProps>`
  transform: scale(0.55);
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;
const World: React.FC<IconProps> = ({ color, dropShadow }) => {
  return (
    <Svg  dropShadow={dropShadow} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M11.8 34.15H36.25L28.9 24.35L22.3 32.9L17.65 26.55ZM9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Z" /* stroke={color} */ fill={color}/>
    </Svg>
  );
};

export default World;