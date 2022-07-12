import * as React from "react";
import styled from "styled-components";
import { IconProps, FilterProps } from "../types";

const Svg = styled.svg<FilterProps>`
  transform: scale(${(props) => props.scaleFactor});
  filter: ${(props) =>
    props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none"};
`;

const Logout: React.FC<IconProps> = ({ color, dropShadow, scaleFactor }) => {
  return (
    <Svg
      dropShadow={dropShadow}
      scaleFactor={scaleFactor}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
    >
      <path
        d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z"
        /* stroke={color} */ fill={color}
      />
    </Svg>
  );
};

export default Logout;
