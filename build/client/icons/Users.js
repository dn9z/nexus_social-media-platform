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
var Users = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M27 24q2.5 0 4.2-1.7 1.7-1.7 1.7-4.2t-1.7-4.2q-1.7-1.7-4.2-1.7t-4.2 1.7q-1.7 1.7-1.7 4.2t1.7 4.2Q24.5 24 27 24ZM13 35.05q2.95-3.75 6.75-5.4Q23.55 28 27 28t7.25 1.65q3.8 1.65 6.75 5.4V7H13v28.05ZM13 38q-1.2 0-2.1-.9-.9-.9-.9-2.1V7q0-1.2.9-2.1.9-.9 2.1-.9h28q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm-6 6q-1.2 0-2.1-.9Q4 42.2 4 41V12.5h3V41h28.5v3Zm20-23q-1.2 0-2.05-.85-.85-.85-.85-2.05 0-1.2.85-2.05.85-.85 2.05-.85 1.2 0 2.05.85.85.85.85 2.05 0 1.2-.85 2.05Q28.2 21 27 21Zm-9.35 14h18.7q-1.6-1.75-4.125-2.875T27 31q-2.7 0-5.225 1.125Q19.25 33.25 17.65 35ZM27 21Z" /* stroke={color} */, fill: color }) })));
};
export default Users;
var templateObject_1;
