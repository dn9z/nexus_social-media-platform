import React, {useState} from "react";
import styled from "styled-components";
import Image from "../../icons/Image";
import Gif from "../../icons/Gif";
import Emoji from "../../icons/Emoji";
import CommentButton from "../../buttons/CommentButton";
import { useTheme } from "../../context/ThemeManager";
import CommentsList from "./CommentsList";
import {CommentProps} from "../../types"
import axios from "axios";

const FormContainer = styled.form`
  margin-top: 30px;
  border-top: 1px solid grey;
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
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  border: 2px solid grey;
  border-radius: 10px;
  background-color: rgba(211, 211, 211, 0.35);
`;

const Textarea = styled.textarea`
  width: 80%;
  font-family: Zilla;
  font-size: 1.4rem;
  resize: none;
  background-color: rgba(211, 211, 211, 0.2);
  border: none;
  outline: none;
`;

const EmojiContainer = styled.div`
 
  height: 100%;
  margin: auto;
  
  align-items: center;
  
`;

const Comments: React.FC<CommentProps> = ({post}) => {
  const theme = useTheme();

  const [commentValue, setCommentValue] = useState<String>("")
  const addComment = async (e:React.MouseEvent) => 
{
  e.preventDefault();
  console.log("The Value is", commentValue)
  const data = {
    date: new Date(Date.now()),
    body: commentValue,
    post_id: post._id
    // user_id
  }
  console.log(data)

  try {
    const response = await axios.post("http://localhost:3000/api/comment/create", data);

    if (response.status === 200) {
      console.log("comment was created");
    
    }
  } catch (error) {
    console.log(error);
   
  }
}

  return (
    <>
    <FormContainer>
      <PicContainer>
        <img
          style={{ width: "100%", borderRadius: "50%" }}
          src="https://www.zvr-info.de/wp-content/uploads/2018/02/Platzhalter.png"
          alt=""
        />
      </PicContainer>
      <CommentContainer>
        <Textarea onChange={(e) => {setCommentValue(e.target.value)}} placeholder="Comment..."></Textarea>
        <EmojiContainer>
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
        </EmojiContainer>
      </CommentContainer>
      <CommentButton text="Reply" type="submit" onClick={addComment}/>
    </FormContainer>
    <CommentsList/>
    </>

  );
};

export default Comments;
