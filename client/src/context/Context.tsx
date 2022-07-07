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
  color: "white",
  numberIconDisplayState: true,
  numberIconNums: { mails: 0, notifications: 0,},
  toggleShowPassword: ()=>{},
  showPassword: false,
});

function Provider(props: React.PropsWithChildren<{}>) {

  const [showPostModal, setShowPostModal] = React.useState(false);
  const [showAvatarModal, setShowAvatarModal] = React.useState(false);
  const [avatarModalSaved, setAvatarModalSaved] = React.useState(false);

  const [showBackgroundModal, setShowBackgroundModal] = React.useState(false);
  const [backgroundModalSaved, setBackgroundModalSaved] = React.useState(false);

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
