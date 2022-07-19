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
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../icons/Logo";
import User from "../../icons/User";
import HamburgerMenu from "../MobileComponents/HamburgerMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Hook from "usehooks-ts";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  background-color: rgb(51, 51, 51);\n  z-index: 10;\n  height: 60px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  background-color: rgb(51, 51, 51);\n  z-index: 10;\n  height: 60px;\n"])));
var Label = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: springgreen;\n  font-family: Quicksand;\n  letter-spacing: 1rem;\n  font-weight: 700;\n  font-size: clamp(1.2rem, 0.8203rem + 2.1695vw, 1.6rem);\n"], ["\n  color: springgreen;\n  font-family: Quicksand;\n  letter-spacing: 1rem;\n  font-weight: 700;\n  font-size: clamp(1.2rem, 0.8203rem + 2.1695vw, 1.6rem);\n"])));
var Item = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  all: unset;\n  z-index: 60;\n  margin: ", ";\n  &::active {\n    background-color: springgreen;\n  }\n"], ["\n  all: unset;\n  z-index: 60;\n  margin: ", ";\n  &::active {\n    background-color: springgreen;\n  }\n"])), function (props) { return props.margin; });
var TopMenu = function () {
    var context = React.useContext(Context);
    var _a = useState(true), hidden = _a[0], setHidden = _a[1];
    var navigate = useNavigate();
    var match1500 = Hook.useMediaQuery("(max-width: 1500px)");
    var userId = React.useContext(AuthContext).userId;
    var c1 = "#7a5dd1";
    var c2 = "#00ffd0";
    return (_jsxs(Container, { children: [_jsxs(Item, __assign({ margin: match1500 ? "50px 0 0 30px" : "0px", onClick: function () { return setHidden(function (s) { return !s; }); } }, { children: [_jsx(Logo, { scaleFactor: 3, colorProps: { colorOne: c1, colorTwo: c2 } }), !hidden ? _jsx(HamburgerMenu, {}) : null] })), _jsx(Label, { children: "NEXUS" }), _jsx(Item, __assign({ onClick: function () { navigate("/profile/".concat(userId)); } }, { children: _jsx(User, { dropShadow: false, scaleFactor: 0.55, color: "white" }) }))] }));
};
export default TopMenu;
var templateObject_1, templateObject_2, templateObject_3;
