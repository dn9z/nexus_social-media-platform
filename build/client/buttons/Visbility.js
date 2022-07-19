var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import * as themeConf from "../styles/theme";
import { useTheme } from "../context/ThemeManager";
import Visible from "../icons/Visible";
import Invisible from "../icons/Invisible";
/* interface VisibilityButtonState {
    onClick: (event: React.MouseEvent) => void;
} */
var Div = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 45px;\n  height: 35px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n"], ["\n  width: 45px;\n  height: 35px;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n"])), themeConf.fontColor);
var Visbility = function () {
    var theme = useTheme();
    var context = React.useContext(Context);
    return (_jsx(Div, __assign({ onClick: function () { return context.toggleShowPassword(!context.showPassword); } }, { children: context.showPassword ? (_jsx(Invisible, { color: theme.mode === "dark" ? "white" : "black", dropShadow: false, scaleFactor: 0.65 })) : (_jsx(Visible, { color: theme.mode === "dark" ? "white" : "black", dropShadow: false, scaleFactor: 0.65 })) })));
};
export default Visbility;
var templateObject_1;
