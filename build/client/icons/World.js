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
var World = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M24 44Q19.85 44 16.2 42.425Q12.55 40.85 9.85 38.15Q7.15 35.45 5.575 31.8Q4 28.15 4 24Q4 19.85 5.575 16.2Q7.15 12.55 9.85 9.85Q12.55 7.15 16.2 5.575Q19.85 4 24 4Q28.15 4 31.8 5.575Q35.45 7.15 38.15 9.85Q40.85 12.55 42.425 16.2Q44 19.85 44 24Q44 28.15 42.425 31.8Q40.85 35.45 38.15 38.15Q35.45 40.85 31.8 42.425Q28.15 44 24 44ZM21.85 40.95V36.85Q20.1 36.85 18.9 35.55Q17.7 34.25 17.7 32.5V30.3L7.45 20.05Q7.2 21.05 7.1 22.025Q7 23 7 24Q7 30.5 11.225 35.35Q15.45 40.2 21.85 40.95ZM36.55 35.55Q38.75 33.15 39.875 30.175Q41 27.2 41 24Q41 18.7 38.1 14.375Q35.2 10.05 30.35 8.05V8.95Q30.35 10.7 29.15 12Q27.95 13.3 26.2 13.3H21.85V17.65Q21.85 18.5 21.175 19.05Q20.5 19.6 19.65 19.6H15.5V24H28.4Q29.25 24 29.8 24.65Q30.35 25.3 30.35 26.15V32.5H32.5Q33.95 32.5 35.05 33.35Q36.15 34.2 36.55 35.55Z" /* stroke={color} */, fill: color }) })));
};
export default World;
var templateObject_1;
