import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import { useInterval } from 'usehooks-ts'

const StandardBackground = () => {

  return (
    <div style={{width:"100%",height:"100%"}}>StandardBackground</div>
  )
}

export default StandardBackground