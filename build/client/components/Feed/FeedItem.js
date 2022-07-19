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
import * as themeConf from "../../styles/theme";
import Comments from "../Comments/Comments";
import axiosApiInstance from "../../util/axiosInstance";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import Cross from "../../icons/Cross";
import ConfirmModal from "../modals/ConfirmModal";
import { useTheme } from "../../context/ThemeManager";
import UserPic from "../User/UserPic";
var PostItem = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: calc(100% - 1.6rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n  padding: 0.5rem;\n  margin: 0.8rem;\n  border: 1px solid grey;\n  background-color: ", ";\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"], ["\n  width: calc(100% - 1.6rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n  padding: 0.5rem;\n  margin: 0.8rem;\n  border: 1px solid grey;\n  background-color: ", ";\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n"])), themeConf.backgroundColor);
var PostMetaData = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var MetaDataRight = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var PostUser = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  > p {\n    margin-left: 1rem;\n    font-size: 1.4rem;\n    font-family: Quicksand;\n    font-weight: 700;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  > p {\n    margin-left: 1rem;\n    font-size: 1.4rem;\n    font-family: Quicksand;\n    font-weight: 700;\n  }\n"])));
var PostDate = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  /* border: 1px solid black; */\n  align-self: center;\n  font-family: Inconsolata;\n"], ["\n  /* border: 1px solid black; */\n  align-self: center;\n  font-family: Inconsolata;\n"])));
var PostMedia = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  place-self: center;\n  max-width: 70%;\n"], ["\n  display: flex;\n  justify-content: center;\n  place-self: center;\n  max-width: 70%;\n"])));
var PostTextContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 1rem;\n  \n"], ["\n  margin: 1rem;\n  \n"])));
var PostTitle = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin: 1rem 0 1rem 15px;\n  font-family: Quicksand;\n  text-decoration: none;\n  font-size: 1.45rem;\n  text-align: left;\n  font-weight: 700;\n  border-bottom: 1px solid ", ";\n"], ["\n  margin: 1rem 0 1rem 15px;\n  font-family: Quicksand;\n  text-decoration: none;\n  font-size: 1.45rem;\n  text-align: left;\n  font-weight: 700;\n  border-bottom: 1px solid ", ";\n"])), themeConf.fontColor);
var PostBody = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin: 1rem 0 1rem 15px;\n  font-family: Zilla;\n  font-size: 1.25rem;\n"], ["\n  margin: 1rem 0 1rem 15px;\n  font-family: Zilla;\n  font-size: 1.25rem;\n"])));
var FeedItem = function (_a) {
    var post = _a.post;
    var context = React.useContext(Context);
    var authContext = React.useContext(AuthContext);
    var _b = React.useState(false), showConfirmModal = _b[0], setShowConfirmModal = _b[1];
    var _c = React.useState(""), avatar = _c[0], setAvatar = _c[1];
    var _d = React.useState(""), author = _d[0], setAuthor = _d[1];
    var navigate = useNavigate();
    var theme = useTheme();
    function handleDeletePost(_idToDelete) {
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axiosApiInstance.delete("/api/post/delete/".concat(_idToDelete))];
                    case 1:
                        res = _a.sent();
                        context.setPageNumber(1);
                        context.setNeedRefresh(!context.needRefresh);
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
        function getUserById() {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axiosApiInstance.get("/api/user/getuserbyid/".concat(post._user))];
                        case 1:
                            res = _a.sent();
                            setAvatar(res.data.avatar);
                            setAuthor(res.data.username);
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
        getUserById();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(ConfirmModal, { showConfirmModal: showConfirmModal, setShowConfirmModal: setShowConfirmModal, confirmFn: handleDeletePost, idToDelete: post._id }), _jsxs(PostItem, { children: [_jsxs(PostMetaData, { children: [_jsxs(PostUser, __assign({ onClick: function () {
                                    navigate("/profile/".concat(post._user));
                                } }, { children: [_jsx(UserPic, { customSize: "50px", image: avatar }), _jsx("p", { children: author })] })), _jsxs(MetaDataRight, { children: [_jsx(PostDate, { children: format(parseISO(post.date), "MMM dd, yyyy") }), authContext.userId === post._user && (_jsx("div", __assign({ onClick: function () {
                                            setShowConfirmModal(true);
                                        } }, { children: _jsx(Cross, { dropShadow: true, scaleFactor: 0.5, color: theme.mode === "dark" ? "white" : "black" }) })))] })] }), _jsxs(PostTextContainer, { children: [_jsx(PostTitle, { children: post.title }), _jsx(PostBody, { children: post.body })] }), _jsx(PostMedia, { children: post.media && (_jsx("img", { src: "http://localhost:3000/".concat(post.media), alt: "" })) }), _jsx(Comments, { post: post })] })] }));
};
export default FeedItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
