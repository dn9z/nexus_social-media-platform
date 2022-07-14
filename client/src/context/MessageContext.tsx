import * as React from "react";



type ProviderProps = { children: React.ReactNode };

const MessageContext = React.createContext<
  | {
      users: Array<{ username: string; _id: string;avatar: string;}> | undefined;
      setUsers: React.Dispatch<
        React.SetStateAction<{ username: string; _id: string;avatar: string; }[] | undefined>
      >;
      conversations:
        | Array<{ participants: { _userFrom: string; _userTo: string } }>
        | [];
      setConversations: React.Dispatch<
        React.SetStateAction<
          { participants: { _userFrom: string; _userTo: string } }[] | []
        >
      >;
      conversationId: string | null;
      setConversationId: React.Dispatch<React.SetStateAction<string | null>>;
      isCreated: boolean;
      setIsCreated: React.Dispatch<React.SetStateAction<boolean>>;
      recipient: string | null;
      setRecipient: React.Dispatch<React.SetStateAction<string | null>>;
      recipientId: string | null;
      setRecipientId: React.Dispatch<React.SetStateAction<string | null>>;
    }
  | undefined
>(undefined);

function MessageProvider({ children }: ProviderProps) {
  const [users, setUsers] = React.useState<
    Array<{ username: string; _id: string, avatar:string }> | undefined
  >(undefined);
  const [conversations, setConversations] = React.useState<
    | Array<{
        participants: { _userFrom: string; _userTo: string };
      }>
    | []
  >([]);
  const [recipient, setRecipient] = React.useState<string | null>(null);
  const [recipientId, setRecipientId] = React.useState<string | null>(null);
  const [conversationId, setConversationId] = React.useState<string | null>(
    null
  );
  const [isCreated, setIsCreated] = React.useState(false);

  const value = {
    users,
    setUsers,
    recipient,
    setRecipient,
    recipientId,
    setRecipientId,
    conversationId,
    setConversationId,
    isCreated,
    setIsCreated,
    conversations,
    setConversations,
  };
  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
}

function useMessageContext() {
  const context = React.useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessageContext must be used within a MessageProvider");
  }
  return context;
}

export { MessageProvider, useMessageContext };
