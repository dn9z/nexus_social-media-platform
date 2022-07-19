var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import * as themeConf from "../../../styles/theme";
var UserContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 50px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n"], ["\n  min-height: 50px;\n  height: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n"])));
var ColumnContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var DateBox = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 0.5rem;\n  margin-left: 0.5rem;\n  font-family: Inconsolata;\n  color: ", ";\n"], ["\n  margin-top: 0.5rem;\n  margin-left: 0.5rem;\n  font-family: Inconsolata;\n  color: ", ";\n"])), themeConf.fontColor);
var ChatBubble = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  min-width: 20%;\n  width: auto;\n  height: auto;\n  border: 1px solid transparent;\n  border-radius: 15px 15px 0 15px;\n  background-color: #8b14f9;\n  font-family: Zilla;\n  padding: 0.5rem;\n  color: white;\n  & > p {\n    line-break: word;\n  }\n"], ["\n  min-width: 20%;\n  width: auto;\n  height: auto;\n  border: 1px solid transparent;\n  border-radius: 15px 15px 0 15px;\n  background-color: #8b14f9;\n  font-family: Zilla;\n  padding: 0.5rem;\n  color: white;\n  & > p {\n    line-break: word;\n  }\n"])));
var Username = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nfont-family: NotoSans;\nfont-size: 0.8rem;\nmargin-bottom: 0.5rem;\nletter-spacing: 0.1rem;"], ["\nfont-family: NotoSans;\nfont-size: 0.8rem;\nmargin-bottom: 0.5rem;\nletter-spacing: 0.1rem;"])));
var SentMessage = function (_a) {
    var text = _a.text, date = _a.date, username = _a.username;
    return (_jsx(UserContainer, { children: _jsxs(ColumnContainer, { children: [_jsxs(ChatBubble, { children: [_jsx(Username, { children: username }), _jsx("p", { children: text })] }), _jsx(DateBox, { children: date })] }) }));
};
export default SentMessage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
