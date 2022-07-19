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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
var defaultMode = 'light';
export var ThemeContext = React.createContext({
    mode: defaultMode,
    toggle: function () { }
});
export var useTheme = function () { return React.useContext(ThemeContext); };
function ThemeProvider(props) {
    var _a = React.useState({
        mode: defaultMode
    }), themeState = _a[0], setThemeState = _a[1];
    var toggle = function () {
        setThemeState({ mode: (themeState.mode === 'light' ? "dark" : "light") });
    };
    return (_jsx(ThemeContext.Provider, __assign({ value: {
            mode: themeState.mode,
            toggle: toggle
        } }, { children: props.children })));
}
export default ThemeProvider;
