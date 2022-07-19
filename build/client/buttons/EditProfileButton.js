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
import styled from "styled-components";
var ButtonStyled = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  all: unset;\n  margin: \n  // z-index: 6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 25px;\n  padding: 0.5rem;\n  border: 2px solid white;\n  background-color: springgreen;\n  color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: white;\n    border: 1px solid springgreen;\n    color: springgreen;\n  }\n  &:active {\n    transform: scale(0.9);\n  }\n  > p {\n    font-family: Quicksand;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n"], ["\n  all: unset;\n  margin: \n  // z-index: 6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 25px;\n  padding: 0.5rem;\n  border: 2px solid white;\n  background-color: springgreen;\n  color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: white;\n    border: 1px solid springgreen;\n    color: springgreen;\n  }\n  &:active {\n    transform: scale(0.9);\n  }\n  > p {\n    font-family: Quicksand;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n"])));
var EditProfileButton = function (props) {
    return (_jsx(ButtonStyled, __assign({ onClick: props.onClick, type: props.type }, { children: _jsx("p", { children: props.text }) })));
};
export default EditProfileButton;
var templateObject_1;
