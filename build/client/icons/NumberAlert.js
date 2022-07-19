var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
var Number = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 32px;\n  top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  height: fit-content;\n  border-radius: 50%;\n  background-color: springgreen;\n  border: 1px groove white;\n  > p {\n    padding-left: 5px;\n    padding-right: 5px;\n    color: white;\n    font-family: Zilla;\n    font-size: 0.9rem;\n    font-weight: 700;\n  }\n"], ["\n  position: absolute;\n  left: 32px;\n  top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  height: fit-content;\n  border-radius: 50%;\n  background-color: springgreen;\n  border: 1px groove white;\n  > p {\n    padding-left: 5px;\n    padding-right: 5px;\n    color: white;\n    font-family: Zilla;\n    font-size: 0.9rem;\n    font-weight: 700;\n  }\n"])));
var NumberAlert = function (props) {
    /* const context = React.useContext(Context) */
    if (props.displayState === true) {
        return (_jsx(Number, { children: _jsx("p", { children: props.number }) }));
    }
    else {
        return _jsx(_Fragment, {});
    }
};
export default NumberAlert;
var templateObject_1;
