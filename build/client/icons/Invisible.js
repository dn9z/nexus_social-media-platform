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
var Svg = styled.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: scale(", ");\n  filter: ", ";\n"], ["\n  transform: scale(", ");\n  filter: ", ";\n"])), function (props) { return props.scaleFactor; }, function (props) {
    return props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none";
});
var Invisible = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M30.3 25.05 29.3 24.05Q30 20.95 27.75 19Q25.5 17.05 22.95 17.7L21.95 16.7Q22.35 16.55 22.85 16.45Q23.35 16.35 24 16.35Q26.8 16.35 28.725 18.275Q30.65 20.2 30.65 23Q30.65 23.65 30.55 24.2Q30.45 24.75 30.3 25.05ZM36.6 31.2 35.75 30.5Q37.8 28.95 39.4 27.075Q41 25.2 42 23Q39.5 17.8 34.7 14.75Q29.9 11.7 24.15 11.7Q22.5 11.7 20.875 11.975Q19.25 12.25 17.9 12.65L17.05 11.8Q18.6 11.2 20.475 10.9Q22.35 10.6 24.1 10.6Q30.15 10.6 35.425 13.975Q40.7 17.35 43.2 23Q42.1 25.35 40.475 27.375Q38.85 29.4 36.6 31.2ZM39.75 41.3 32.15 33.7Q30.95 34.35 28.8 34.875Q26.65 35.4 24 35.4Q17.8 35.4 12.6 32.025Q7.4 28.65 4.8 23Q6 20.35 8.05 17.975Q10.1 15.6 12.45 13.95L6.6 8.15L7.4 7.35L40.5 40.45ZM13.2 14.75Q11.3 16 9.175 18.3Q7.05 20.6 6 23Q8.5 28.2 13.325 31.25Q18.15 34.3 24.1 34.3Q26.3 34.3 28.475 33.875Q30.65 33.45 31.45 33L27.35 28.9Q26.85 29.2 25.825 29.425Q24.8 29.65 24 29.65Q21.2 29.65 19.275 27.725Q17.35 25.8 17.35 23Q17.35 22.25 17.575 21.25Q17.8 20.25 18.1 19.65ZM26.85 21.75Q26.85 21.75 26.85 21.75Q26.85 21.75 26.85 21.75Q26.85 21.75 26.85 21.75Q26.85 21.75 26.85 21.75Q26.85 21.75 26.85 21.75Q26.85 21.75 26.85 21.75ZM22.35 24.05Q22.35 24.05 22.35 24.05Q22.35 24.05 22.35 24.05Q22.35 24.05 22.35 24.05Q22.35 24.05 22.35 24.05Q22.35 24.05 22.35 24.05Q22.35 24.05 22.35 24.05Z" /* stroke={color} */, fill: color }) })));
};
export default Invisible;
var templateObject_1;