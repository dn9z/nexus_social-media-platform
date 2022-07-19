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
var DarkMode = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M24 42Q16.5 42 11.25 36.75Q6 31.5 6 24Q6 16.5 11.25 11.25Q16.5 6 24 6Q24.4 6 24.85 6.025Q25.3 6.05 26 6.1Q24.2 7.7 23.2 10.05Q22.2 12.4 22.2 15Q22.2 19.5 25.35 22.65Q28.5 25.8 33 25.8Q35.6 25.8 37.95 24.875Q40.3 23.95 41.9 22.3Q41.95 22.9 41.975 23.275Q42 23.65 42 24Q42 31.5 36.75 36.75Q31.5 42 24 42ZM24 39Q29.45 39 33.5 35.625Q37.55 32.25 38.55 27.7Q37.3 28.25 35.875 28.525Q34.45 28.8 33 28.8Q27.25 28.8 23.225 24.775Q19.2 20.75 19.2 15Q19.2 13.8 19.45 12.425Q19.7 11.05 20.35 9.3Q15.45 10.65 12.225 14.775Q9 18.9 9 24Q9 30.25 13.375 34.625Q17.75 39 24 39ZM23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Q23.8 24.15 23.8 24.15Z" /* stroke={color} */, fill: color }) })));
};
export default DarkMode;
var templateObject_1;
