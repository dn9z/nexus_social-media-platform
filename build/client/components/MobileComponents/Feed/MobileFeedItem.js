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
import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import PostButton from "../../../buttons/PostButton";
var PostItem = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n  height: 90vh;\n  padding: 0.5rem;\n  margin: 0.8rem;\n  border: 1px solid grey;\n  background-color: ", ";\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"], ["\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n  height: 90vh;\n  padding: 0.5rem;\n  margin: 0.8rem;\n  border: 1px solid grey;\n  background-color: ", ";\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"])), themeConf.backgroundColor);
var PostMetaData = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 100%;\n"])));
var PostUser = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  > p {\n    margin-left: 0.5rem;\n    font-size: clamp(1rem, 0.6203rem + 2.1695vw, 1.4rem);\n    font-family: Quicksand;\n    font-weight: 700;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  > p {\n    margin-left: 0.5rem;\n    font-size: clamp(1rem, 0.6203rem + 2.1695vw, 1.4rem);\n    font-family: Quicksand;\n    font-weight: 700;\n  }\n"])));
var PostUserPicContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 2rem;\n"], ["\n  width: 2rem;\n"])));
var PostDate = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  /* border: 1px solid black; */\n  align-self: center;\n  font-family: Inconsolata;\n  font-size: clamp(1rem, 0.8102rem + 1.0847vw, 1.2rem);\n"], ["\n  /* border: 1px solid black; */\n  align-self: center;\n  font-family: Inconsolata;\n  font-size: clamp(1rem, 0.8102rem + 1.0847vw, 1.2rem);\n"])));
var PostMedia = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  place-self: center;\n  width: 70%;\n"], ["\n  display: flex;\n  justify-content: center;\n  place-self: center;\n  width: 70%;\n"])));
var PostTextContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
var PostTitle = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-family: Quicksand;\n  text-decoration: none;\n  font-size: clamp(1.25rem, 1.0602rem + 1.0847vw, 1.45rem);\n  text-align: left;\n  font-weight: 700;\n  border-bottom: 1px solid ", ";\n"], ["\n  font-family: Quicksand;\n  text-decoration: none;\n  font-size: clamp(1.25rem, 1.0602rem + 1.0847vw, 1.45rem);\n  text-align: left;\n  font-weight: 700;\n  border-bottom: 1px solid ", ";\n"])), themeConf.fontColor);
var PostBody = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: 5px;\n  margin-left: 15px;\n  font-family: Zilla;\n  font-size: clamp(1.15rem, 1.0551rem + 0.5424vw, 1.25rem);\n"], ["\n  margin-top: 5px;\n  margin-left: 15px;\n  font-family: Zilla;\n  font-size: clamp(1.15rem, 1.0551rem + 0.5424vw, 1.25rem);\n"])));
var MobileFeedItem = function (_a) {
    var post = _a.post;
    var context = React.useContext(Context);
    return (_jsx(_Fragment, { children: _jsxs(PostItem, { children: [_jsxs(PostMetaData, { children: [_jsxs(PostUser, { children: [_jsx(PostUserPicContainer, { children: _jsx("img", { style: { width: "100%", borderRadius: "50%" }, src: "https://www.zvr-info.de/wp-content/uploads/2018/02/Platzhalter.png", alt: "" }) }), _jsx("p", { children: "Username/Groupname" })] }), _jsx(PostDate, { children: "1980-10-10" })] }), _jsxs(PostTextContainer, { children: [_jsx(PostTitle, { children: post.title }), _jsx(PostBody, { children: post.body })] }), _jsx(PostMedia, { children: _jsx("img", { style: { width: "100%", marginBottom: "20px" }, src: "https://its-mobility.de/wp-content/uploads/placeholder.png", alt: "" }) }), _jsx("div", __assign({ style: { placeSelf: "flex-end" } }, { children: _jsx(PostButton, { onClick: function () { }, text: "Share" }) }))] }) }));
};
export default MobileFeedItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
