import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axiosApiInstance from "../../util/axiosInstance";

const Container = styled.h2`
display: flex; 
align-items: center;
background-color: rgba(0, 0, 0, 0.7);
color: springgreen;
margin: 35px 30px 0px 0px;
width: 300px;
padding: 10px;
border-radius: 10px;

`;

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
    setTimeout(() => {
      logout();
      console.log("User is logged out")
      }, 600);
      }, []); // run once when component mounts

  return <Container>You`re being logged out...</Container>;
}
