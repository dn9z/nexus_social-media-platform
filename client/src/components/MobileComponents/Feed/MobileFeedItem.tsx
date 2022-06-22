import * as React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import * as themeConf from "../../../styles/theme";
import PostButton from "../../../buttons/PostButton"

const PostItem = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 90vh;
  padding: 0.5rem;
  margin: 0.8rem;
  border: 1px solid grey;
  background-color: ${themeConf.backgroundColor};
  box-shadow: 1px 1px 2px grey, 2px 2px 3px silver, 3px 3px 5px silver;
`;

const PostMetaData = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const PostUser = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-left: 0.5rem;
    font-size: clamp(1rem, 0.6203rem + 2.1695vw, 1.4rem);
    font-family: Quicksand;
    font-weight: 700;
  }
`;

const PostUserPicContainer = styled.div`
  width: 2rem;
`;

const PostDate = styled.div`
  /* border: 1px solid black; */
  align-self: center;
  font-family: Inconsolata;
  font-size: clamp(1rem, 0.8102rem + 1.0847vw, 1.2rem);
`;

const PostMedia = styled.div`
  display: flex;
  justify-content: center;
  place-self: center;
  width: 70%;
`;

const PostTextContainer = styled.div``;
const PostTitle = styled.div`
  font-family: Quicksand;
  text-decoration: none;
  font-size: clamp(1.25rem, 1.0602rem + 1.0847vw, 1.45rem);
  text-align: left;
  font-weight: 700;
  border-bottom: 1px solid ${themeConf.fontColor};
`;
const PostBody = styled.div`
  margin-top: 5px;
  margin-left: 15px;
  font-family: Zilla;
  font-size: clamp(1.15rem, 1.0551rem + 0.5424vw, 1.25rem);
`;

interface IProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const MobileFeedItem: React.FC<IProps> = ({ post }) => {
  const context = React.useContext(Context);
  return (
    <>
      <PostItem>
        <PostMetaData>
          <PostUser>
            <PostUserPicContainer>
              <img
                style={{ width: "100%", borderRadius: "50%" }}
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
            style={{ width: "100%", marginBottom: "20px" }}
            src="https://its-mobility.de/wp-content/uploads/placeholder.png"
            alt=""
          />
        </PostMedia>
        <div style={{placeSelf:"flex-end"}}>
          <PostButton onClick={() => {}} text="Share"/>
        </div>
      </PostItem>
    </>
  );
};

export default MobileFeedItem;
