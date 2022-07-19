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
var Emoji = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M24 34.95Q27.3 34.95 30.075 33.175Q32.85 31.4 34.1 28.35H13.9Q15.2 31.4 17.95 33.175Q20.7 34.95 24 34.95ZM15.1 21.35 17.35 19.1 19.6 21.35 21.4 19.55 17.35 15.5 13.3 19.55ZM28.45 21.35 30.7 19.1 32.95 21.35 34.75 19.55 30.7 15.5 26.65 19.55ZM24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 24Q4 19.85 5.575 16.2Q7.15 12.55 9.875 9.85Q12.6 7.15 16.25 5.575Q19.9 4 24 4Q28.15 4 31.8 5.575Q35.45 7.15 38.15 9.85Q40.85 12.55 42.425 16.2Q44 19.85 44 24Q44 28.1 42.425 31.75Q40.85 35.4 38.15 38.125Q35.45 40.85 31.8 42.425Q28.15 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31.1 41 36.05 36.025Q41 31.05 41 24Q41 16.9 36.05 11.95Q31.1 7 24 7Q16.95 7 11.975 11.95Q7 16.9 7 24Q7 31.05 11.975 36.025Q16.95 41 24 41Z" /* stroke={color} */, fill: color }) })));
};
export default Emoji;
var templateObject_1;
