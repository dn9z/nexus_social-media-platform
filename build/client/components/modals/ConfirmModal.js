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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import { useTheme } from "../../context/ThemeManager";
import Button from "../../buttons/Button";
var Background = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n"], ["\n  background-color: #4141418d;\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  left: 0;\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px silver;\n  min-width: 300px;\n  max-width: 800px;\n  height: 190px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: Zilla;\n  font-size: 1.5rem;\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: ", ";\n  border: 1px solid grey;\n  box-shadow: 1px 1px 2px grey, 2px 2px 3px grey, 3px 3px 5px silver;\n  min-width: 300px;\n  max-width: 800px;\n  height: 190px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: Zilla;\n  font-size: 1.5rem;\n"])), themeConf.backgroundColor);
var Message = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n all: unset;\n"], ["\n all: unset;\n"])));
var ButtonDiv = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  padding-right: 20px;\n  "], ["\n  display: flex;\n  width: 100%;\n  padding-right: 20px;\n  "])));
var ConfirmModal = function (_a) {
    var showConfirmModal = _a.showConfirmModal, setShowConfirmModal = _a.setShowConfirmModal, confirmFn = _a.confirmFn, idToDelete = _a.idToDelete;
    var context = React.useContext(Context);
    var theme = useTheme();
    if (showConfirmModal === true) {
        return (_jsx(Background, __assign({ onClick: function () {
                setShowConfirmModal(false);
            } }, { children: _jsxs(Container, __assign({ onClick: function (event) {
                    event.stopPropagation();
                } }, { children: [_jsx(Message, { children: "Are you sure?" }), _jsxs(ButtonDiv, { children: [_jsx(Button, { onClick: function () {
                                    confirmFn(idToDelete);
                                    setShowConfirmModal(false);
                                    context.setNeedRefresh(!context.needRefresh);
                                    context.setPageNumber(1);
                                }, text: "Yes" }), _jsx(Button, { onClick: function () {
                                    setShowConfirmModal(false);
                                }, text: "No" })] })] })) })));
    }
    else {
        return _jsx(_Fragment, {});
    }
};
export default ConfirmModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
