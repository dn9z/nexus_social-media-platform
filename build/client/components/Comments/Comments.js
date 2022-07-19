var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import React, { useState } from "react";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import CommentButton from "../../buttons/CommentButton";
import { useTheme } from "../../context/ThemeManager";
import CommentsList from "./CommentsList";
import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import UserPic from "../User/UserPic";
var FormContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 35px;\n  height: 100%;\n  border-top: 1px solid ", ";\n  padding-top: 10px;\n  display: flex;\n  align-items: center;\n"], ["\n  margin-top: 35px;\n  height: 100%;\n  border-top: 1px solid ", ";\n  padding-top: 10px;\n  display: flex;\n  align-items: center;\n"])), themeConf.fontColor);
var PicContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 3.5rem;\n  margin: 5px;\n"], ["\n  display: flex;\n  width: 3.5rem;\n  margin: 5px;\n"])));
var CommentContainer = styled.form(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem;\n  align-items: center;\n  border-radius: 5px;\n  width: 100%;\n  height: 60px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background-color: rgba(211, 211, 211, 0.35);\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem;\n  align-items: center;\n  border-radius: 5px;\n  width: 100%;\n  height: 60px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background-color: rgba(211, 211, 211, 0.35);\n"])));
var Textarea = styled.textarea(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: auto;\n  padding: 0.5rem;\n  color: ", ";\n  font-family: Zilla;\n  font-size: 1.4rem;\n  resize: none;\n  background-color: transparent;\n  border: none;\n  outline: none;\n"], ["\n  width: 100%;\n  height: auto;\n  padding: 0.5rem;\n  color: ", ";\n  font-family: Zilla;\n  font-size: 1.4rem;\n  resize: none;\n  background-color: transparent;\n  border: none;\n  outline: none;\n"])), themeConf.fontColor);
var EmojiContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 100%;\n  margin: auto;\n\n  align-items: center;\n"], ["\n  height: 100%;\n  margin: auto;\n\n  align-items: center;\n"])));
var Comments = function (_a) {
    var post = _a.post;
    var theme = useTheme();
    var context = React.useContext(Context);
    var userId = React.useContext(AuthContext).userId;
    var _b = useState(""), commentValue = _b[0], setCommentValue = _b[1];
    var _c = useState(""), commentBodyInput = _c[0], setCommentBodyInput = _c[1];
    var _d = useState(""), avatar = _d[0], setAvatar = _d[1];
    var _e = useState(false), needRefresh = _e[0], setNeedRefresh = _e[1];
    React.useEffect(function () {
        function getUserById() {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axiosApiInstance.get("/api/user/getuserbyid/".concat(userId))];
                        case 1:
                            res = _a.sent();
                            setAvatar(res.data.avatar);
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
        getUserById();
    }, []);
    var addComment = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    data = {
                        _post: post._id,
                        date: new Date(Date.now()),
                        body: commentBodyInput,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axiosApiInstance.post("/api/comment/create", data)];
                case 2:
                    response = _a.sent();
                    if (response.status === 200) {
                        console.log("comment was created");
                        context.setNeedRefresh(!context.needRefresh);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(_Fragment, { children: [_jsxs(FormContainer, { children: [_jsx(PicContainer, { children: _jsx(UserPic, { image: avatar, customSize: "40px" }) }), _jsx(CommentContainer, { children: _jsx(Textarea, { onChange: function (e) {
                                setCommentBodyInput(e.target.value);
                            }, placeholder: "Comment..." }) }), _jsx(CommentButton, { text: "Reply", type: "submit", onClick: addComment })] }), _jsx(CommentsList, { post: post })] }));
};
export default Comments;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
