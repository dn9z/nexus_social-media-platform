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
/* create context with initialValues as arguments */
export var AuthContext = React.createContext({
    loggedIn: false,
    username: "",
    userId: "",
    handleLogin: function () { },
});
function Provider(props) {
    var session = sessionStorage.getItem("login");
    var loginSession = session === null ? {
        loggedIn: false,
        username: "",
        userId: "",
    } : JSON.parse(session);
    var _a = React.useState(loginSession["loggedIn"]), loggedIn = _a[0], setLoggedIn = _a[1];
    var _b = React.useState(loginSession["username"]), username = _b[0], setUsername = _b[1];
    var _c = React.useState(loginSession["userId"]), userId = _c[0], setUserId = _c[1];
    var handleLogin = function (_username, _userId) {
        if (_username && _userId) {
            setUsername(_username);
            setUserId(_userId);
            setLoggedIn(true);
        }
        else {
            setUsername("");
            setUserId("");
            setLoggedIn(false);
        }
    };
    React.useEffect(function () {
        sessionStorage.setItem("login", JSON.stringify({ username: username, loggedIn: loggedIn, userId: userId }));
    }, [username, loggedIn, userId]);
    return (_jsx(AuthContext.Provider, __assign({ value: {
            loggedIn: loggedIn,
            username: username,
            userId: userId,
            handleLogin: handleLogin,
        } }, { children: props.children })));
}
export default Provider;
