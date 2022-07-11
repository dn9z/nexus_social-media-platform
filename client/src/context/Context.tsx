import * as React from "react";
import { ContextProps } from "../types";

/* create context with initialValues as arguments */
export const Context = React.createContext<ContextProps>({
  showPostModal: false,
  setShowPostModal:() => {},
  color: "white",
  numberIconDisplayState: true,
  numberIconNums: { mails: 0, notifications: 0,},
  toggleShowPassword: ()=>{},
  showPassword: false,
  showNewMessageModal: false, 
  setShowNewMessageModal: ()=>{},
  conversationId: "", 
  setConversationId: ()=>{},
  isCreated: false,
   setIsCreated: ()=>{},
   recipient: "",
   setRecipient: ()=>{},
   recipientId: "",
   setRecipientId: ()=>{},
   

 
});

function Provider(props: React.PropsWithChildren<{}>) {
  
  const [showPostModal, setShowPostModal] = React.useState(false);
  const [showNewMessageModal, setShowNewMessageModal] = React.useState(false);
  const [recipient, setRecipient] = React.useState<string | null>(null)
  const [recipientId, setRecipientId] = React.useState<string | null>(null)
  /**
   * @params conversation states 
   * @types id, object | null
   * 
   */
  const [conversationId, setConversationId] = React.useState("");
 

  const [numberIconDisplayState, setNumberIconDisplayState] =
    React.useState(true);

  const [numberIconNums, setNumberIconNums] = React.useState({
    mails: 0,
    notifications: 0,
  });

 const [isCreated, setIsCreated] = React.useState(false);
  const [showPassword, toggleShowPassword] = React.useState(false);

  console.log(conversationId);


  let color = "white";

  return (
    <Context.Provider
      value={{
        color,
        showPostModal,
        setShowPostModal,
        numberIconDisplayState,
        numberIconNums,

        toggleShowPassword,
        showPassword,
        showNewMessageModal, 
        setShowNewMessageModal,
        conversationId,
        setConversationId,
        isCreated,
        setIsCreated,
        recipient,
        setRecipient,
        recipientId,
        setRecipientId
    
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
