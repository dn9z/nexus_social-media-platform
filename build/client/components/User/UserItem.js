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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import UserPic from "./UserPic";
import Pic from "../../img/Portrait_Placeholder.png";
import { useNavigate } from "react-router-dom";
var UserItemContainer = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 40vw;\n  height: 100%;\n  display: flex;\n  cursor: pointer;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 1rem;\n"], ["\n  width: 40vw;\n  height: 100%;\n  display: flex;\n  cursor: pointer;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 1rem;\n"])));
var UserInfo = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  margin-left: 1.5rem;\n  font-family: Quicksand;\n  font-size: 1.25rem;\n"], ["\n  display: flex;\n  margin-left: 1.5rem;\n  font-family: Quicksand;\n  font-size: 1.25rem;\n"
    /* "http://localhost:3001/"
    process.env.REACT_APP_SERVER_URI */
])));
/* "http://localhost:3001/"
process.env.REACT_APP_SERVER_URI */
var UserItem = function (_a) {
    var user = _a.user;
    var navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs(UserItemContainer, __assign({ onClick: function () {
                navigate("/profile/".concat(user._id));
            } }, { children: [_jsx(UserPic, { customSize: "50px", image: user.avatar ? "/" + user.avatar : Pic }), _jsx(UserInfo, { children: user.username })] })) }));
};
export default UserItem;
var templateObject_1, templateObject_2;
