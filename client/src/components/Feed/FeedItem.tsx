import * as React from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";
import * as themeConf from "../../styles/theme";
import Button from "../../buttons/Button";
import { FeedItemProps } from "../../types";
import Comments from "../Comments/Comments";
import axiosApiInstance from "../../util/axiosInstance";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import Cross from "../../icons/Cross";
import ConfirmModal from "../modals/ConfirmModal";
import { useTheme } from "../../context/ThemeManager";
import UserPic from "../User/UserPic";

const PostItem = styled.div`
  width: calc(100% - 2.6rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
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

const MetaDataRight = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostUser = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > p {
    margin-left: 1rem;
    font-size: 1.4rem;
    font-family: Quicksand;
    font-weight: 700;
  }
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
  max-width: 70%;
`;

const PostTextContainer = styled.div`
  margin: 1rem;
  
`;
const PostTitle = styled.div`
  margin: 1rem 0 1rem 15px;
  font-family: Quicksand;
  text-decoration: none;
  font-size: 1.45rem;
  text-align: left;
  font-weight: 700;
  border-bottom: 1px solid ${themeConf.fontColor};
`;
const PostBody = styled.div`
  margin: 1rem 0 1rem 15px;
  font-family: Zilla;
  font-size: 1.25rem;
`;

const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
  const context = React.useContext(Context);
  const authContext = React.useContext(AuthContext);

  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [avatar, setAvatar] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  async function handleDeletePost(_idToDelete: string) {
    try {
      const res = await axiosApiInstance.delete(
        `http://localhost:3000/api/post/delete/${_idToDelete}`
      );
      context.setPageNumber(1);
      context.setNeedRefresh(!context.needRefresh);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    async function getUserById() {
      try {
        const res = await axiosApiInstance.get(
          `http://localhost:3000/api/user/getuserbyid/${post._user}`
        );
        setAvatar(res.data.avatar);
        setAuthor(res.data.username);
      } catch (error) {
        console.log(error);
      }
    }
    getUserById();
  }, []);

  return (
    <>
      <ConfirmModal
        showConfirmModal={showConfirmModal}
        setShowConfirmModal={setShowConfirmModal}
        confirmFn={handleDeletePost}
        idToDelete={post._id}
      />
      <PostItem>
        <PostMetaData>
          <PostUser
            onClick={() => {
              navigate(`/profile/${post._user}`);
            }}
          >
            <UserPic customSize="50px" image={avatar}/>
            <p>{author}</p>
          </PostUser>
          <MetaDataRight>
            <PostDate>{format(parseISO(post.date), "MMM dd, yyyy")}</PostDate>
            {authContext.userId === post._user && (
              <div
                onClick={() => {
                  setShowConfirmModal(true);
                }}
              >
                <Cross
                  dropShadow={true}
                  scaleFactor={0.5}
                  color={theme.mode === "dark" ? "white" : "black"}
                />
              </div>
            )}
          </MetaDataRight>
        </PostMetaData>
        <PostTextContainer>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </PostTextContainer>
        <PostMedia>
          {post.media && (
            <img src={`http://localhost:3000/${post.media}`} alt="" />
          )}
        </PostMedia>
        {/* <div style={{ placeSelf: "flex-end" }}>
          <Button onClick={() => context.setShowPostModal(true)} text="Share" type="button" />
        </div> */}
        <Comments post={post} />
      </PostItem>
    </>
  );
};

export default FeedItem;
