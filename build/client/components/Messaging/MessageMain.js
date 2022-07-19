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
import { useMessageContext } from "../../context/MessageContext";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import SentMessage from "./MessageItems/SentMessage";
import ReceivedMessage from "./MessageItems/ReceivedMessage";
import MessagePrompt from "./Controls/MessagePrompt";
import NewMessageSearch from "./Controls/NewMessageSearch";
import NewMessageModal from "../modals/NewMessageModal";
import axiosApiInstance from "../../util/axiosInstance";
import { AuthContext } from "../../context/AuthContext";
import { useInterval } from "usehooks-ts";
import UserPic from "../User/UserPic";
import Pic from "../../img/Portrait_Placeholder.png";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: calc(60vw - 2.6rem);\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 97vh;\n\n  margin: 0.8rem;\n  border: 1px solid grey;\n  background-color: ", ";\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"], ["\n  width: calc(60vw - 2.6rem);\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 97vh;\n\n  margin: 0.8rem;\n  border: 1px solid grey;\n  background-color: ", ";\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"])), themeConf.backgroundColor);
var ListContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 40%;\n  height: 100%;\n  border-right: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: 40%;\n  height: 100%;\n  border-right: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n"])));
var MessageContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0.5rem;\n  width: 60%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  transition: all 0.5s ease-out;\n  &:hover {\n    transition: all 0.5s ease-out;\n    overflow-y: scroll;\n  }\n"], ["\n  padding: 0.5rem;\n  width: 60%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  transition: all 0.5s ease-out;\n  &:hover {\n    transition: all 0.5s ease-out;\n    overflow-y: scroll;\n  }\n"])));
var ListItemContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  padding: 0.5rem;\n  color: ", ";\n  font-family: NotoSans;\n  font-size: 1.25rem;\n  &:hover {\n    background-color: ", ";\n  }\n  & > p {\n    margin-left: 0.5rem;\n    font-size: 0.9rem;\n\n    letter-spacing: 0.1rem;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  padding: 0.5rem;\n  color: ", ";\n  font-family: NotoSans;\n  font-size: 1.25rem;\n  &:hover {\n    background-color: ", ";\n  }\n  & > p {\n    margin-left: 0.5rem;\n    font-size: 0.9rem;\n\n    letter-spacing: 0.1rem;\n  }\n"])), themeConf.fontColor, themeConf.menuItemHoverColor);
/** */
var MessageMain = function () {
    var _a = useMessageContext(), conversationId = _a.conversationId, setConversationId = _a.setConversationId, isCreated = _a.isCreated, recipient = _a.recipient, setRecipient = _a.setRecipient, recipientId = _a.recipientId, setRecipientId = _a.setRecipientId, users = _a.users, setUsers = _a.setUsers;
    var userId = React.useContext(AuthContext).userId;
    var context = React.useContext(Context);
    var _b = React.useState(), conversationToDisplay = _b[0], setConversationToDisplay = _b[1];
    var _c = React.useState(), list = _c[0], setList = _c[1];
    var POLL_RATE = 500;
    /**
     * useInterval is a hook that runs a function every x seconds
     * @param callback - function to run
     * @param POLL_RATE - how often to run the function
     */
    useInterval(function () {
        var getConversations = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axiosApiInstance.get("/api/messages/myconversations")];
                    case 1:
                        response = _a.sent();
                        setList(response.data.foundConversations);
                        return [2 /*return*/];
                }
            });
        }); };
        getConversations();
    }, POLL_RATE);
    /**
     * useEffect to load conversations when new message isCreated, making sure to render on state change
     * @param isCreated - boolean to check if message isCreated
     * @param conversationId - id of conversation to load
     */
    React.useEffect(function () {
        var getConversations = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(isCreated === false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, axiosApiInstance.get("http://localhost:3000/api/messages/conversation/".concat(conversationId))];
                    case 1:
                        response = _a.sent();
                        setConversationToDisplay(response.data.foundMessages);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, axiosApiInstance.get("http://localhost:3000/api/messages/conversation/".concat(conversationId))];
                    case 3:
                        response = _a.sent();
                        setConversationToDisplay(response.data.foundMessages);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        getConversations();
    }, [conversationId, isCreated]);
    React.useEffect(function () {
        var getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axiosApiInstance.get("http://localhost:3000/api/messages/users")];
                    case 1:
                        response = _a.sent();
                        setUsers(response.data.foundUsers);
                        return [2 /*return*/];
                }
            });
        }); };
        getUsers();
    }, []);
    /**
     * function to find the recipients username in users[] with id (string)
     * @param id : string
     * @returns
     */
    var getUsername = function (id) {
        return users === null || users === void 0 ? void 0 : users.find(function (user) { return user._id === id; }).username;
    };
    /**
     * function to find the recipients avatar in users[] with id (string)
     * @param id : string
     * @returns
     */
    var getAvatar = function (id) {
        return users === null || users === void 0 ? void 0 : users.find(function (user) { return user._id === id; }).avatar;
    };
    var conversationListItem = function () {
        if (list) {
            return list.map(function (conversation) {
                return (_jsx("div", __assign({ onClick: function () {
                        setConversationId(conversation._id);
                        setRecipientId(conversation.participants._userTo);
                        setRecipient(getUsername(conversation.participants._userTo));
                    } }, { children: _jsxs(ListItemContainer, { children: [_jsx(UserPic, { customSize: "40px", image: getAvatar(conversation.participants._userTo)
                                    ? getAvatar(conversation.participants._userTo)
                                    : Pic }), _jsx("p", { children: getUsername(conversation.participants._userTo) })] }) }), conversation._id));
            });
        }
    };
    var messageListItemByDate = function () {
        return conversationToDisplay.sort(function (a, b) {
            return Date.parse(a.date) - Date.parse(b.date);
        });
    };
    var messageList = function () {
        if (conversationToDisplay) {
            return messageListItemByDate().map(function (message) {
                if (message.participants._userFrom === userId) {
                    return (_jsx(SentMessage, { text: message.text, username: getUsername(message.participants._userFrom), date: message.date, avatar: "" }, message._id));
                }
                else {
                    return (_jsx(ReceivedMessage, { text: message.text, username: getUsername(message.participants._userFrom), date: message.date, avatar: getAvatar(message.participants._userFrom)
                            ? getAvatar(message.participants._userFrom)
                            : Pic }, message._id));
                }
            });
        }
    };
    return (_jsxs(Container, { children: [_jsx(NewMessageModal, { show: context.showNewMessageModal }), _jsxs(ListContainer, { children: [_jsx(NewMessageSearch, {}), conversationListItem()] }), _jsxs(MessageContainer, { children: [messageList(), _jsx(MessagePrompt, { _userTo: recipientId, username: recipient })] })] }));
};
export default MessageMain;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
