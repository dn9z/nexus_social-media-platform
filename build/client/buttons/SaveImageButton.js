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
var ButtonStyled = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ntext-align: center;\nall: unset;\nborder: 1px solid black;\nbackground-color: white;\nfont-size: 1.2rem;\nborder-radius: 25px;\npadding: 0.2rem 1rem 0.2rem 1rem;\nmargin: 5px;\nbox-shadow: 0px 0px 2px 2px black;\n&:hover {\n  background-color: grey;\n  color: springgreen;\n  border: 2px solid white;\n}\n&:active {\n  transform: scale(0.9);\n}\n> p {\nfont-family: Quicksand;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n"], ["\ntext-align: center;\nall: unset;\nborder: 1px solid black;\nbackground-color: white;\nfont-size: 1.2rem;\nborder-radius: 25px;\npadding: 0.2rem 1rem 0.2rem 1rem;\nmargin: 5px;\nbox-shadow: 0px 0px 2px 2px black;\n&:hover {\n  background-color: grey;\n  color: springgreen;\n  border: 2px solid white;\n}\n&:active {\n  transform: scale(0.9);\n}\n> p {\nfont-family: Quicksand;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n"])));
var Button = function (props) {
    return (_jsx(ButtonStyled, __assign({ onClick: props.onClick, type: props.type }, { children: _jsx("p", { children: props.text }) })));
};
export default Button;
var templateObject_1;
