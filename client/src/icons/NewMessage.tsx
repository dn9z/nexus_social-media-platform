import * as React from "react";
import styled from "styled-components";
import * as themeConf from "../styles/theme";
import { IconProps, FilterProps } from "../types";

const Svg = styled.svg<FilterProps>`
  transform: scale(${(props) => props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const Gif: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg
      dropShadow={dropShadow}
      scaleFactor={scaleFactor}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
    >
      <path
        d="M22.5 28h3v-6.5H32v-3h-6.5V12h-3v6.5H16v3h6.5ZM4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z"
        /* stroke={color} */ fill={color}
      />
    </Svg>
  );
};

export default Gif;
