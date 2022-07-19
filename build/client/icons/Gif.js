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
var Gif = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M16.5 28H19.55Q20.15 28 20.575 27.55Q21 27.1 21 26.5V24.5H19.5V26.5Q19.5 26.5 19.5 26.5Q19.5 26.5 19.5 26.5H16.5Q16.5 26.5 16.5 26.5Q16.5 26.5 16.5 26.5V21.5Q16.5 21.5 16.5 21.5Q16.5 21.5 16.5 21.5H20.9Q20.9 20.9 20.5 20.45Q20.1 20 19.5 20H16.5Q15.85 20 15.425 20.425Q15 20.85 15 21.5V26.5Q15 27.15 15.425 27.575Q15.85 28 16.5 28ZM23.25 28H24.75V20H23.25ZM27 28H28.5V25H32V23.5H28.5V21.5H33V20H27ZM9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Z", 
            /* stroke={color} */ fill: color }) })));
};
export default Gif;
var templateObject_1;
