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
import { AuthContext } from "../../context/AuthContext";
import Button from "../../buttons/Button";
import Info from "../../icons/Info";
import Logo from "../../icons/Logo";
import Visbility from "../../buttons/Visbility";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import StandardHeader from "../../components/Header/StandardHeader";
import { useMediaQuery } from "usehooks-ts";
var c1 = "#7a5dd1";
var c2 = "#00ffd0";
var FormContainer = styled.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  width: 400px;\n  margin: 2rem;\n  padding: 1rem;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n  background-color: ", ";\n  margin: auto;\n  margin-top: 5rem;\n  position: relative;\n  align-items: center;\n\n  @media (max-width: 575px) {\n    margin: 0;\n    height: 95vh;\n    width: 100vw;\n    padding-top: 5rem;\n    border: none;\n    box-shadow: none;\n  }\n\n  @media (min-width: 576px) and (max-width: 992px) {\n    height: 60vh;\n    margin: 5rem auto;\n    width: 400px;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  width: 400px;\n  margin: 2rem;\n  padding: 1rem;\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;\n  background-color: ", ";\n  margin: auto;\n  margin-top: 5rem;\n  position: relative;\n  align-items: center;\n\n  @media (max-width: 575px) {\n    margin: 0;\n    height: 95vh;\n    width: 100vw;\n    padding-top: 5rem;\n    border: none;\n    box-shadow: none;\n  }\n\n  @media (min-width: 576px) and (max-width: 992px) {\n    height: 60vh;\n    margin: 5rem auto;\n    width: 400px;\n    align-items: center;\n  }\n"])), themeConf.backgroundColor);
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Field = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var Label = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 30px;\n  width: 200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: Quicksand;\n"], ["\n  height: 30px;\n  width: 200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-family: Quicksand;\n"])));
var Input = styled.input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: ", ";\n  height: 35px;\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: ", ";\n  font-family: Quicksand;\n  font-size: 1rem;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  width: ", ";\n  height: 35px;\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: ", ";\n  font-family: Quicksand;\n  font-size: 1rem;\n  border-radius: 5px;\n  padding: 5px;\n"])), function (props) { return (props.passwordField ? "100%" : "100%"); }, themeConf.fontColor, themeConf.fontColor, themeConf.backgroundColor);
var Icon = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var Footer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 1rem 0.25rem;\n  > p {\n    font-family: Inconsolata;\n    font-size: 1rem;\n    font-weight: 500;\n    padding-right: 1rem;\n    color: ", ";\n  }\n  > a {\n    font-family: Quicksand;\n    font-size: 1.5rem;\n    font-weight: 700;\n    border-radius: 10%;\n    color: ", ";\n    text-decoration: none;\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"], ["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 1rem 0.25rem;\n  > p {\n    font-family: Inconsolata;\n    font-size: 1rem;\n    font-weight: 500;\n    padding-right: 1rem;\n    color: ", ";\n  }\n  > a {\n    font-family: Quicksand;\n    font-size: 1.5rem;\n    font-weight: 700;\n    border-radius: 10%;\n    color: ", ";\n    text-decoration: none;\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"])), themeConf.fontColor, themeConf.fontColor, themeConf.menuItemHoverColor);
var Login = function () {
    var small = useMediaQuery("(max-width: 374px)");
    var navigate = useNavigate();
    var context = React.useContext(Context);
    var handleLogin = React.useContext(AuthContext).handleLogin;
    // const [json, setJson] = React.useState<string>();
    var _a = HookForm.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var mode = useTheme().mode;
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post("/api/user/login", data, {
                            withCredentials: true,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        //everything went well!
                        console.log(response.data.user.username.username);
                        console.log("login successful");
                        handleLogin(response.data.user.username, response.data.user._id);
                        navigate("/");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(FormContainer, __assign({ onSubmit: handleSubmit(onSubmit) }, { children: [_jsx(StandardHeader, __assign({ headingSize: small ? "1.4rem" : "1.75rem", subheading: "", width: "220px" }, { children: _jsx(Logo, { scaleFactor: small ? 2.2 : 3, colorProps: { colorOne: c1, colorTwo: c2 } }) })), _jsxs(Container, { children: [_jsx(Label, { children: _jsx("label", { children: "E-Mail" }) }), _jsx(Field, { children: _jsx(Input, __assign({ passwordField: false, type: "email" }, register("email", { required: true }))) }), _jsxs(Label, { children: [_jsx("label", { children: "password" }), _jsx(Icon, { children: _jsx(Info, { color: mode === "dark" ? "white" : "black", scaleFactor: 0.45, dropShadow: false }) })] }), _jsxs(Field, { children: [_jsx(Input, __assign({ passwordField: true, type: context.showPassword ? "text" : "password" }, register("password", { required: true }))), _jsx(Visbility, {})] }), _jsx(Button, { onClick: function () { }, text: "Login", type: "submit" })] }), _jsxs(Footer, { children: [_jsx("p", { children: "No account? " }), _jsx(Link, __assign({ to: "/register" }, { children: "Sign Up!" }))] })] })));
};
export default Login;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
