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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axiosApiInstance from "../../util/axiosInstance";
import UserItem from "../User/UserItem";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: auto;\n  border: 1px solid black;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: auto;\n  border: 1px solid black;\n"])));
var Banner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px;\n  position: sticky;\n  top: -1px;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: springgreen;\n  font-family: Quicksand;\n\n  > h2 {\n    font-size: 1.8rem;\n    letter-spacing: 0.1rem;\n  }\n  > h3 {\n    letter-spacing: 1rem;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px;\n  position: sticky;\n  top: -1px;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: springgreen;\n  font-family: Quicksand;\n\n  > h2 {\n    font-size: 1.8rem;\n    letter-spacing: 0.1rem;\n  }\n  > h3 {\n    letter-spacing: 1rem;\n  }\n"])));
var Sections = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  top: 50px;\n  position: sticky;\n  display: flex;\n  height: 50px;\n  background-color: lightgrey;\n  > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 50%;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-bottom: 2px solid white;\n      color: springgreen;\n    }\n    > p {\n      font-size: 1.5rem;\n      font-weight: bold;\n      letter-spacing: 0.1rem;\n      font-family: Quicksand;\n    }\n  }\n"], ["\n  top: 50px;\n  position: sticky;\n  display: flex;\n  height: 50px;\n  background-color: lightgrey;\n  > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 50%;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-bottom: 2px solid white;\n      color: springgreen;\n    }\n    > p {\n      font-size: 1.5rem;\n      font-weight: bold;\n      letter-spacing: 0.1rem;\n      font-family: Quicksand;\n    }\n  }\n"])));
var FollowContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 1rem;\n  /* list-style: none; */\n"], ["\n  margin: 1rem;\n  /* list-style: none; */\n"])));
var ListItem = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 15px;\n  margin-bottom: 10px;\n  background-color: rgba(211, 211, 211, 0.4);\n  border-bottom: 1px solid lightgrey;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  &:hover {\n    background-color: rgb(211, 211, 211);\n  }\n"], ["\n  cursor: pointer;\n  padding: 15px;\n  margin-bottom: 10px;\n  background-color: rgba(211, 211, 211, 0.4);\n  border-bottom: 1px solid lightgrey;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  &:hover {\n    background-color: rgb(211, 211, 211);\n  }\n"])));
var FollowerButton = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  cursor: pointer;\n  background-color: ", ";\n"], ["\n  cursor: pointer;\n  background-color: ", ";\n"])), function (active) { return (active.active ? "rgb(130, 130, 130)" : ""); });
var FollowingButton = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  cursor: pointer;\n  background-color: ", ";\n"], ["\n  cursor: pointer;\n  background-color: ", ";\n"])), function (active) { return (active.active ? "" : "rgb(130, 130, 130)"); });
var FollowSection = function () {
    var _a = useState(true), pageSwitch = _a[0], setPageSwitch = _a[1];
    var currentProfileId = useParams()._id;
    var _b = useState([]), followingList = _b[0], setFollowingList = _b[1];
    var _c = useState([]), followerList = _c[0], setFollowerList = _c[1];
    useEffect(function () {
        function getList() {
            return __awaiter(this, void 0, void 0, function () {
                var resFollowing, resFollower, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, axiosApiInstance.get("/api/user/getfollowing/".concat(currentProfileId))];
                        case 1:
                            resFollowing = _a.sent();
                            return [4 /*yield*/, axiosApiInstance.get("/api/user/getfollowers/".concat(currentProfileId))];
                        case 2:
                            resFollower = _a.sent();
                            setFollowingList(resFollowing.data);
                            setFollowerList(resFollower.data);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.log(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        getList();
    }, []);
    return (_jsxs(Container, { children: [_jsxs(Banner, { children: [_jsx("h1", { children: "Username" }), _jsx("h3", { children: "NEXUS" })] }), _jsxs(Sections, { children: [_jsx(FollowerButton, __assign({ active: pageSwitch, onClick: function () { return setPageSwitch(true); } }, { children: _jsx("p", { children: "Followers" }) })), _jsx(FollowingButton, __assign({ active: pageSwitch, onClick: function () { return setPageSwitch(false); } }, { children: _jsx("p", { children: "Following" }) }))] }), _jsx(FollowContainer, { children: !pageSwitch
                    ? followingList.map(function (element, i) {
                        return (_jsx(ListItem, { children: _jsx(UserItem, { user: element }) }, i));
                    })
                    : followerList.map(function (element, i) {
                        return (_jsx(ListItem, { children: _jsx(UserItem, { user: element }) }, i));
                    }) })] }));
};
export default FollowSection;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
