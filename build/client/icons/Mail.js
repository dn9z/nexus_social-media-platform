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
var Mail = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M6.85 40.75Q5.4 40.75 4.3 39.65Q3.2 38.55 3.2 37.1V10.9Q3.2 9.45 4.3 8.35Q5.4 7.25 6.85 7.25H41.15Q42.6 7.25 43.7 8.35Q44.8 9.45 44.8 10.9V37.1Q44.8 38.55 43.7 39.65Q42.6 40.75 41.15 40.75ZM24 25.45 6.85 14.35V37.1Q6.85 37.1 6.85 37.1Q6.85 37.1 6.85 37.1H41.15Q41.15 37.1 41.15 37.1Q41.15 37.1 41.15 37.1V14.35ZM24 21.9 41.15 10.9H6.9ZM6.65 14.35V10.9V14.35V37.1Q6.8 37.1 6.825 37.1Q6.85 37.1 6.85 37.1H6.65Q6.65 37.1 6.65 37.1Q6.65 37.1 6.65 37.1Z" /* stroke={color} */, fill: color }) })));
};
export default Mail;
var templateObject_1;
