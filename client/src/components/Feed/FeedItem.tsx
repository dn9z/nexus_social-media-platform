import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import * as themeConf from "../../styles/theme";
import Button from "../../buttons/Button";
import { FeedProps } from "../../types";
import Comments from "../Comments/Comments";
import axiosApiInstance from "../../util/axiosInstance";
import { format, parseISO } from "date-fns";

const PostItem = styled.div`
  width: calc(60vw - 2.6rem);
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
`;

const PostUser = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-left: 1rem;
    font-size: 1.4rem;
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
  font-size: 1.45rem;
  text-align: left;
  font-weight: 700;
  border-bottom: 1px solid ${themeConf.fontColor};
`;
const PostBody = styled.div`
  margin-top: 5px;
  margin-left: 15px;
  font-family: Zilla;
  font-size: 1.25rem;
`;

const FeedItem: React.FC<FeedProps> = ({ post }) => {
  const context = React.useContext(Context);
  const [author, setAuthor] = React.useState("");

  React.useEffect(() => {
    async function getUserById() {
      try {
        const res = await axiosApiInstance.get(
          `http://localhost:3000/api/user/getuserbyid/${post._user}`
        );
        setAuthor(res.data.username)
      } catch (error) {
        console.log(error);
      }
    }
    getUserById();
  }, []);

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
            <p>{author}</p>
          </PostUser>
          <PostDate>{format(parseISO(post.date), "MMM dd, yyyy")}</PostDate>
        </PostMetaData>
        <PostTextContainer>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </PostTextContainer>
        <PostMedia>
          {post.media && (
            <img
              // style={{ width: "100%", marginBottom: "20px" }}
              src={`http://localhost:3000/${post.media}`}
              alt=""
            />
          )}
        </PostMedia>
        <div style={{ placeSelf: "flex-end" }}>
          <Button onClick={() => context.setShowPostModal(true)} text="Share" type="button" />
        </div>
        <Comments post={post} />
      </PostItem>
    </>
  );
};

export default FeedItem;
