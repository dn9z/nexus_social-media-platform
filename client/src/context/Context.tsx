import * as React from "react";
import { ContextProps } from "../types";

/* create context with initialValues as arguments */
export const Context = React.createContext<ContextProps>({
  showPostModal: false,
  setShowPostModal:() => {},
  showErrorModal: false,
  setShowErrorModal:() => {},
  color: "white",
  numberIconDisplayState: true,
  numberIconNums: { mails: 0, notifications: 0,},
  toggleShowPassword: ()=>{},
  showPassword: false,
});

function Provider(props: React.PropsWithChildren<{}>) {

  const [showPostModal, setShowPostModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  

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
        numberIconDisplayState,
        numberIconNums,

        toggleShowPassword,
        showPassword

      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
