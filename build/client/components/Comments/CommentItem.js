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
import React from "react";
import axiosApiInstance from "../../util/axiosInstance";
import { format, parseISO } from "date-fns";
import * as themeConf from "../../styles/theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Context } from "../../context/Context";
import { useTheme } from "../../context/ThemeManager";
import Cross from "../../icons/Cross";
import ConfirmModal from "../modals/ConfirmModal";
var CommentItemContainer = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  /* width: 100%; */\n  height: auto; \n  border-bottom: 1px solid grey;\n  border-radius: 5px;\n  background-color: rgba(211, 211, 211, 0.05);\n  margin: 1rem 0.5rem;\n  padding: 0.6rem;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  /* width: 100%; */\n  height: auto; \n  border-bottom: 1px solid grey;\n  border-radius: 5px;\n  background-color: rgba(211, 211, 211, 0.05);\n  margin: 1rem 0.5rem;\n  padding: 0.6rem;\n"])));
var CommentItemMetaData = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  height: 1rem;\n   margin-bottom: 1rem; \n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  height: 1rem;\n   margin-bottom: 1rem; \n"])));
var CommentMetaDataRight = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  font-weight: 300;\n"], ["\n  display: flex;\n  font-weight: 300;\n"])));
var DeleteContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  top: -0.93rem;\n"], ["\n  position: relative;\n  top: -0.93rem;\n"])));
var CommentItemUser = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var CommentItemBody = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var DateDiv = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\nfont-family: Inconsolata;\n  color: ", ";"], ["\nfont-family: Inconsolata;\n  color: ", ";"])), themeConf.fontColor);
var UserNameWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-family: Quicksand;\n  margin-left: 0.5rem;\n  "], ["\n  font-family: Quicksand;\n  margin-left: 0.5rem;\n  "])));
var CommentBodyWrapper = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\nfont-family: NotoSans;"], ["\nfont-family: NotoSans;"])));
var CommentItem = function (_a) {
    var comment = _a.comment;
    var navigate = useNavigate();
    var _b = React.useState(""), username = _b[0], setUsername = _b[1];
    var authContext = React.useContext(AuthContext);
    var context = React.useContext(Context);
    var theme = useTheme();
    var _c = React.useState(false), showConfirmModal = _c[0], setShowConfirmModal = _c[1];
    function handleDeleteComment(_idToDelete) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.delete("/api/comment/delete/".concat(_idToDelete))];
                    case 1:
                        res = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    React.useEffect(function () {
        function getUsername() {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axiosApiInstance.get("/api/user/getuserbyid/".concat(comment._user))];
                        case 1:
                            res = _a.sent();
                            setUsername(res.data.username);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.log(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        comment && getUsername();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(ConfirmModal, { showConfirmModal: showConfirmModal, setShowConfirmModal: setShowConfirmModal, confirmFn: handleDeleteComment, idToDelete: comment._id }), username ? (_jsxs(CommentItemContainer, { children: [_jsxs(CommentItemMetaData, { children: [_jsx(CommentItemUser, __assign({ onClick: function () {
                                    navigate("/profile/".concat(comment._user));
                                } }, { children: _jsx(UserNameWrapper, { children: username }) })), _jsxs(CommentMetaDataRight, { children: [_jsx(DateDiv, { children: format(parseISO(comment.date), "MMM dd, yyyy") }), authContext.userId === comment._user && (_jsx(DeleteContainer, __assign({ onClick: function () {
                                            setShowConfirmModal(true);
                                        } }, { children: _jsx(Cross, { dropShadow: true, scaleFactor: 0.45, color: theme.mode === "dark" ? "white" : "black" }) })))] })] }), _jsx(CommentItemBody, { children: _jsx(CommentBodyWrapper, { children: comment.body }) })] })) : null] }));
};
export default CommentItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
