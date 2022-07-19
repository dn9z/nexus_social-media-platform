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
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
var Header = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  margin: 0 1rem;\n  width: ", ";\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  & > p {\n    font-family: Inconsolata;\n    font-size: 1.5rem;\n    /* padding-left: 0.5rem; */\n  }\n  & > h1 {\n    font-size: ", ";\n    font-weight: 500;\n    font-family: Quicksand;\n    letter-spacing: 1rem;\n    padding-right: 2rem;\n  }\n  & > div {\n    & > svg {\n      margin-bottom: 50px;\n    }\n  }\n\n  @media (min-width: 374px) and (max-width: 575px) {\n    position: relative;\n    right: 25px;\n    width: 60vw;\n  }\n\n  @media (max-width: 300px) {\n    right: 38px;\n  }\n\n  @media (min-width: 576px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 100%;\n\n  }\n"], ["\n  color: ", ";\n  margin: 0 1rem;\n  width: ", ";\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  & > p {\n    font-family: Inconsolata;\n    font-size: 1.5rem;\n    /* padding-left: 0.5rem; */\n  }\n  & > h1 {\n    font-size: ", ";\n    font-weight: 500;\n    font-family: Quicksand;\n    letter-spacing: 1rem;\n    padding-right: 2rem;\n  }\n  & > div {\n    & > svg {\n      margin-bottom: 50px;\n    }\n  }\n\n  @media (min-width: 374px) and (max-width: 575px) {\n    position: relative;\n    right: 25px;\n    width: 60vw;\n  }\n\n  @media (max-width: 300px) {\n    right: 38px;\n  }\n\n  @media (min-width: 576px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    width: 100%;\n\n  }\n"])), themeConf.fontColor, function (props) { return props.width; }, function (props) { return props.headingSize; });
var StandardHeader = function (props) {
    var children = props.children, subheading = props.subheading, headingSize = props.headingSize, width = props.width;
    return (_jsxs(Header, __assign({ headingSize: headingSize, width: width }, { children: [_jsx("p", { children: subheading }), _jsx("h1", { children: "NEXUS" }), _jsx("div", { children: children })] })));
};
export default StandardHeader;
var templateObject_1;
