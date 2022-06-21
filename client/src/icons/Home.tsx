import * as React from "react";
import styled from "styled-components";
import {IconProps, FilterProps} from "../types"





const Svg = styled.svg<FilterProps>`
  transform: scale(${(props)=>props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const Home: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg  dropShadow={dropShadow} scaleFactor={scaleFactor} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <path
        d="M7.4 42.65V17.75L24.1 5.3L40.6 17.75V42.65H27.5V28.55H20.45V42.65ZM11.05 39H16.8V24.9H31.15V39H36.95V19.6L24.1 9.85L11.05 19.6ZM24 24.4Z"
        /* stroke={color} */ fill={color}
      />
    </Svg>
  );
};

export default Home;
