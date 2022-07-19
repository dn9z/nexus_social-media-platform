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
var Info = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M23.5 32.7H24.6V22H23.5ZM24 19.6Q24.4 19.6 24.65 19.375Q24.9 19.15 24.9 18.7Q24.9 18.25 24.65 18.025Q24.4 17.8 24 17.8Q23.55 17.8 23.325 18.025Q23.1 18.25 23.1 18.7Q23.1 19.1 23.35 19.35Q23.6 19.6 24 19.6ZM24 41.4Q20.35 41.4 17.175 40.05Q14 38.7 11.675 36.325Q9.35 33.95 7.975 30.8Q6.6 27.65 6.6 24Q6.6 20.35 7.95 17.175Q9.3 14 11.675 11.65Q14.05 9.3 17.2 7.95Q20.35 6.6 24 6.6Q27.65 6.6 30.825 7.95Q34 9.3 36.35 11.65Q38.7 14 40.05 17.175Q41.4 20.35 41.4 24Q41.4 27.65 40.05 30.825Q38.7 34 36.35 36.325Q34 38.65 30.825 40.025Q27.65 41.4 24 41.4ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 40.3Q30.75 40.3 35.525 35.525Q40.3 30.75 40.3 24Q40.3 17.25 35.525 12.475Q30.75 7.7 24 7.7Q17.25 7.7 12.475 12.475Q7.7 17.25 7.7 24Q7.7 30.75 12.475 35.525Q17.25 40.3 24 40.3Z" /* stroke={color} */, fill: color }) })));
};
export default Info;
var templateObject_1;
