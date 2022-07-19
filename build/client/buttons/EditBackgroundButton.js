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
var ButtonStyled = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nall: unset;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ncolor: springgreen;\ntransform: translate(-50%, -50%);\nheight: 30px;\nborder: 1px solid springgreen;\nbackground-color: white;\nfont-size: 1.2rem;\nborder-radius: 50%;\npadding: 0.5rem;\ncursor: pointer;\n\n&:hover {\n  background-color: springgreen;\n  color: white;\n  border: 1px solid white;\n}\n> p {\n  font-family: Quicksand;\n      font-size: 1.2rem;\n      font-weight: 700;\n    }\n"], ["\nall: unset;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ncolor: springgreen;\ntransform: translate(-50%, -50%);\nheight: 30px;\nborder: 1px solid springgreen;\nbackground-color: white;\nfont-size: 1.2rem;\nborder-radius: 50%;\npadding: 0.5rem;\ncursor: pointer;\n\n&:hover {\n  background-color: springgreen;\n  color: white;\n  border: 1px solid white;\n}\n> p {\n  font-family: Quicksand;\n      font-size: 1.2rem;\n      font-weight: 700;\n    }\n"])));
var Button = function (props) {
    return (_jsx(ButtonStyled, __assign({ onClick: props.onClick, type: props.type }, { children: _jsx("p", { children: props.text }) })));
};
export default Button;
var templateObject_1;
