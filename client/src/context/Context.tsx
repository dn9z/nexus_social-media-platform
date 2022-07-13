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
  toggleShowPassword: ()=>{},
  showPassword: false,
  showNewMessageModal: false, 
  setShowNewMessageModal: ()=>{},
  pageNumber: 1,
  setPageNumber:() => {},

});

function Provider(props: React.PropsWithChildren<{}>) {
  
  const [showPostModal, setShowPostModal] = React.useState(false);
  const [showNewMessageModal, setShowNewMessageModal] = React.useState(false);


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
  





  const [showPassword, toggleShowPassword] = React.useState(false);

 




  return (
    <Context.Provider
      value={{
   

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

        pageNumber,
        setPageNumber,

        toggleShowPassword,
        showPassword,
        showNewMessageModal, 
        setShowNewMessageModal,
      
    
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
