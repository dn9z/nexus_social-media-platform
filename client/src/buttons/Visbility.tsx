import * as React from "react";
import * as HookForm from "react-hook-form";
import styled from "styled-components";
import { Context } from "../context/Context";
import * as themeConf from "../styles/theme";
import { useTheme } from "../context/ThemeManager";
import Visible from "../icons/Visible";
import Invisible from "../icons/Invisible";

/* interface VisibilityButtonState {
    onClick: (event: React.MouseEvent) => void;
} */

const Div = styled.div`
  width: 45px;
  height: 35px;
  border: 1px solid ${themeConf.fontColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Visbility: React.FC = () => {
  const theme = useTheme();

  const context = React.useContext(Context);
  return (
    <Div onClick={()=>context.toggleShowPassword(!context.showPassword)}>
      {context.showPassword ? (
        <Invisible
          color={theme.mode === "dark" ? "white" : "black"}
          dropShadow={false}
          scaleFactor={0.65}
        />
      ) : (
        <Visible
          color={theme.mode === "dark" ? "white" : "black"}
          dropShadow={false}
          scaleFactor={0.65}
        />
      )}
    </Div>
  );
};

export default Visbility;
