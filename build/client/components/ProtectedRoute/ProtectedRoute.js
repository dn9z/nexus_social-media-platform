import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
var ProtectedRoute = function (_a) {
    var children = _a.children, auth = _a.auth;
    //auth = true --> render children in the other case navigate to the login page.
    return auth ? children : _jsx(Navigate, { to: "/login" });
};
export default ProtectedRoute;
