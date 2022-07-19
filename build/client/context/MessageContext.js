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
var MessageContext = React.createContext(undefined);
function MessageProvider(_a) {
    var children = _a.children;
    var _b = React.useState(undefined), users = _b[0], setUsers = _b[1];
    var _c = React.useState([]), conversations = _c[0], setConversations = _c[1];
    var _d = React.useState(null), recipient = _d[0], setRecipient = _d[1];
    var _e = React.useState(null), recipientId = _e[0], setRecipientId = _e[1];
    var _f = React.useState(null), conversationId = _f[0], setConversationId = _f[1];
    var _g = React.useState(false), isCreated = _g[0], setIsCreated = _g[1];
    var value = {
        users: users,
        setUsers: setUsers,
        recipient: recipient,
        setRecipient: setRecipient,
        recipientId: recipientId,
        setRecipientId: setRecipientId,
        conversationId: conversationId,
        setConversationId: setConversationId,
        isCreated: isCreated,
        setIsCreated: setIsCreated,
        conversations: conversations,
        setConversations: setConversations,
    };
    return (_jsx(MessageContext.Provider, __assign({ value: value }, { children: children })));
}
function useMessageContext() {
    var context = React.useContext(MessageContext);
    if (context === undefined) {
        throw new Error("useMessageContext must be used within a MessageProvider");
    }
    return context;
}
export { MessageProvider, useMessageContext };
