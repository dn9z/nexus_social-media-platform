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
export var Context = React.createContext({
    backgroundModalSaved: false,
    setBackgroundModalSaved: function () { },
    showBackgroundModal: false,
    setShowBackgroundModal: function () { },
    avatarModalSaved: false,
    setAvatarModalSaved: function () { },
    showAvatarModal: false,
    setShowAvatarModal: function () { },
    showPostModal: false,
    setShowPostModal: function () { },
    showErrorModal: false,
    setShowErrorModal: function () { },
    postsUpdated: false,
    setPostsUpdated: function () { },
    needRefresh: false,
    setNeedRefresh: function () { },
    toggleShowPassword: function () { },
    showPassword: false,
    showNewMessageModal: false,
    setShowNewMessageModal: function () { },
    pageNumber: 1,
    setPageNumber: function () { },
});
function Provider(props) {
    var _a = React.useState(false), showPostModal = _a[0], setShowPostModal = _a[1];
    var _b = React.useState(false), showNewMessageModal = _b[0], setShowNewMessageModal = _b[1];
    var _c = React.useState(false), showAvatarModal = _c[0], setShowAvatarModal = _c[1];
    var _d = React.useState(false), avatarModalSaved = _d[0], setAvatarModalSaved = _d[1];
    var _e = React.useState(false), showBackgroundModal = _e[0], setShowBackgroundModal = _e[1];
    var _f = React.useState(false), backgroundModalSaved = _f[0], setBackgroundModalSaved = _f[1];
    var _g = React.useState(false), showErrorModal = _g[0], setShowErrorModal = _g[1];
    var _h = React.useState(false), postsUpdated = _h[0], setPostsUpdated = _h[1];
    var _j = React.useState(false), needRefresh = _j[0], setNeedRefresh = _j[1];
    var _k = React.useState(1), pageNumber = _k[0], setPageNumber = _k[1];
    var _l = React.useState(false), showPassword = _l[0], toggleShowPassword = _l[1];
    return (_jsx(Context.Provider, __assign({ value: {
            backgroundModalSaved: backgroundModalSaved,
            setBackgroundModalSaved: setBackgroundModalSaved,
            showBackgroundModal: showBackgroundModal,
            setShowBackgroundModal: setShowBackgroundModal,
            avatarModalSaved: avatarModalSaved,
            setAvatarModalSaved: setAvatarModalSaved,
            showAvatarModal: showAvatarModal,
            setShowAvatarModal: setShowAvatarModal,
            showPostModal: showPostModal,
            setShowPostModal: setShowPostModal,
            showErrorModal: showErrorModal,
            setShowErrorModal: setShowErrorModal,
            needRefresh: needRefresh,
            setNeedRefresh: setNeedRefresh,
            postsUpdated: postsUpdated,
            setPostsUpdated: setPostsUpdated,
            pageNumber: pageNumber,
            setPageNumber: setPageNumber,
            toggleShowPassword: toggleShowPassword,
            showPassword: showPassword,
            showNewMessageModal: showNewMessageModal,
            setShowNewMessageModal: setShowNewMessageModal,
        } }, { children: props.children })));
}
export default Provider;
