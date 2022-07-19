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
var Settings = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M18.85 44.8 17.8 38.3Q17 38 16.025 37.475Q15.05 36.95 14.35 36.35L8.25 39.1L3.05 29.8L8.5 25.75Q8.45 25.4 8.425 24.85Q8.4 24.3 8.4 23.9Q8.4 23.55 8.425 23.025Q8.45 22.5 8.5 22.1L3.05 18.1L8.25 8.85L14.25 11.6Q14.95 11.05 15.95 10.475Q16.95 9.9 17.8 9.6L18.85 3.15H29.2L30.2 9.6Q31.05 9.9 32.075 10.475Q33.1 11.05 33.75 11.6L39.8 8.85L45 18.1L39.45 22.05Q39.5 22.5 39.55 23.05Q39.6 23.6 39.6 24Q39.6 24.4 39.55 24.925Q39.5 25.45 39.5 25.85L44.95 29.8L39.75 39.1L33.65 36.35Q32.95 36.9 32 37.475Q31.05 38.05 30.25 38.3L29.2 44.8ZM23.95 31.15Q26.95 31.15 29.05 29.05Q31.15 26.95 31.15 23.95Q31.15 20.95 29.05 18.85Q26.95 16.75 23.95 16.75Q20.95 16.75 18.85 18.85Q16.75 20.95 16.75 23.95Q16.75 26.95 18.85 29.05Q20.95 31.15 23.95 31.15ZM23.9 27.5Q22.45 27.5 21.425 26.45Q20.4 25.4 20.4 23.95Q20.4 22.45 21.425 21.425Q22.45 20.4 23.95 20.4Q25.4 20.4 26.45 21.45Q27.5 22.5 27.5 23.95Q27.5 25.45 26.45 26.475Q25.4 27.5 23.9 27.5ZM24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95Q24 23.95 24 23.95ZM21.8 41.15H26.2L26.9 35.5Q28.6 35.1 30.1 34.25Q31.6 33.4 32.85 32.15L38.1 34.45L40.1 30.85L35.45 27.4Q35.65 26.55 35.8 25.7Q35.95 24.85 35.95 23.95Q35.95 23.05 35.825 22.225Q35.7 21.4 35.5 20.5L40.1 17.1L38.15 13.5L32.85 15.75Q31.7 14.45 30.2 13.525Q28.7 12.6 26.9 12.35L26.25 6.8H21.75L21.1 12.35Q19.3 12.75 17.775 13.625Q16.25 14.5 15.1 15.75L9.9 13.5L7.85 17.1L12.5 20.55Q12.3 21.45 12.175 22.275Q12.05 23.1 12.05 23.9Q12.05 24.75 12.175 25.6Q12.3 26.45 12.5 27.4L7.85 30.85L9.9 34.45L15.15 32.15Q16.45 33.45 17.95 34.3Q19.45 35.15 21.1 35.55Z" /* stroke={color} */, fill: color }) })));
};
export default Settings;
var templateObject_1;
