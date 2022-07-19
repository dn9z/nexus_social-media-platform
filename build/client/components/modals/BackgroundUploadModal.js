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
import { Context } from "../../context/Context";
import styled from "styled-components";
import Button from "../../buttons/Button";
import axiosApiInstance from "../../util/axiosInstance";
import * as themeConf from "../../styles/theme";
var Background = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n  z-index: 10;\n"], ["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n  z-index: 10;\n"])));
var FormContainer = styled.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  padding: 15px;\n\n  border-radius: 5px;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;\n  z-index: 15;\n\n  @media (max-width: 575px) {\n    width: 80vw;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: fixed;\n  top: 25%;\n  left: 50%;\n  padding: 15px;\n\n  border-radius: 5px;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px grey;\n  z-index: 15;\n\n  @media (max-width: 575px) {\n    width: 80vw;\n  }\n"])));
var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: white;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 1.3rem;\n font-family: Zilla;\ncontent:\"none\";\n color: ", ";\n &::before {\n  content: \"Choose file\";\n  cursor: pointer;\n  font-family: Quicksand;\n  \n  color:black;\n  font-size: 1.5rem;\n  font-weight: bold;\n  }\n  :hover {\n    background-color: ", ";\n   \n}\n@media (max-width: 575px) {\n  width: 100%;\n  display: flex;\n  font-size: clamp(0.8rem, 0.4203rem + 2.1695vw, 1.2rem);\n  &::before {\n    font-size: clamp(1rem, 0.5254rem + 2.7119vw, 1.5rem);\n}}\n"], ["\n  background-color: white;\n  margin-bottom: 10px;\n  padding: 5px;\n  font-size: 1.3rem;\n font-family: Zilla;\ncontent:\"none\";\n color: ", ";\n &::before {\n  content: \"Choose file\";\n  cursor: pointer;\n  font-family: Quicksand;\n  \n  color:black;\n  font-size: 1.5rem;\n  font-weight: bold;\n  }\n  :hover {\n    background-color: ", ";\n   \n}\n@media (max-width: 575px) {\n  width: 100%;\n  display: flex;\n  font-size: clamp(0.8rem, 0.4203rem + 2.1695vw, 1.2rem);\n  &::before {\n    font-size: clamp(1rem, 0.5254rem + 2.7119vw, 1.5rem);\n}}\n"])), themeConf.fontColor, themeConf.profilePicBorder);
var BackgroundUploadModal = function () {
    var context = React.useContext(Context);
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, data, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formData = new FormData(event.currentTarget);
                        data = {
                            background: formData.get("image"),
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axiosApiInstance.post("/api/user/uploadBackgroundImage", formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.status === 200) {
                            console.log("image was uploaded", data);
                            context.setShowBackgroundModal(false);
                            context.setBackgroundModalSaved(function (BackgroundModalSaved) { return !BackgroundModalSaved; });
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
    if (context.showBackgroundModal === true) {
        return (_jsx(Background, __assign({ onClick: function () {
                context.setShowBackgroundModal(false);
            } }, { children: _jsxs(FormContainer, __assign({ onSubmit: handleSubmit, encType: "multipart/form-data", onClick: function (event) {
                    event.stopPropagation();
                } }, { children: [_jsx("label", { children: _jsx(Input, { type: "file", name: "image", accept: "image/*" }) }), _jsx(Button, { text: "Save", type: "submit" })] })) })));
    }
    else {
        return _jsx(_Fragment, {});
    }
};
export default BackgroundUploadModal;
var templateObject_1, templateObject_2, templateObject_3;
