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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components";
import * as themeConf from "./styles/theme";
import { useTheme } from "./context/ThemeManager";
import { Context } from "./context/Context";
import { AuthContext } from "./context/AuthContext";
import { MessageProvider } from "./context/MessageContext";
import SideMenu from "./components/SideMenu/SideMenu";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";
import PostModal from "./components/modals/PostModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import AppProvider from "./context/Context";
import TopMenu from "./components/MobileComponents/TopMenu";
import MessageMain from "./components/Messaging/MessageMain";
import Register from "./components/AuthForms/Register";
import Login from "./components/AuthForms/Login";
import { CountProvider } from "./context/NumberContext";
import FollowSection from "./components/Follow/FollowSection";
import AvatarUploadModal from "./components/modals/AvatarUploadModal";
import BackgroundUploadModal from "./components/modals/BackgroundUploadModal";
import Logout from "./components/Logout/Logout";
import UserSearch from "./components/UserSearch/UserSearch";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import * as Hook from "usehooks-ts";
import StandardHeader from ".//components/Header/StandardHeader";
import Logo from "./icons/Logo";
var Main = styled.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  height: auto;\n  color: ", ";\n  background-color: ", ";\n \n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  height: auto;\n  color: ", ";\n  background-color: ", ";\n \n"])), themeConf.fontColor, themeConf.backgroundColor);
var Left = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: 100vh;\n"], ["\n  width: ", ";\n  height: 100vh;\n"])), function (props) { return props.width; });
var Center = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  \n  \n\n  overflow: auto;\n"], ["\n  width: ", ";\n  \n  \n\n  overflow: auto;\n"])), function (props) { return props.width; });
var Right = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n width: ", ";\n  height: 100vh;\n \n  display: flex;\n  flex-direction: column;\n"], ["\n width: ", ";\n  height: 100vh;\n \n  display: flex;\n  flex-direction: column;\n"])), function (props) { return props.width; });
var Activity = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n \n  height: 50%;\n"], ["\n \n  height: 50%;\n"])));
var c1 = "#7a5dd1";
var c2 = "#00ffd0";
function App() {
    var theme = useTheme();
    var context = React.useContext(Context);
    var match1500 = Hook.useMediaQuery("(max-width: 1500px)");
    var loggedIn = React.useContext(AuthContext).loggedIn;
    var mobileView = Hook.useMediaQuery("(max-width: 575px)");
    var TabletView = Hook.useMediaQuery("(min-width: 576px) and (max-width: 992px)");
    return (_jsxs(AppProvider, { children: [_jsx(GlobalStyle, {}), _jsx(ThemeProvider, __assign({ theme: { mode: theme.mode } }, { children: _jsx(BrowserRouter, { children: _jsxs(Main, { children: [loggedIn && (_jsx(Left, __assign({ width: match1500 ? "0vw" : "20vw" }, { children: _jsx(CountProvider, { children: match1500 ? _jsx(TopMenu, {}) : _jsx(SideMenu, {}) }) }))), _jsxs(Center, __assign({ width: match1500 ? "99vw" : "60vw" }, { children: [loggedIn && (_jsxs(_Fragment, { children: [_jsx(PostModal, { show: context.showPostModal }), _jsx(AvatarUploadModal, { show: context.showAvatarModal }), _jsx(BackgroundUploadModal, { show: context.showBackgroundModal })] })), _jsxs(Routes, { children: [_jsx(Route, { path: "/network/:_id", element: _jsx(ProtectedRoute, __assign({ auth: loggedIn }, { children: _jsx(FollowSection, {}) })) }), _jsx(Route, { path: "/", element: _jsx(ProtectedRoute, __assign({ auth: loggedIn }, { children: _jsx(Feed, {}) })) }), _jsx(Route, { path: "/messages", element: _jsx(MessageProvider, { children: _jsx(ProtectedRoute, __assign({ auth: loggedIn }, { children: _jsx(MessageMain, {}) })) }) }), _jsx(Route, { path: "/editprofile", element: _jsx(ProtectedRoute, __assign({ auth: loggedIn }, { children: _jsx(EditProfile, {}) })) }), _jsx(Route, { path: "/profile/:_id", element: _jsx(ProtectedRoute, __assign({ auth: loggedIn }, { children: _jsx(Profile, {}) })) }), _jsx(Route, { path: "/search", element: _jsx(ProtectedRoute, __assign({ auth: loggedIn }, { children: _jsx(UserSearch, {}) })) }), _jsx(Route, { path: "/logout", element: _jsx(Logout, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) })] })] })), loggedIn && (_jsxs(Right, __assign({ width: match1500 ? "0vw" : "20vw" }, { children: [_jsx("div", __assign({ style: { position: "fixed", top: "70px", right: "-145px" } }, { children: _jsx(StandardHeader, __assign({ headingSize: match1500 ? "0px" : "2.75rem", subheading: "", width: "330px" }, { children: _jsx(Logo, { scaleFactor: match1500 ? 0 : 4, colorProps: { colorOne: c1, colorTwo: c2 } }) })) })), _jsx(Activity, {})] })))] }) }) }))] }));
}
export default App;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
