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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import NewMessage from "../../../icons/NewMessage";
import SearchInput from "../../Inputs/SearchInput";
var SearchContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20%;\n  width: 100%;\n  border-bottom: 1px solid grey;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  height: 20%;\n  width: 100%;\n  border-bottom: 1px solid grey;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
var IconContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.25rem;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.25rem;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  &:hover {\n    background-color: ", ";\n  }\n"])), themeConf.menuItemHoverColor);
var NewMessageContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  & > p {\n    font-family: Zilla;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n  }\n"], ["\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  & > p {\n    font-family: Zilla;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n  }\n"])));
var Button = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  all: unset;\n"], ["\n  all: unset;\n"])));
var NewMessage_Search = function () {
    var context = React.useContext(Context);
    var theme = useTheme();
    return (_jsxs(SearchContainer, { children: [_jsxs(NewMessageContainer, { children: [_jsx("p", { children: "Messages" }), " ", _jsx(IconContainer, { children: _jsx(Button, __assign({ onClick: function () { return context.setShowNewMessageModal(true); } }, { children: _jsx(NewMessage, { dropShadow: false, scaleFactor: 0.65, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }) })) })] }), _jsx(SearchInput, { onClick: function () { }, searchValue: "Search messages", onChange: function () { }, placeholder: "Search messages" })] }));
};
export default NewMessage_Search;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
