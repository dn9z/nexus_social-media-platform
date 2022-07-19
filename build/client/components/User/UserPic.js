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
import * as themeConf from "../../styles/theme";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nwidth: ", ";\nheight: ", ";\nborder: 2px solid ", ";\nborder-radius: 100%;\n\n"], ["\nwidth: ", ";\nheight: ", ";\nborder: 2px solid ", ";\nborder-radius: 100%;\n\n"])), function (props) { return props.customSize; }, function (props) { return props.customSize; }, themeConf.profilePicBorder);
var UserPic = function (_a) {
    var customSize = _a.customSize, image = _a.image;
    return _jsx(Container, __assign({ customSize: customSize }, { children: _jsx("img", { style: {
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
            }, src: image, alt: "User Pic" }) }));
};
export default UserPic;
var templateObject_1;
