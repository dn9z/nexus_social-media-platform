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
import * as React from "react";
var CountStateContext = React.createContext(undefined);
function messageCountReducer(messageNumberState, action) {
    switch (action.type) {
        case 'increment': {
            return { count: messageNumberState.count + 1 };
        }
        case 'decrement': {
            return { count: messageNumberState.count - 1 };
        }
        default: {
            throw new Error("Unhandled action type: ".concat(action));
        }
    }
}
function notificationCountReducer(notificationNumberState, action) {
    switch (action.type) {
        case 'increment': {
            return { count: notificationNumberState.count + 1 };
        }
        case 'decrement': {
            return { count: notificationNumberState.count - 1 };
        }
        default: {
            throw new Error("Unhandled action type: ".concat(action));
        }
    }
}
function CountProvider(_a) {
    var children = _a.children;
    var _b = React.useReducer(messageCountReducer, { count: 0 }), messageNumberState = _b[0], messageNumberDispatch = _b[1];
    var _c = React.useReducer(notificationCountReducer, { count: 0 }), notificationNumberState = _c[0], notificationNumberDispatch = _c[1];
    var value = { messageNumberState: messageNumberState, messageNumberDispatch: messageNumberDispatch, notificationNumberState: notificationNumberState, notificationNumberDispatch: notificationNumberDispatch };
    return (_jsx(CountStateContext.Provider, __assign({ value: value }, { children: children })));
}
function useCount() {
    var context = React.useContext(CountStateContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
}
export { CountProvider, useCount };
