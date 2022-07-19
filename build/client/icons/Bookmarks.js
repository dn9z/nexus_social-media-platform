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
var Bookmarks = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M39.75 42.1V4Q39.75 4 39.75 4Q39.75 4 39.75 4H10.85V0.35H39.75Q41.2 0.35 42.3 1.45Q43.4 2.55 43.4 4V42.1ZM8.25 42.05 20.35 36.85 32.45 42.05V11.3Q32.45 11.3 32.45 11.3Q32.45 11.3 32.45 11.3H8.25Q8.25 11.3 8.25 11.3Q8.25 11.3 8.25 11.3ZM4.6 47.55V11.3Q4.6 9.85 5.7 8.75Q6.8 7.65 8.25 7.65H32.45Q33.9 7.65 35.025 8.75Q36.15 9.85 36.15 11.3V47.55L20.35 40.9ZM8.25 11.3Q8.25 11.3 8.25 11.3Q8.25 11.3 8.25 11.3H32.45Q32.45 11.3 32.45 11.3Q32.45 11.3 32.45 11.3H20.35Z" /* stroke={color} */, fill: color }) })));
};
export default Bookmarks;
var templateObject_1;
