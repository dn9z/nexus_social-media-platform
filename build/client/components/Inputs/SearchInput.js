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
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import Search from "../../icons/Search";
var IconContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.25rem;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.25rem;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  &:hover {\n    background-color: ", ";\n  }\n"])), themeConf.menuItemHoverColor);
var Prompt = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var SearchInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  all: unset;\n  width: 50%;\n  padding: 1rem;\n  border: 1px solid grey;\n  resize: none;\n\n  border-radius: 25px;\n\n  overflow: hidden;\n\n  font-family: Zilla;\n  font-size: 1rem;\n"], ["\n  all: unset;\n  width: 50%;\n  padding: 1rem;\n  border: 1px solid grey;\n  resize: none;\n\n  border-radius: 25px;\n\n  overflow: hidden;\n\n  font-family: Zilla;\n  font-size: 1rem;\n"])));
var Button = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  all: unset;\n"], ["\n  all: unset;\n"])));
var NewMessage_Search = function (props) {
    var context = React.useContext(Context);
    var theme = useTheme();
    return (_jsxs(Prompt, { children: [_jsx(SearchInput, { onChange: props.onChange, value: props.searchValue, placeholder: props.placeholder }), _jsx(IconContainer, { children: _jsx(Button, __assign({ onClick: props.onClick }, { children: _jsx(Search, { dropShadow: false, scaleFactor: 0.65, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }) })) })] }));
};
export default NewMessage_Search;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
