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
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Pic from "../../img/Portrait_Placeholder.png";
import axiosApiInstance from "../../util/axiosInstance";
import EditAvatarButton from "../../buttons/EditAvatarButton";
import EditBackgroundButton from "../../buttons/EditBackgroundButton";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import Cross from "../../icons/Cross";
import { useTheme } from "../../context/ThemeManager";
import UserPic from "../User/UserPic";
import { useMediaQuery } from "usehooks-ts";
var Main = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n"], ["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 32px;\n  display: flex;\n  flex-direction: column;\n  height: 90vh;\n  width: 50vw;\n  overflow: hidden;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 5px grey, 2px 2px 8px silver, 3px 3px 10px silver;\n\n  @media (max-width: 575px) {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    border: none; \n    box-shadow: none;\n  }\n\n  @media (min-width: 575px) and (max-width: 992px) {\n    margin: 30px;\n    width: 100%;\n    height: 100%;\n    border: 1px solid grey;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px grey, 2px 2px 8px silver, 3px 3px 10px silver;\n  }\n\n"], ["\n  margin: 32px;\n  display: flex;\n  flex-direction: column;\n  height: 90vh;\n  width: 50vw;\n  overflow: hidden;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 5px grey, 2px 2px 8px silver, 3px 3px 10px silver;\n\n  @media (max-width: 575px) {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    border: none; \n    box-shadow: none;\n  }\n\n  @media (min-width: 575px) and (max-width: 992px) {\n    margin: 30px;\n    width: 100%;\n    height: 100%;\n    border: 1px solid grey;\n    border-radius: 5px;\n    box-shadow: 1px 1px 5px grey, 2px 2px 8px silver, 3px 3px 10px silver;\n  }\n\n"])));
var Banner = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0px 10px 0px 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0px;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.0);\n  color: ", ";\n  font-family: Quicksand;\n  font-size: 1.6rem;\n  height: 60px;\n\n"], ["\n  padding: 0px 10px 0px 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0px;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.0);\n  color: ", ";\n  font-family: Quicksand;\n  font-size: 1.6rem;\n  height: 60px;\n\n"])), themeConf.fontColor);
var BackgroundContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: 6px solid rgb(51, 51, 51);\n  height: 40%;\n  position: relative;\n  background: springgreen;\n  margin-bottom: 5rem;\n\n  @media (max-width: 575px) {\n    width: 100%;\n    height: 30vh;\n    margin-bottom: 4rem;\n  }\n\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  border-bottom: 6px solid rgb(51, 51, 51);\n  height: 40%;\n  position: relative;\n  background: springgreen;\n  margin-bottom: 5rem;\n\n  @media (max-width: 575px) {\n    width: 100%;\n    height: 30vh;\n    margin-bottom: 4rem;\n  }\n\n"])));
var FormContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"])));
var Form = styled.form(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  height: 60%;\n  width: 25vw;\n\n  @media (max-width: 575px) {\n    width: 70vw;\n  }\n  @media (min-width: 575px) and (max-width: 992px) {\n    width: 70vw;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  height: 60%;\n  width: 25vw;\n\n  @media (max-width: 575px) {\n    width: 70vw;\n  }\n  @media (min-width: 575px) and (max-width: 992px) {\n    width: 70vw;\n  }\n"])));
var AvatarImageContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 2px 10px black;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -3rem;\n  left: 5rem;\n\n  background-color: ", ";\n  cursor: pointer;\n\n  @media (max-width: 575px) {\n    left: 2rem;\n    bottom: -2.3rem;\n  }\n\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 2px 10px black;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -3rem;\n  left: 5rem;\n\n  background-color: ", ";\n  cursor: pointer;\n\n  @media (max-width: 575px) {\n    left: 2rem;\n    bottom: -2.3rem;\n  }\n\n"])), themeConf.backgroundColor);
var BackButton = styled.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\nall: unset;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 45px;\nheight: 45px;\nborder: 1px solid ", ";\nborder-radius: 25px;\ncursor: pointer;\n&:hover {\n  background-color: ", ";\n\n}"], ["\nall: unset;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 45px;\nheight: 45px;\nborder: 1px solid ", ";\nborder-radius: 25px;\ncursor: pointer;\n&:hover {\n  background-color: ", ";\n\n}"])), themeConf.backgroundColor, themeConf.menuItemHoverColor);
var Edit = styled.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-size: 1.8rem;\n  font-family: Quicksand;\n  font-weight: 500;\n"], ["\n  font-size: 1.8rem;\n  font-family: Quicksand;\n  font-weight: 500;\n"])));
var SaveButton = styled.button(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  color: white;\n  border: 1px solid white;\n  background-color: springgreen;\n  font-size: 1.2rem;\n  border-radius: 25px;\n  padding: 0.5rem;\n  cursor: pointer;\n  &:hover {\n    background-color: white;\n    color: springgreen;\n    border: 1px solid springgreen;\n  }\n  > p {\n    font-family: Quicksand;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n"], ["\n  color: white;\n  border: 1px solid white;\n  background-color: springgreen;\n  font-size: 1.2rem;\n  border-radius: 25px;\n  padding: 0.5rem;\n  cursor: pointer;\n  &:hover {\n    background-color: white;\n    color: springgreen;\n    border: 1px solid springgreen;\n  }\n  > p {\n    font-family: Quicksand;\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n"])));
var Label = styled.label(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n  font-family: Quicksand;\n  font-weight: bold;\n  width: 100%;\n  > input {\n    padding: 5px 0px 5px 0px;\n    font-size: 1rem;\n    border: 1px solid black;\n    font-family: Quicksand;\n    background-color: rgba(211, 211, 211, 0.2);\n    color: ", ";\n  }\n  > textarea {\n    resize: none;\n    background-color: rgba(211, 211, 211, 0.2);\n    font-family: Quicksand;\n    font-size: 1rem;\n    border: 1px solid black;\n    height: 80px;\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n  font-family: Quicksand;\n  font-weight: bold;\n  width: 100%;\n  > input {\n    padding: 5px 0px 5px 0px;\n    font-size: 1rem;\n    border: 1px solid black;\n    font-family: Quicksand;\n    background-color: rgba(211, 211, 211, 0.2);\n    color: ", ";\n  }\n  > textarea {\n    resize: none;\n    background-color: rgba(211, 211, 211, 0.2);\n    font-family: Quicksand;\n    font-size: 1rem;\n    border: 1px solid black;\n    height: 80px;\n    color: ", ";\n  }\n"])), themeConf.fontColor, themeConf.fontColor);
var BackgroundImage = styled.img(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  objectFit: \"cover\";\n  width: 100%;\n"], ["\n  objectFit: \"cover\";\n  width: 100%;\n"])));
var EditProfile = function () {
    var context = React.useContext(Context);
    var authContext = React.useContext(AuthContext);
    // const [profile, setProfile] = useState<ProfileProps | null>(null);
    var _a = useState(""), firstName = _a[0], setFirstName = _a[1];
    var _b = useState(""), lastName = _b[0], setLastName = _b[1];
    var _c = useState(""), username = _c[0], setUsername = _c[1];
    var _d = useState(""), email = _d[0], setEmail = _d[1];
    var _e = useState(""), bio = _e[0], setBio = _e[1];
    var _f = useState(""), location = _f[0], setLocation = _f[1];
    var _g = useState(null), avatar = _g[0], setAvatar = _g[1];
    var _h = useState(null), background = _h[0], setBackground = _h[1];
    var theme = useTheme();
    var mobileView = useMediaQuery("(max-width: 575px)");
    var tabletView = useMediaQuery("(min-width: 576px) and (max-width: 992px)");
    useEffect(function () {
        axiosApiInstance
            .get("/api/user/profile", {
            withCredentials: true,
        })
            .then(function (response) {
            setFirstName(response.data.profile.firstName);
            setLastName(response.data.profile.lastName);
            setUsername(response.data.profile.username);
            setEmail(response.data.profile.email);
            setBio(response.data.profile.bio);
            setLocation(response.data.profile.location);
            setAvatar(response.data.profile.avatar);
            setBackground(response.data.profile.background);
            console.log("Get Profile Request:", response.data.profile);
        });
    }, [context.avatarModalSaved, context.backgroundModalSaved]);
    var handleClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileInfo, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    profileInfo = {
                        bio: bio,
                        location: location,
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        email: email,
                    };
                    return [4 /*yield*/, axiosApiInstance.post("/api/user/editprofile", profileInfo)];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        console.log("Profile saved", profileInfo);
                        navigate("/profile/".concat(authContext.userId));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var navigate = useNavigate();
    return (_jsx(Main, { children: _jsxs(Container, { children: [_jsxs(Banner, { children: [_jsx(BackButton, __assign({ onClick: function () { return navigate("/profile/".concat(authContext.userId)); } }, { children: _jsx(Cross, { scaleFactor: 0.55, dropShadow: true, color: theme.mode === "dark" ? "white" : "black" }) })), _jsx(Edit, { children: "Edit" }), _jsx(SaveButton, __assign({ onClick: handleClick }, { children: "Save" }))] }), _jsxs(BackgroundContainer, { children: [_jsx(EditBackgroundButton, { onClick: function () { return context.setShowBackgroundModal(true); }, text: "Edit", type: "button" }), _jsx(BackgroundImage, { src: background ? background : Pic, alt: "Background" }), _jsxs(AvatarImageContainer, { children: [_jsx(UserPic, { image: avatar ? avatar : Pic, customSize: mobileView ? "90px" : tabletView ? "130px" : "150px" }), _jsx(EditAvatarButton, { onClick: function () { return context.setShowAvatarModal(true); }, text: "Edit", type: "button" })] })] }), _jsx(FormContainer, { children: _jsxs(Form, { children: [_jsxs(Label, { children: ["Username", _jsx("input", { onChange: function (e) { return setUsername(e.target.value); }, value: username, type: "text", name: "username" })] }), _jsxs(Label, { children: ["Email", _jsx("input", { onChange: function (e) { return setEmail(e.target.value); }, value: email, type: "email", name: "email" })] }), _jsxs(Label, { children: ["Bio", _jsx("textarea", { onChange: function (e) { return setBio(e.target.value); }, name: "bio", value: bio })] }), _jsxs(Label, { children: ["Location", _jsx("textarea", { onChange: function (e) { return setLocation(e.target.value); }, name: "location", value: location })] })] }) })] }) }));
};
export default EditProfile;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
