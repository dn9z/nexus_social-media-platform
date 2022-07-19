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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import { AuthContext } from "../../context/AuthContext";
import { useMessageContext, } from "../../context/MessageContext";
import axiosApiInstance from "../../util/axiosInstance";
import Mail from "../../icons/Mail";
var Button = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nall: unset;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 55px;\nheight: 55px;\nborder: 1px solid ", ";\nborder-radius: 50%;\ncursor: pointer;\n&:hover {\n  background-color: ", ";\n}"], ["\nall: unset;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 55px;\nheight: 55px;\nborder: 1px solid ", ";\nborder-radius: 50%;\ncursor: pointer;\n&:hover {\n  background-color: ", ";\n}"])), themeConf.backgroundColor, themeConf.menuItemHoverColor);
var MessageBridge = function (props) {
    var userId = React.useContext(AuthContext).userId;
    var id = props.id;
    var _a = useMessageContext(), setConversations = _a.setConversations, conversations = _a.conversations, setConversationId = _a.setConversationId;
    var navigate = useNavigate();
    useEffect(function () {
        var getConversations = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axiosApiInstance.get("/api/messages/myconversations")];
                    case 1:
                        response = _a.sent();
                        setConversations(response.data.foundConversations);
                        return [2 /*return*/];
                }
            });
        }); };
        getConversations();
    }, []);
    /*
      const filterConversations = conversations.filter(
        (conversation) => conversation.participants._userTo === id
      ); */
    /* console.log(id); */
    var startNewConversation = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axiosApiInstance
                        .post("/api/messages/conversation", {
                        _userFrom: userId,
                        _userTo: id,
                    })
                        .then(function (response) {
                        setConversationId(response.data._id);
                        console.log(response);
                    })
                        .catch(function (err) {
                        console.log(err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleClick = function () {
        if (!conversations.some(function (conversation) { return conversation.participants._userTo === id; })) {
            startNewConversation();
            navigate("/messages");
        }
        else {
            alert("Conversation already exists. Click OK to get to Messages");
            navigate("/messages");
        }
    };
    return (_jsx(_Fragment, { children: _jsx(Button, __assign({ type: "button", onClick: function () {
                handleClick();
            } }, { children: _jsx(Mail, { dropShadow: true, scaleFactor: 0.65, color: "white" }) })) }));
};
export default MessageBridge;
var templateObject_1;
