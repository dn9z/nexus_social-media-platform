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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";
import EditProfileButton from "../../buttons/EditProfileButton";
import { MessageProvider, } from "../../context/MessageContext";
import axiosApiInstance from "../../util/axiosInstance";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import FollowButton from "../../buttons/FollowButton";
import MessageBridge from "../Bridges/MessageBridge";
import UserPic from "../User/UserPic";
import { AuthContext } from "../../context/AuthContext";
import * as Hook from "usehooks-ts";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", ";\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  overflow: auto;\n"], ["\n  margin-top: ", ";\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  overflow: auto;\n"
    // const Container = styled.div`
    // display: flex;
    // flex-direction: column;
    // height: 100vh;
    // overflow: scroll;
    // `;
])), function (props) { return props.marginTop; });
// const Container = styled.div`
// display: flex;
// flex-direction: column;
// height: 100vh;
// overflow: scroll;
// `;
var Banner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px;\n  position: fixed;\n  width: 60vw;\n  top: -1px;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.0);\n  color:", ";\n  font-family: Quicksand;\n  height: 60px;\n\n  > h2 {\n    font-size: 1.8rem;\n    letter-spacing: 0.1rem;\n  }\n  > h3 {\n    letter-spacing: 1rem;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px;\n  position: fixed;\n  width: 60vw;\n  top: -1px;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.0);\n  color:", ";\n  font-family: Quicksand;\n  height: 60px;\n\n  > h2 {\n    font-size: 1.8rem;\n    letter-spacing: 0.1rem;\n  }\n  > h3 {\n    letter-spacing: 1rem;\n  }\n"])), themeConf.profilePicBorder);
var ProfileContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 70vh;\n \n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 70vh;\n \n"])));
var BackgroundContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n\n  border-bottom: 1px solid rgb(51, 51, 51);\n  height: 40%;\n\n  //height: 50%;\n\n  position: relative;\n  background: springgreen;\n  \n"], ["\n  display: flex;\n  justify-content: flex-end;\n\n  border-bottom: 1px solid rgb(51, 51, 51);\n  height: 40%;\n\n  //height: 50%;\n\n  position: relative;\n  background: springgreen;\n  \n"])));
var ProfileInfo = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 60px 10px 10px 10px; // top, right, bottom, left\n  display: flex;\n  flex-direction: column;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n  height: 60%;\n  background-color: ", ";\n  font-family: Quicksand;\n"], ["\n  padding: 60px 10px 10px 10px; // top, right, bottom, left\n  display: flex;\n  flex-direction: column;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n  height: 60%;\n  background-color: ", ";\n  font-family: Quicksand;\n"])), themeConf.backgroundColor);
var AvatarImageContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  box-shadow: 0px 2px 10px black;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -3rem;\n  left: 5rem;\n  background-color: ", ";\n  cursor: pointer;\n\n  @media (max-width: 575px) {\n    left: 2rem;\n    bottom: -2.3rem;\n  }\n"], ["\n  display: flex;\n  box-shadow: 0px 2px 10px black;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -3rem;\n  left: 5rem;\n  background-color: ", ";\n  cursor: pointer;\n\n  @media (max-width: 575px) {\n    left: 2rem;\n    bottom: -2.3rem;\n  }\n"])), themeConf.backgroundColor);
var Username = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-weight: 700;\n  font-size: 1.7rem;\n  margin-bottom: 1rem;\n"], ["\n  font-weight: 700;\n  font-size: 1.7rem;\n  margin-bottom: 1rem;\n"])));
var Email = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 1.2rem;\n  font-weight: 700;\n"], ["\n  font-size: 1.2rem;\n  font-weight: 700;\n"])));
var Bio = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 1.2rem;\n  font-family: Jost;\n"], ["\n  font-size: 1.2rem;\n  font-family: Jost;\n"])));
var Location = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-size: 1.2rem;\n  font-family: Jost;\n"], ["\n  font-size: 1.2rem;\n  font-family: Jost;\n"])));
var FollowContainer = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  margin: 1rem;\n  align-items: center;\n  height: auto;\n  font-weight: bold;\n"], ["\n  display: flex;\n  flex-direction: row;\n  margin: 1rem;\n  align-items: center;\n  height: auto;\n  font-weight: bold;\n"])));
var Network = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var ButtonContainer = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  bottom: -4rem;\n  right: 1rem;\n"], ["\n  position: absolute;\n  bottom: -4rem;\n  right: 1rem;\n"])));
var BackgroundImage = styled.img(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  object-fit: \"cover\";\n  width: 100%;\n"], ["\n  object-fit: \"cover\";\n  width: 100%;\n"])));
var BottomContainer = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n"])));
/* process.env.REACT_APP_SERVER_URI "http://localhost:3001/" */
var Profile = function () {
    var smallMobile = Hook.useMediaQuery("(max-width: 294px)");
    var mobileView = Hook.useMediaQuery("(max-width: 575px)");
    var tabletView = Hook.useMediaQuery("(min-width: 576px) and (max-width: 992px)");
    var navigate = useNavigate();
    var userId = React.useContext(AuthContext).userId;
    var currentProfileId = useParams()._id;
    var _a = useState(null), currentUser = _a[0], setCurrentUser = _a[1];
    var _b = useState([]), loggedInUserFollowing = _b[0], setLoggedInUserFollowing = _b[1];
    var _c = useState(false), needRefresh = _c[0], setNeedRefresh = _c[1];
    var match1500 = Hook.useMediaQuery("(max-width: 1500px)");
    function handleFollow() {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.patch("/api/user/followuser/".concat(currentProfileId))];
                    case 1:
                        res = _a.sent();
                        setNeedRefresh(true);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleUnfollow() {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.patch("/api/user/unfollowuser/".concat(currentProfileId))];
                    case 1:
                        res = _a.sent();
                        setNeedRefresh(true);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function getCurrentProfileUser() {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.get("/api/user/getuserbyid/".concat(currentProfileId))];
                    case 1:
                        res = _a.sent();
                        setCurrentUser(res.data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function getLoggedInUser() {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.get("/api/user/getuserbyid/".concat(userId))];
                    case 1:
                        res = _a.sent();
                        setLoggedInUserFollowing(res.data._following);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    React.useEffect(function () {
        getCurrentProfileUser();
        getLoggedInUser();
    }, []);
    React.useEffect(function () {
        if (needRefresh) {
            getCurrentProfileUser();
            getLoggedInUser();
            setNeedRefresh(false);
        }
    }, [needRefresh]);
    return (currentUser && (_jsx(_Fragment, { children: _jsxs(Container, __assign({ marginTop: match1500 ? "61px" : "0px" }, { children: [_jsx(Banner, { children: _jsx("h1", { children: match1500 ? "" : currentUser.username }) }), _jsxs(ProfileContainer, { children: [_jsxs(BackgroundContainer, { children: [_jsx(BackgroundImage, { src: currentUser.background
                                        ? currentUser.background
                                        : Pic, alt: "Background" }), _jsx(AvatarImageContainer, { children: _jsx(UserPic, { image: currentUser.avatar, customSize: smallMobile ? "80px" : mobileView ? "100px" : tabletView ? "130px" : "150px" }) }), _jsx(ButtonContainer, { children: _jsx(EditProfileButton, { onClick: function () { return navigate("/editprofile"); }, text: "Edit Profile", type: "button" }) })] }), _jsxs(ProfileInfo, { children: [_jsx(Username, { children: _jsxs("p", { children: ["Username: ", currentUser.username] }) }), _jsx(Email, { children: _jsxs("p", { children: ["Email: ", currentUser.email] }) }), currentUser ? (_jsx(Bio, { children: _jsx("p", { children: currentUser.bio }) })) : (""), currentUser.location ? (_jsx(Location, { children: _jsx("p", { children: currentUser.location }) })) : (""), _jsxs(BottomContainer, { children: [_jsxs(FollowContainer, { children: [_jsx(Network, __assign({ onClick: function () { navigate("/network/".concat(currentProfileId)); } }, { children: "View Network" })), userId !== currentProfileId && (!loggedInUserFollowing.includes(currentUser._id) ? (_jsx(FollowButton, { onClick: handleFollow, text: "Follow", type: "button" })) : (_jsx(FollowButton, { onClick: handleUnfollow, text: "Unfollow", type: "button" })))] }), _jsx(MessageProvider, { children: _jsx(MessageBridge, { id: currentUser._id }) })] })] }), _jsx("div", { children: _jsx(Feed, { profileId: currentProfileId }) })] })] })) })));
};
export default Profile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
