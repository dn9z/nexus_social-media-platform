import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from "./context/AuthContext";
import ThemeProvider from './context/ThemeManager';
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(React.StrictMode, { children: _jsx(AuthProvider, { children: _jsx(ThemeProvider, { children: _jsx(App, {}) }) }) }));
