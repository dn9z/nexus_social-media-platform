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
import styled from "styled-components";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import { useMessageContext } from "../../context/MessageContext";
import * as themeConf from "../../styles/theme";
import SearchInput from "../Inputs/SearchInput";
import axiosApiInstance from "../../util/axiosInstance";
import UserPic from "../User/UserPic";
import Pic from "../../img/Portrait_Placeholder.png";
var Background = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n"], ["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;\n  width: 800px;\n  height: 520px;\n  z-index: 5;\n\n  @media (min-width: 575px) and (max-width: 867px) {\n    width: 90vw;\n    height: 60vh;\n    \n  }\n\n  @media (max-width: 575px) {\n    width: 90%;\n    height: 82%;\n    display: flex;\n    flex-direction: column;\n  }\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;\n  width: 800px;\n  height: 520px;\n  z-index: 5;\n\n  @media (min-width: 575px) and (max-width: 867px) {\n    width: 90vw;\n    height: 60vh;\n    \n  }\n\n  @media (max-width: 575px) {\n    width: 90%;\n    height: 82%;\n    display: flex;\n    flex-direction: column;\n  }\n"])), themeConf.backgroundColor);
var Right = styled.form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: auto;\n"])));
var BottomContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 90%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: ", ";\n"], ["\n  width: 90%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: ", ";\n"])), function (props) {
    return props.bottomBorder ? "2px solid silver" : "none";
});
var ListItem = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  height: auto;\n  width: 100%;\n  padding: 1rem 0.5rem;\n  align-items: center;\n  color: ", ";\n  font-family: NotoSans;\n  font-size: 1.25rem;\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    transform: scale(0.95);\n  }\n  & > :nth-child(2) {\n    margin-left: 1.5rem;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  height: auto;\n  width: 100%;\n  padding: 1rem 0.5rem;\n  align-items: center;\n  color: ", ";\n  font-family: NotoSans;\n  font-size: 1.25rem;\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    transform: scale(0.95);\n  }\n  & > :nth-child(2) {\n    margin-left: 1.5rem;\n  }\n"])), themeConf.fontColor, themeConf.menuItemHoverColor);
var NewMessageModal = function (props) {
    var msg = useMessageContext();
    var context = React.useContext(Context);
    var userId = React.useContext(AuthContext).userId;
    var _a = React.useState(""), selectedUser = _a[0], setSelectedUser = _a[1];
    var _b = React.useState(), usersToDisplay = _b[0], setUsersToDisplay = _b[1];
    React.useEffect(function () {
        var getUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axiosApiInstance.get("/api/messages/users")];
                    case 1:
                        response = _a.sent();
                        msg.setUsers(response.data.foundUsers);
                        return [2 /*return*/];
                }
            });
        }); };
        getUsers();
    }, []);
    React.useEffect(function () {
        var getConversations = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axiosApiInstance.get("/api/messages/conversations")];
                    case 1:
                        response = _a.sent();
                        msg.setConversations(response.data.foundConversations);
                        return [2 /*return*/];
                }
            });
        }); };
        getConversations();
    }, []);
    React.useEffect(function () {
        var _a;
        function filterUsers(item) {
            //filter out users that have already been contacted
            return !msg.conversations.some(function (entry) { return entry.participants._userTo === item._id; });
        }
        var newArray = (_a = msg.users) === null || _a === void 0 ? void 0 : _a.filter(filterUsers);
        setUsersToDisplay(newArray);
    }, [msg.users, msg.conversations]);
    var startConversation = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    msg.setRecipientId(event.currentTarget.getAttribute("data-id"));
                    msg.setRecipient(event.currentTarget.getAttribute("data-name"));
                    return [4 /*yield*/, axiosApiInstance
                            .post("/api/messages/conversation", {
                            _userFrom: userId,
                            _userTo: event.currentTarget.getAttribute("data-id"),
                        })
                            .then(function (response) {
                            console.log(response);
                            msg.setConversationId(response.data.createdConversation._id);
                        })
                            .catch(function (err) {
                            context.setShowNewMessageModal(true);
                        })];
                case 1:
                    _a.sent();
                    context.setShowNewMessageModal(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var usersList = function () {
        return usersToDisplay === null || usersToDisplay === void 0 ? void 0 : usersToDisplay.map(function (user, index) {
            if (user.username.includes(selectedUser) && selectedUser.length > 0) {
                return (_jsxs(ListItem, __assign({ "data-id": user._id, "data-name": user.username, onClick: function (event) { return startConversation(event); } }, { children: [_jsx(UserPic, { image: user.avatar ? user.avatar : Pic, customSize: "30px" }), _jsx("div", { children: "".concat(user.username) }, user._id)] }), index));
            }
        });
    };
    if (context.showNewMessageModal === true) {
        return (_jsx(Background, __assign({ onClick: function () {
                context.setShowNewMessageModal(false);
            } }, { children: _jsx(Container, __assign({ onClick: function (event) {
                    event.stopPropagation();
                } }, { children: _jsxs(Right, { children: [_jsx(BottomContainer, __assign({ bottomBorder: true }, { children: _jsx(SearchInput, { onClick: function (event) { event.preventDefault(); }, onChange: function (event) {
                                    setSelectedUser(event.target.value);
                                }, searchValue: selectedUser, placeholder: "Search users" }) })), _jsx(BottomContainer, __assign({ bottomBorder: false }, { children: usersList() }))] }) })) })));
    }
    else {
        return _jsx(_Fragment, {});
    }
};
export default NewMessageModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
