import React, { useState } from "react";
import styled from "styled-components";
import * as themeConf from "../../styles/theme";
import Image from "../../icons/Image";
import Gif from "../../icons/Gif";
import Emoji from "../../icons/Emoji";
import CommentButton from "../../buttons/CommentButton";
import { useTheme } from "../../context/ThemeManager";
import CommentsList from "./CommentsList";
import { CommentProps } from "../../types";
import axios from "axios";
import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";
import {AuthContext} from "../../context/AuthContext";
import UserPic from "../User/UserPic";

const FormContainer = styled.div`
  margin-top: 35px;
  height: 100%;
  border-top: 1px solid ${themeConf.fontColor};
  padding-top: 10px;
  display: flex;
  align-items: center;
`;

const PicContainer = styled.div`
  display: flex;
  width: 3.5rem;
  margin: 5px;
`;

const CommentContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: rgba(211, 211, 211, 0.35);
`;

const Textarea = styled.textarea`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  color: ${themeConf.fontColor};
  font-family: Zilla;
  font-size: 1.4rem;
  resize: none;
  background-color: transparent;
  border: none;
  outline: none;
`;

const EmojiContainer = styled.div`
  height: 100%;
  margin: auto;

  align-items: center;
`;

const Comments: React.FC<CommentProps> = ({ post }) => {
  const theme = useTheme();
  const context = React.useContext(Context);
  const { userId} = React.useContext(AuthContext);

  const [commentValue, setCommentValue] = useState<String>("")
  const [commentBodyInput, setCommentBodyInput] = useState<String>("");
  const [avatar, setAvatar] = useState("")
  const [needRefresh, setNeedRefresh] = useState(false);
  
  React.useEffect(() => {
    async function getUserById() {
      try {
        const res = await axiosApiInstance.get(
          `/api/user/getuserbyid/${userId}`
        );
        setAvatar(res.data.avatar);
        
      } catch (error) {
        console.log(error);
      }
    }
    getUserById();
  }, []);

  const addComment = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data = {
      _post: post._id,
      date: new Date(Date.now()),
      body: commentBodyInput,
    };

    try {
      const response = await axiosApiInstance.post(
        "/api/comment/create",
        data
      );

      if (response.status === 200) {
        console.log("comment was created");
        context.setNeedRefresh(!context.needRefresh)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormContainer>
        <PicContainer>
          <UserPic image={avatar} customSize="40px"/>
        </PicContainer>
        <CommentContainer>
          <Textarea
            onChange={(e) => {
              setCommentBodyInput(e.target.value);
            }}
            placeholder="Comment..."
          ></Textarea>
          {/* <EmojiContainer>
          <div>
            <Image
              dropShadow={false}
              scaleFactor={0.6}
              color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
            />
            <Gif
              dropShadow={false}
              scaleFactor={0.6}
              color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
            />
            <Emoji
              dropShadow={false}
              scaleFactor={0.6}
              color={theme.mode === "light" ? "#8b14f9" : "#f1dcff"}
            />
          </div>
        </EmojiContainer> */}
        </CommentContainer>
        <CommentButton text="Reply" type="submit" onClick={addComment} />
      </FormContainer>
      <CommentsList post={post} />
    </>
  );
}

export default Comments;
