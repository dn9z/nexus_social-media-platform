import * as React from "react";
import { AuthContextProps } from "../types";

/* create context with initialValues as arguments */
export const AuthContext = React.createContext<AuthContextProps>({
  loggedIn: false,
  username: "",
  userId: "",
  handleLogin: () => {},
});

function Provider(props: React.PropsWithChildren<{}>) {
  const session = sessionStorage.getItem("login");
  const loginSession = session === null ? {
          loggedIn: false,
          username: "",
          userId: "",
        } : JSON.parse(session);

  const [loggedIn, setLoggedIn] = React.useState(loginSession["loggedIn"]);
  const [username, setUsername] = React.useState(loginSession["username"]);
  const [userId, setUserId] = React.useState(loginSession["userId"]);

  const handleLogin = (_username: string, _userId: string) => {
    console.log('triggered2')

    if (_username && _userId) {
      console.log('triggered3')

      setUsername(_username);
      setUserId(_userId);
      setLoggedIn(true);
    } else {
      setUsername("");
      setUserId("");
      setLoggedIn(false);
    }
  };

  React.useEffect(() => {
    sessionStorage.setItem(
      "login",
      JSON.stringify({ username: username, loggedIn: loggedIn, userId: userId })
    );
  }, [username, loggedIn, userId]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        username,
        userId,
        handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default Provider;