import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axiosApiInstance from "../../util/axiosInstance";

export default function Logout() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  async function logout() {
    try {
      await axiosApiInstance.get("/api/user/logout");
      handleLogin("", ""); // empty strings will resolve to falsey value
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
   logout()
  }, []); // run once when component mounts

  return <></>;
}
