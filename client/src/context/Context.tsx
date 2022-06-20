import * as React from "react";
import { ContextProps } from "../types";

export const Context = React.createContext<ContextProps>({
  handleClick: () => {},
  handlePostClick: () => {},
  showPostModal: false,
  color: "white",
  numberMails: 0,
});

function Provider(props: React.PropsWithChildren<{}>) {
  const [showPostModal, setShowPostModal] = React.useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(event.target);
  };

  let color = "white";
  let numberMails = 5;

  const handlePostClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPostModal(!showPostModal);
  };

  return (
    <Context.Provider
      value={{
        handleClick,
        color,
        numberMails,
        handlePostClick,
        showPostModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
