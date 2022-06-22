import * as React from "react";
import { ContextProps } from "../types";

/* create context with initialValues as arguments */
export const Context = React.createContext<ContextProps>({
  showPostModal: false,
  setShowPostModal:() => {},
  color: "white",
  numberIconDisplayState: true,
  numberIconNums: { mails: 0, notifications: 0,},
});

function Provider(props: React.PropsWithChildren<{}>) {

  const [showPostModal, setShowPostModal] = React.useState(false);

  const [numberIconDisplayState, setNumberIconDisplayState] =
    React.useState(true);

  const [numberIconNums, setNumberIconNums] = React.useState({
    mails: 0,
    notifications: 0,
  });

  let color = "white";

  return (
    <Context.Provider
      value={{
        color,
        numberMails,
        showPostModal,
        setShowPostModal,
        numberIconDisplayState,
        numberIconNums,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
