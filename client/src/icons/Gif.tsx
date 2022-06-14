import * as React from "react";
import styled from "styled-components";

interface IconProps {
  color: string;
  dropShadow: boolean;
  
}

interface FilterProps {
  dropShadow:boolean;
}


const Svg = styled.svg<FilterProps>`
  transform: scale(0.55);
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;
const Gif: React.FC<IconProps> = ({ color, dropShadow }) => {
  return (
    <Svg  dropShadow={dropShadow} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M16.5 28H19.55Q20.15 28 20.575 27.55Q21 27.1 21 26.5V24.5H19.5V26.5Q19.5 26.5 19.5 26.5Q19.5 26.5 19.5 26.5H16.5Q16.5 26.5 16.5 26.5Q16.5 26.5 16.5 26.5V21.5Q16.5 21.5 16.5 21.5Q16.5 21.5 16.5 21.5H20.9Q20.9 20.9 20.5 20.45Q20.1 20 19.5 20H16.5Q15.85 20 15.425 20.425Q15 20.85 15 21.5V26.5Q15 27.15 15.425 27.575Q15.85 28 16.5 28ZM23.25 28H24.75V20H23.25ZM27 28H28.5V25H32V23.5H28.5V21.5H33V20H27ZM9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Z" /* stroke={color} */ fill={color}/>
    </Svg>
  );
};

export default Gif;