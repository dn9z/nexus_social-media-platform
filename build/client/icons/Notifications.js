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
var Notifications = function (_a) {
    var color = _a.color, dropShadow = _a.dropShadow, scaleFactor = _a.scaleFactor;
    return (_jsx(Svg, __assign({ dropShadow: dropShadow, scaleFactor: scaleFactor, xmlns: "http://www.w3.org/2000/svg", height: "48", width: "48" }, { children: _jsx("path", { d: "M7.55 38.05V34.4H11.8V19.7Q11.8 15.45 14.275 12.1Q16.75 8.75 20.85 7.75V6.3Q20.85 5 21.775 4.15Q22.7 3.3 24 3.3Q25.3 3.3 26.225 4.15Q27.15 5 27.15 6.3V7.75Q31.25 8.75 33.775 12.1Q36.3 15.45 36.3 19.7V34.4H40.45V38.05ZM24 23.05Q24 23.05 24 23.05Q24 23.05 24 23.05Q24 23.05 24 23.05Q24 23.05 24 23.05ZM24 44.65Q22.25 44.65 20.975 43.375Q19.7 42.1 19.7 40.35H28.3Q28.3 42.15 27.025 43.4Q25.75 44.65 24 44.65ZM15.45 34.4H32.65V19.7Q32.65 16.1 30.15 13.575Q27.65 11.05 24.05 11.05Q20.45 11.05 17.95 13.575Q15.45 16.1 15.45 19.7Z" /* stroke={color} */, fill: color }) })));
};
export default Notifications;
var templateObject_1;
