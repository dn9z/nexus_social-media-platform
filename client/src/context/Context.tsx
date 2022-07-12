import * as React from "react";
import { ContextProps } from "../types";

/* create context with initialValues as arguments */
export const Context = React.createContext<ContextProps>({
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
  pageNumber: 1,
  setPageNumber:() => {},
});

function Provider(props: React.PropsWithChildren<{}>) {

  const [showPostModal, setShowPostModal] = React.useState(false);
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


  const [showPassword, toggleShowPassword] = React.useState(false);


 

  let color = "white";

  return (
    <Context.Provider
      value={{
        color,
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
        showPassword

      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
