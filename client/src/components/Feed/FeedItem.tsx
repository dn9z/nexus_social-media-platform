import React, { useState } from "react";
import styled from "styled-components";

const PostItem = styled.div`
  /* border: 1px solid black; */
  /* width: calc(100% - 1.6rem); */
  
  /* height: 10rem; */
  padding: 0.5rem;
  margin: 0.8rem;
  background-color: #ece7e7;
  box-shadow: 4px 4px 15px 1px rgba(0,0,0,0.79);
`;

const PostMetaData = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostUser = styled.div`
  display: flex;
  align-items: center;
`;

const PostUserPicContainer = styled.div`
  width: 2rem;
`;

const PostDate = styled.div`
  /* border: 1px solid black; */
  align-self: center;
`;

const PostMedia = styled.div`
  display: flex;
  justify-content: center;
`;

const PostTextContainer = styled.div`
`;
const PostTitle = styled.div`
  text-decoration: underline;
  text-align: center;
`;
const PostBody = styled.div`
`;

interface IProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const FeedItem: React.FC<IProps> = ({ post }) => {
  return (
    <>
      <PostItem>
        <PostMetaData>
          <PostUser>
            <PostUserPicContainer>
              <img
                style={{ width: "100%",borderRadius: "50%"}}
                src="https://www.zvr-info.de/wp-content/uploads/2018/02/Platzhalter.png"
                alt=""
              />
            </PostUserPicContainer>

            <p>Username/Groupname</p>
          </PostUser>
          <PostDate>1980-10-10</PostDate>
        </PostMetaData>

        <PostTextContainer>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </PostTextContainer>
        <PostMedia>
          <img
            style={{ width: "100%" }}
            src="https://its-mobility.de/wp-content/uploads/placeholder.png"
            alt=""
          />
        </PostMedia>
      </PostItem>
    </>
  );
};

export default FeedItem;
