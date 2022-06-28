import * as React from "react";
import { AuthContextProps } from "../types";

/* create context with initialValues as arguments */
export const AuthContext = React.createContext<AuthContextProps>({
  loggedIn: false,
  username: '',
  handleLogin: () => {},
});

function Provider(props: React.PropsWithChildren<{}>) {

  const session = sessionStorage.getItem("login");
  const loginSession = session === null ?  {
    username: "",
    loggedIn: false,
  }: JSON.parse(session);

  const [loggedIn, setLoggedIn] = React.useState(loginSession["loggedIn"]);
  const [username, setUsername] = React.useState(loginSession["username"]);

  const handleLogin = (_username: string) => {
    if (_username) {
      setUsername(_username);
      setLoggedIn(true);
    } else {
      setUsername("");
      setLoggedIn(false);
    }
  };

  React.useEffect(() => {
    sessionStorage.setItem(
      "login",
      JSON.stringify({ username: username, loggedIn: loggedIn })
    );
  }, [username, loggedIn]);
  

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        username,
        handleLogin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default Provider;
