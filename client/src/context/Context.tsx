import * as React from "react";
import { ContextProps } from "../types";

/* create context with initialValues as arguments */
export const Context = React.createContext<ContextProps>({
  backgroundModalSaved: false,
  setBackgroundModalSaved: () => {},
  showBackgroundModal: false, 
  setShowBackgroundModal:() => {},

  avatarModalSaved: false,
  setAvatarModalSaved: () => {},
  showAvatarModal: false, 
  setShowAvatarModal:() => {},

  showPostModal: false,
  setShowPostModal:() => {},
  showErrorModal: false,
  setShowErrorModal:() => {},
  postsUpdated: false,
  setPostsUpdated:() => {},
  needRefresh: false,
  setNeedRefresh:() => {},
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
  pageNumber: 1,
  setPageNumber:() => {},
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
 

  const [showAvatarModal, setShowAvatarModal] = React.useState(false);
  const [avatarModalSaved, setAvatarModalSaved] = React.useState(false);

  const [showBackgroundModal, setShowBackgroundModal] = React.useState(false);
  const [backgroundModalSaved, setBackgroundModalSaved] = React.useState(false);

  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  
  const [postsUpdated, setPostsUpdated] = React.useState(false);
  
  const [needRefresh, setNeedRefresh] = React.useState(false);
  
  const [commentRefresh, setCommentRefresh] = React.useState(false);


  const [pageNumber, setPageNumber] = React.useState(1);
  


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

        backgroundModalSaved,
        setBackgroundModalSaved,
        showBackgroundModal,
        setShowBackgroundModal,

        avatarModalSaved,
        setAvatarModalSaved,
        showAvatarModal,
        setShowAvatarModal,
        showPostModal,
        setShowPostModal,
        showErrorModal,
        setShowErrorModal,
        needRefresh,
        setNeedRefresh,
        postsUpdated,
        setPostsUpdated,
        numberIconDisplayState,
        numberIconNums,

        pageNumber,
        setPageNumber,

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
