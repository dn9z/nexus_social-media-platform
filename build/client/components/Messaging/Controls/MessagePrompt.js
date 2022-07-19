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
import styled from "styled-components";
import { Context } from "../../../context/Context";
import { AuthContext } from "../../../context/AuthContext";
import * as themeConf from "../../../styles/theme";
import { useTheme } from "../../../context/ThemeManager";
import Image from "../../../icons/Image";
import Gif from "../../../icons/Gif";
import Send from "../../../icons/Send";
import axiosApiInstance from "../../../util/axiosInstance";
import { useMessageContext } from "../../../context/MessageContext";
var IconContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.25rem;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.25rem;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  &:hover {\n    background-color: ", ";\n  }\n"])), themeConf.menuItemHoverColor);
var Prompt = styled.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])));
var MessageInput = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 1rem;\n  border: 1px solid grey;\n  height: auto;\n  width: 60%;\n  border-radius: 25px;\n  position: relative;\n  overflow: hidden;\n  line-break: word;\n  font-family: Zilla;\n  font-size: 1rem;\n  &:empty::before {\n    content: \"Enter message for ", "\";\n    color: gray;\n  }\n"], ["\n  padding: 1rem;\n  border: 1px solid grey;\n  height: auto;\n  width: 60%;\n  border-radius: 25px;\n  position: relative;\n  overflow: hidden;\n  line-break: word;\n  font-family: Zilla;\n  font-size: 1rem;\n  &:empty::before {\n    content: \"Enter message for ", "\";\n    color: gray;\n  }\n"])), function (props) { return props.username; });
var SubmitButton = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  all: unset;\n"], ["\n  all: unset;\n"])));
var MessagePrompt = function (props) {
    var msg = useMessageContext();
    var context = React.useContext(Context);
    var userId = React.useContext(AuthContext).userId;
    var _a = React.useState(""), message = _a[0], setMessage = _a[1];
    var theme = useTheme();
    var handleInput = function (event) {
        setMessage(event.currentTarget.innerHTML);
    };
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        event.currentTarget.children[2].innerHTML = "";
                        data = {
                            _userFrom: userId,
                            _userTo: props._userTo,
                            _conversation: msg.conversationId,
                            date: new Date(Date.now()),
                            text: message,
                            /* media: "empty", */
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axiosApiInstance.post("/api/messages", data)];
                    case 2:
                        response = _a.sent();
                        if (response.status === 200) {
                            msg.setIsCreated(!msg.isCreated);
                        }
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
    /* const handleClick = (event: React.MouseEvent) => {
      event.preventDefault();
       event.currentTarget.previousElementSibling!.innerHTML = ""
    };
   */
    return (_jsxs(Prompt, __assign({ onSubmit: function (event) { return handleSubmit(event); } }, { children: [_jsx(IconContainer, { children: _jsx(Image, { dropShadow: false, scaleFactor: 0.65, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }) }), _jsx(IconContainer, { children: _jsx(Gif, { dropShadow: false, scaleFactor: 0.65, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }) }), _jsx(MessageInput, { role: "textbox", "data-name": "messageInput", onInput: function (event) { return handleInput(event); }, username: props.username, contentEditable: true }), _jsx(SubmitButton /* onClick={handleClick} */, __assign({ type: "submit" }, { children: _jsx(IconContainer, { children: _jsx(Send, { dropShadow: false, scaleFactor: 0.65, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }) }) }))] })));
};
export default MessagePrompt;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
