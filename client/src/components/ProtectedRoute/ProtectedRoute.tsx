import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  auth: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, auth }) => {
  //auth = true --> render children in the other case navigate to the login page.
  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
