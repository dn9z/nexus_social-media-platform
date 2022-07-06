import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axiosApiInstance from "../../util/axiosInstance";

export default function Logout() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  useEffect(() => {
    // declare a function and call it separately
    async function _logout() {
      try {
        await axiosApiInstance.get("/api/user/logout");
        handleLogin("", ""); // empty strings will resolve to falsey value
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
    setTimeout(() => {
      _logout();
    }, 500);
  }, []); // run once when component mounts

  return <h1>You are currently being logged out...</h1>;
}
