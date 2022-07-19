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
var Svg = styled.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: scale(", ");\n  filter: ", ";\n    \n"], ["\n  transform: scale(", ");\n  filter: ", ";\n    \n"])), function (props) { return props.scaleFactor; }, function (props) {
    return props.dropShadow ? "drop-shadow(2px 2px 2px black)" : "none";
});
var Visible = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M24 29.65Q26.75 29.65 28.7 27.675Q30.65 25.7 30.65 23Q30.65 20.25 28.675 18.3Q26.7 16.35 24 16.35Q21.25 16.35 19.3 18.325Q17.35 20.3 17.35 23Q17.35 25.75 19.325 27.7Q21.3 29.65 24 29.65ZM24 28.45Q21.7 28.45 20.125 26.85Q18.55 25.25 18.55 23Q18.55 20.7 20.15 19.125Q21.75 17.55 24 17.55Q26.3 17.55 27.875 19.15Q29.45 20.75 29.45 23Q29.45 25.3 27.85 26.875Q26.25 28.45 24 28.45ZM24 35.4Q17.8 35.4 12.65 32.025Q7.5 28.65 4.8 23Q7.5 17.35 12.65 13.975Q17.8 10.6 24 10.6Q30.2 10.6 35.35 13.975Q40.5 17.35 43.2 23Q40.5 28.65 35.35 32.025Q30.2 35.4 24 35.4ZM24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23Q24 23 24 23ZM24 34.3Q29.8 34.3 34.625 31.25Q39.45 28.2 42 23Q39.45 17.8 34.625 14.75Q29.8 11.7 24 11.7Q18.2 11.7 13.375 14.75Q8.55 17.8 6 23Q8.55 28.2 13.375 31.25Q18.2 34.3 24 34.3Z" /* stroke={color} */, fill: color }) })));
};
export default Visible;
var templateObject_1;
