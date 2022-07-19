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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import Home from "../../icons/Home";
import User from "../../icons/User";
import Users from "../../icons/Users";
import Mail from "../../icons/Mail";
import Logout from "../../icons/LogoutIcon";
import LightMode from "../../icons/LightMode";
import DarkMode from "../../icons/DarkMode";
import NumberAlert from "../../icons/NumberAlert";
import Button from "../../buttons/Button";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Logo from "../../icons/Logo";
import { AuthContext } from "../../context/AuthContext";
import { useCount } from "../../context/NumberContext";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: fixed;\ntop: 0;\nleft: 40px;\nwidth: auto;\n  height: auto;\n  margin: 2rem;\n  padding: 1rem 1rem 2rem 1rem;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"], ["\nposition: fixed;\ntop: 0;\nleft: 40px;\nwidth: auto;\n  height: auto;\n  margin: 2rem;\n  padding: 1rem 1rem 2rem 1rem;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"])));
var Header = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 1rem;\ndisplay: flex;\ntransform: scaleX(-1.1);\n  justify-content: center;\n"], ["\n  margin: 1rem;\ndisplay: flex;\ntransform: scaleX(-1.1);\n  justify-content: center;\n"])));
var Item = styled.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  all: unset;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 25px;\n  padding: 0.25rem;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    background-color: ", ";\n  }\n  > p {\n    font-family: Inconsolata;\n    font-size: 1.5rem;\n    font-weight: 500;\n    padding-right: 1rem;\n  }\n"], ["\n  all: unset;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 25px;\n  padding: 0.25rem;\n  cursor: pointer;\n  &:active,\n  &:hover {\n    background-color: ", ";\n  }\n  > p {\n    font-family: Inconsolata;\n    font-size: 1.5rem;\n    font-weight: 500;\n    padding-right: 1rem;\n  }\n"])), themeConf.menuItemHoverColor);
var SideMenu = function () {
    var navigate = useNavigate();
    var count = useCount();
    var context = React.useContext(Context);
    var _a = React.useContext(AuthContext), userId = _a.userId, handleLogin = _a.handleLogin;
    var theme = useTheme();
    var c1 = "#7a5dd1";
    var c2 = "#00ffd0";
    return (_jsxs(Container, { children: [_jsx(Header, { children: _jsx(Logo, { scaleFactor: 1.5, colorProps: { colorOne: c1, colorTwo: c2 } }) }), _jsxs(Item, __assign({ onClick: function () { navigate("/"); } }, { children: [_jsx(Home, { dropShadow: true, scaleFactor: 0.55, color: "white" }), _jsx("p", { children: "Home" })] })), _jsxs(Item, __assign({ onClick: function () { navigate("/profile/".concat(userId)); } }, { children: [_jsx(User, { dropShadow: true, scaleFactor: 0.55, color: "white" }), _jsx("p", { children: "You" })] })), _jsxs(Item, __assign({ onClick: function () { navigate("/search"); } }, { children: [_jsx(Users, { dropShadow: true, scaleFactor: 0.55, color: "white" }), _jsx("p", { children: "Others" })] })), _jsxs(Item, __assign({ onClick: function () { navigate("/messages"); } }, { children: [_jsx(Mail, { dropShadow: true, scaleFactor: 0.55, color: "white" }), _jsx(NumberAlert, { displayState: true, number: count.messageNumberState.count }), _jsx("p", { children: "Mail" })] })), _jsxs(Item, __assign({ onClick: function () { return theme.toggle(); } }, { children: [theme.mode === "light" ? (_jsx(DarkMode, { dropShadow: true, scaleFactor: 0.55, color: "white" })) : (_jsx(LightMode, { dropShadow: true, scaleFactor: 0.55, color: "white" })), theme.mode === "light" ? _jsx("p", { children: "Dark mode" }) : _jsx("p", { children: "Light mode" })] })), _jsxs(Item, __assign({ onClick: function () { return navigate("/logout"); } }, { children: [_jsx(Logout, { dropShadow: true, scaleFactor: 0.55, color: "white" }), _jsx("p", { children: "Logout" })] })), _jsx(Button
            // onClick={(event) => context.handlePostClick(event)}
            , { 
                // onClick={(event) => context.handlePostClick(event)}
                onClick: function () {
                    context.setShowPostModal(true);
                }, text: "Post", type: "button" })] }));
};
export default SideMenu;
var templateObject_1, templateObject_2, templateObject_3;
