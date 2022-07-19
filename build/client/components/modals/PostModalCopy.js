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
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import World from "../../icons/World";
import Image from "../../icons/Image";
import Gif from "../../icons/Gif";
import Emoji from "../../icons/Emoji";
import Button from "../../buttons/Button";
import axiosApiInstance from "../../util/axiosInstance";
var Background = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n"], ["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;\n  width: 800px;\n  height: 490px;\n  z-index: 5;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;\n  width: 800px;\n  height: 490px;\n  z-index: 5;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])), themeConf.backgroundColor);
var Left = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 200px;\n  height: 450px;\n"], ["\n  width: 200px;\n  height: 450px;\n"])));
var Right = styled.form(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 600px;\n  height: 450px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 600px;\n  height: 450px;\n"])));
var Title = styled.textarea(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  all: unset;\n  width: 600px;\n  height: 50px;\n  font-weight: bold;\n  margin-top: 20px;\n  font-family: Zilla;\n  font-size: 1.5rem;\n"], ["\n  all: unset;\n  width: 600px;\n  height: 50px;\n  font-weight: bold;\n  margin-top: 20px;\n  font-family: Zilla;\n  font-size: 1.5rem;\n"])));
var Textarea = styled.textarea(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  all: unset;\n  width: 600px;\n  height: 200px;\n  font-family: Zilla;\n  font-size: 1.5rem;\n"], ["\n  all: unset;\n  width: 600px;\n  height: 200px;\n  font-family: Zilla;\n  font-size: 1.5rem;\n"])));
var PicContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 4rem;\n  padding-top: 1rem;\n  padding-left: 1rem;\n"], ["\n  width: 4rem;\n  padding-top: 1rem;\n  padding-left: 1rem;\n"])));
var BottomContainer = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 90%;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: ", ";\n"], ["\n  width: 90%;\n  height: 60px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: ", ";\n"])), function (props) { return (props.bottomBorder ? "2px solid silver" : "none"); });
var PostModal = function (props) {
    var context = React.useContext(Context);
    var theme = useTheme();
    var _a = React.useState(""), imagePath = _a[0], setImagePath = _a[1];
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, data, axiosOptions, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formData = new FormData(event.currentTarget);
                        data = {
                            date: new Date(Date.now()),
                            title: formData.get("title"),
                            body: formData.get("body"),
                            media: formData.get("image") ? formData.get("image") : "",
                        };
                        axiosOptions = {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axiosApiInstance.post("http://localhost:3000/api/post/create", data, axiosOptions)];
                    case 2:
                        response = _a.sent();
                        if (response.status === 200) {
                            console.log("post was created");
                            context.setShowPostModal(false);
                            context.setNeedRefresh(true);
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
    if (context.showPostModal === true) {
        return (_jsx(Background, __assign({ onClick: function () {
                context.setShowPostModal(false);
            } }, { children: _jsxs(Container, __assign({ onClick: function (event) {
                    event.stopPropagation();
                } }, { children: [_jsx(Left, { children: _jsx(PicContainer, { children: _jsx("img", { style: { width: "100%", borderRadius: "50%" }, src: "https://www.zvr-info.de/wp-content/uploads/2018/02/Platzhalter.png", alt: "" }) }) }), _jsxs(Right, __assign({ onSubmit: handleSubmit, encType: "multipart/form-data" }, { children: [_jsx(Title, { name: "title", placeholder: "Title" }), _jsx(Textarea, { name: "body", placeholder: "...Body" }), imagePath ? (_jsx("img", { style: { width: "20%", marginBottom: "20px" }, src: "/".concat(imagePath), alt: "" })) : (_jsx("img", { style: { width: "20%", marginBottom: "20px" }, src: "https://its-mobility.de/wp-content/uploads/placeholder.png", alt: "" })), _jsx(BottomContainer, __assign({ bottomBorder: true }, { children: _jsx(World, { dropShadow: false, scaleFactor: 0.55, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }) })), _jsxs(BottomContainer, __assign({ bottomBorder: false }, { children: [_jsxs("div", { children: [_jsxs("label", { children: [_jsx(Image, { dropShadow: false, scaleFactor: 0.55, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }), _jsx("input", { style: { display: "" }, type: "file", name: "image", accept: "image/*" })] }), _jsx(Gif, { dropShadow: false, scaleFactor: 0.55, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" }), _jsx(Emoji, { dropShadow: false, scaleFactor: 0.55, color: theme.mode === "light" ? "#8b14f9" : "#f1dcff" })] }), _jsx(Button, { text: "Post", type: "submit" })] }))] }))] })) })));
    }
    else {
        return _jsx(_Fragment, {});
    }
};
export default PostModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
