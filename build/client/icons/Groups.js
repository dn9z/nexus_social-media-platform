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
var Groups = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M11.4 42.55Q8 42.55 5.675 40.225Q3.35 37.9 3.35 34.5Q3.35 31.1 5.675 28.775Q8 26.45 11.4 26.45Q14.8 26.45 17.125 28.775Q19.45 31.1 19.45 34.5Q19.45 37.9 17.125 40.225Q14.8 42.55 11.4 42.55ZM24.05 21.3Q20.65 21.3 18.325 18.975Q16 16.65 16 13.25Q16 9.85 18.325 7.525Q20.65 5.2 24.05 5.2Q27.45 5.2 29.775 7.525Q32.1 9.85 32.1 13.25Q32.1 16.65 29.775 18.975Q27.45 21.3 24.05 21.3ZM36.65 42.55Q33.25 42.55 30.925 40.225Q28.6 37.9 28.6 34.5Q28.6 31.1 30.925 28.775Q33.25 26.45 36.65 26.45Q40.05 26.45 42.375 28.775Q44.7 31.1 44.7 34.5Q44.7 37.9 42.375 40.225Q40.05 42.55 36.65 42.55ZM24.05 17.65Q25.85 17.65 27.15 16.35Q28.45 15.05 28.45 13.25Q28.45 11.45 27.15 10.15Q25.85 8.85 24.05 8.85Q22.25 8.85 20.95 10.15Q19.65 11.45 19.65 13.25Q19.65 15.05 20.95 16.35Q22.25 17.65 24.05 17.65ZM11.4 38.9Q13.2 38.9 14.5 37.6Q15.8 36.3 15.8 34.5Q15.8 32.7 14.5 31.4Q13.2 30.1 11.4 30.1Q9.6 30.1 8.3 31.4Q7 32.7 7 34.5Q7 36.3 8.3 37.6Q9.6 38.9 11.4 38.9ZM36.65 38.9Q38.45 38.9 39.75 37.6Q41.05 36.3 41.05 34.5Q41.05 32.7 39.75 31.4Q38.45 30.1 36.65 30.1Q34.85 30.1 33.55 31.4Q32.25 32.7 32.25 34.5Q32.25 36.3 33.55 37.6Q34.85 38.9 36.65 38.9ZM24.05 13.25Q24.05 13.25 24.05 13.25Q24.05 13.25 24.05 13.25Q24.05 13.25 24.05 13.25Q24.05 13.25 24.05 13.25Q24.05 13.25 24.05 13.25Q24.05 13.25 24.05 13.25Q24.05 13.25 24.05 13.25Q24.05 13.25 24.05 13.25ZM11.4 34.45Q11.4 34.45 11.4 34.45Q11.4 34.45 11.4 34.45Q11.4 34.45 11.4 34.45Q11.4 34.45 11.4 34.45Q11.4 34.45 11.4 34.45Q11.4 34.45 11.4 34.45Q11.4 34.45 11.4 34.45Q11.4 34.45 11.4 34.45ZM36.65 34.45Q36.65 34.45 36.65 34.45Q36.65 34.45 36.65 34.45Q36.65 34.45 36.65 34.45Q36.65 34.45 36.65 34.45Q36.65 34.45 36.65 34.45Q36.65 34.45 36.65 34.45Q36.65 34.45 36.65 34.45Q36.65 34.45 36.65 34.45Z" /* stroke={color} */, fill: color }) })));
};
export default Groups;
var templateObject_1;
