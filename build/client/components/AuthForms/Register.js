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
import * as HookForm from "react-hook-form";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import Button from "../../buttons/Button";
import Info from "../../icons/Info";
import Logo from "../../icons/Logo";
import Visbility from "../../buttons/Visbility";
import StandardHeader from "../../components/Header/StandardHeader";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
var FormContainer = styled.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 650px;\n  width: 545px;\n  margin: 5rem auto;\n  padding: 1rem;\n  position: relative;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n  background-color: ", ";\n\n  @media (max-width: 575px) {\n    align-items: center;\n    margin: 0;\n    height: auto;\n    width: 100vw;\n    padding-top: 3rem;\n    border: none;\n    box-shadow: none;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 650px;\n  width: 545px;\n  margin: 5rem auto;\n  padding: 1rem;\n  position: relative;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n  background-color: ", ";\n\n  @media (max-width: 575px) {\n    align-items: center;\n    margin: 0;\n    height: auto;\n    width: 100vw;\n    padding-top: 3rem;\n    border: none;\n    box-shadow: none;\n  }\n"])), themeConf.backgroundColor);
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Header = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  margin: 0 1rem;\n  width: 500px;\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  & > p {\n    font-family: Inconsolata;\n    font-size: 1.5rem;\n    /* padding-left: 0.5rem; */\n  }\n  & > h1 {\n    font-size: 3.75rem;\n    font-weight: 500;\n    font-family: Quicksand;\n    letter-spacing: 1rem;\n    padding-right: 2rem;\n  }\n  & > div {\n    & > svg {\n      margin-bottom: 50px;\n    }\n  }\n"], ["\n  color: ", ";\n  margin: 0 1rem;\n  width: 500px;\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  & > p {\n    font-family: Inconsolata;\n    font-size: 1.5rem;\n    /* padding-left: 0.5rem; */\n  }\n  & > h1 {\n    font-size: 3.75rem;\n    font-weight: 500;\n    font-family: Quicksand;\n    letter-spacing: 1rem;\n    padding-right: 2rem;\n  }\n  & > div {\n    & > svg {\n      margin-bottom: 50px;\n    }\n  }\n"])), themeConf.fontColor);
var Subheading = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  position: absolute;\n  right: 0;\n  top: 34%;\n  width: 240px;\n  margin: 1rem;\n  font-family: Inconsolata;\n  font-size: 2rem;\n  text-align: right;\n  font-style: normal;\n  & > div {\n    font-family: Quicksand;\n    font-style: normal;\n    font-size: 2.5rem;\n    font-weight: 500;\n    margin-right: 2rem;\n    height: 30px;\n    letter-spacing: 0.75rem;\n    transform: scale(1.3);\n  }\n\n  @media (max-width: 575px) {\n    display: flex;\n    position: relative;\n    left: -15px;\n    right: 0;\n    margin: 0;\n    top: 0;\n    font-size: clamp(0.8rem, 0.0407rem + 4.339vw, 1.6rem);\n    width: 80vw;\n\n    & > div {\n      width: 130px;\n      margin: 0;\n      margin-top: 0.2rem;\n      margin-left: 0.8rem;\n      margin-right: 0.8rem;\n      padding-left: 0.8rem;\n      font-size: clamp(0.8rem, 0.0407rem + 4.339vw, 1.6rem);\n      height: 1rem;\n      letter-spacing: 0.4rem;\n      \n    }\n  }\n"], ["\n  color: ", ";\n  position: absolute;\n  right: 0;\n  top: 34%;\n  width: 240px;\n  margin: 1rem;\n  font-family: Inconsolata;\n  font-size: 2rem;\n  text-align: right;\n  font-style: normal;\n  & > div {\n    font-family: Quicksand;\n    font-style: normal;\n    font-size: 2.5rem;\n    font-weight: 500;\n    margin-right: 2rem;\n    height: 30px;\n    letter-spacing: 0.75rem;\n    transform: scale(1.3);\n  }\n\n  @media (max-width: 575px) {\n    display: flex;\n    position: relative;\n    left: -15px;\n    right: 0;\n    margin: 0;\n    top: 0;\n    font-size: clamp(0.8rem, 0.0407rem + 4.339vw, 1.6rem);\n    width: 80vw;\n\n    & > div {\n      width: 130px;\n      margin: 0;\n      margin-top: 0.2rem;\n      margin-left: 0.8rem;\n      margin-right: 0.8rem;\n      padding-left: 0.8rem;\n      font-size: clamp(0.8rem, 0.0407rem + 4.339vw, 1.6rem);\n      height: 1rem;\n      letter-spacing: 0.4rem;\n      \n    }\n  }\n"])), themeConf.fontColor);
var Field = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var Label = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: 30px;\n  width: 200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: Quicksand;\n"], ["\n  height: 30px;\n  width: 200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: Quicksand;\n"])));
var Input = styled.input(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", ";\n  height: 35px;\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: ", ";\n  font-family: Quicksand;\n  font-size: 1rem;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  width: ", ";\n  height: 35px;\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: ", ";\n  font-family: Quicksand;\n  font-size: 1rem;\n  border-radius: 5px;\n  padding: 5px;\n"])), function (props) { return (props.passwordField ? "180px" : "225px"); }, themeConf.fontColor, themeConf.fontColor, themeConf.backgroundColor);
var Icon = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var Footer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 1rem 0.25rem;\n  > p {\n    font-family: Inconsolata;\n    font-size: 1rem;\n    font-weight: 500;\n    padding-right: 1rem;\n    color: ", ";\n  }\n  > a {\n    font-family: Quicksand;\n    font-size: 1.5rem;\n    font-weight: 700;\n    border-radius: 10%;\n    color: ", ";\n    text-decoration: none;\n    &:hover {\n      background-color: ", ";\n    }\n  }\n    @media (max-width: 575px) {\n      position: relative;\n    }\n"], ["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 1rem 0.25rem;\n  > p {\n    font-family: Inconsolata;\n    font-size: 1rem;\n    font-weight: 500;\n    padding-right: 1rem;\n    color: ", ";\n  }\n  > a {\n    font-family: Quicksand;\n    font-size: 1.5rem;\n    font-weight: 700;\n    border-radius: 10%;\n    color: ", ";\n    text-decoration: none;\n    &:hover {\n      background-color: ", ";\n    }\n  }\n    @media (max-width: 575px) {\n      position: relative;\n    }\n"])), themeConf.fontColor, themeConf.fontColor, themeConf.menuItemHoverColor);
var c1 = "#7a5dd1";
var c2 = "#00ffd0";
var Register = function () {
    var navigate = useNavigate();
    var small = useMediaQuery("(max-width: 359px)");
    var medium = useMediaQuery("(max-width: 575px)");
    var context = React.useContext(Context);
    // const [json, setJson] = React.useState<string>();
    var _a = HookForm.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var mode = useTheme().mode;
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // setJson(JSON.stringify(data));
                    console.log(data);
                    if (!(data.password === data.rePassword)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post("/api/user/register", data)];
                case 2:
                    response = _a.sent();
                    if (response.status === 200) {
                        //everything went well!
                        console.log("user was created");
                        navigate("/login");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    alert("Password does not match!");
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(FormContainer, __assign({ onSubmit: handleSubmit(onSubmit) }, { children: [_jsx(StandardHeader, __assign({ headingSize: small ? "1.4rem" : "1.75rem", subheading: medium ? "" : "welcome to", width: "230px" }, { children: _jsx(Logo, { scaleFactor: small ? 2 : 3, colorProps: { colorOne: c1, colorTwo: c2 } }) })), _jsxs(Subheading, { children: ["The social board with its ", _jsx("div", { children: "users" }), _jsx("br", {}), "in focus"] }), _jsxs(Container, { children: [_jsx(Label, { children: _jsx("label", { children: "First name" }) }), _jsx(Field, { children: _jsx(Input, __assign({ passwordField: false }, register("firstName", { required: true }))) }), _jsx(Label, { children: _jsx("label", { children: "Last name" }) }), _jsx(Field, { children: _jsx(Input, __assign({ passwordField: false }, register("lastName", { required: true }))) }), _jsxs(Label, { children: [_jsx("label", { children: "Username" }), _jsx(Icon, { children: _jsx(Info, { color: mode === "dark" ? "white" : "black", scaleFactor: 0.45, dropShadow: false }) })] }), _jsx(Field, { children: _jsx(Input, __assign({ passwordField: false }, register("username", { required: true }))) }), _jsx(Label, { children: _jsx("label", { children: "E-Mail" }) }), _jsx(Field, { children: _jsx(Input, __assign({ passwordField: false, type: "email" }, register("email", { required: true }))) }), _jsxs(Label, { children: [_jsx("label", { children: "Password" }), _jsx(Icon, { children: _jsx(Info, { color: mode === "dark" ? "white" : "black", scaleFactor: 0.45, dropShadow: false }) })] }), _jsxs(Field, { children: [_jsx(Input, __assign({ passwordField: true, type: context.showPassword ? "text" : "password" }, register("password", { required: true }))), _jsx(Visbility, {})] }), _jsxs(Field, { children: [_jsx(Input, __assign({ passwordField: true, type: context.showPassword ? "text" : "password" }, register("rePassword", { required: true }))), _jsx(Visbility, {})] })] }), _jsx(Button, { onClick: function () { }, text: "Register", type: "submit" }), _jsxs(Footer, { children: [_jsx("p", { children: "Already registered? " }), _jsx(Link, __assign({ to: "/login" }, { children: "Login" }))] })] })));
};
export default Register;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
