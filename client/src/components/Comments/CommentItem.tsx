import React from "react";
import { CommentItemProps } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";
import { format, parseISO } from "date-fns";
import * as themeConf from "../../styles/theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Context } from "../../context/Context";
import {useTheme} from "../../context/ThemeManager";
import Cross from "../../icons/Cross";
import ConfirmModal from "../modals/ConfirmModal";

const CommentItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  /* width: 100%; */
  height: auto; 
  border-bottom: 1px solid grey;
  border-radius: 5px;
  background-color: rgba(211, 211, 211, 0.05);
  margin: 1rem 0.5rem;
  padding: 0.6rem;
`;

const CommentItemMetaData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  height: 1rem;
   margin-bottom: 1rem; 
`;

const CommentMetaDataRight = styled.div`
  display: flex;
  font-weight: 300;
`;

const DeleteContainer = styled.div`
  position: relative;
  top: -0.93rem;
`;

const CommentItemUser = styled.div`
  cursor: pointer;
`;

const CommentItemBody = styled.div`
  width: 100%;
`;

const DateDiv = styled.div`
font-family: Inconsolata;
  color: ${themeConf.fontColor};`

  const UserNameWrapper = styled.div`
  font-family: Quicksand;
  margin-left: 0.5rem;
  `
const CommentBodyWrapper = styled.div`
font-family: NotoSans;`

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const authContext = React.useContext(AuthContext);
  const context = React.useContext(Context);
const theme = useTheme();
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  async function handleDeleteComment(_idToDelete: string) {
    try {
      const res = await axiosApiInstance.delete(
        `/api/comment/delete/${_idToDelete}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    async function getUsername() {
      try {
        const res = await axiosApiInstance.get(
          `/api/user/getuserbyid/${comment._user}`
        );
        setUsername(res.data.username);
      } catch (error) {
        console.log(error);
      }
    }
    comment && getUsername();
  }, []);

  return (
    <>
      <ConfirmModal
        showConfirmModal={showConfirmModal}
        setShowConfirmModal={setShowConfirmModal}
        confirmFn={handleDeleteComment}
        idToDelete={comment._id}
      />
      {username ? (
        <CommentItemContainer>
          <CommentItemMetaData>
            <CommentItemUser
              onClick={() => {
                navigate(`/profile/${comment._user}`);
              }}
            >
              <UserNameWrapper>{username}</UserNameWrapper>
            </CommentItemUser>
            <CommentMetaDataRight>
              <DateDiv>{format(parseISO(comment.date), "MMM dd, yyyy")}</DateDiv>
              {authContext.userId === comment._user && (
                <DeleteContainer
                  onClick={() => {
                    setShowConfirmModal(true);
                  }}
                >
                  <Cross dropShadow={true} scaleFactor={0.45} color={theme.mode === "dark" ? "white" : "black"} />
                </DeleteContainer>
              )}
            </CommentMetaDataRight>
          </CommentItemMetaData>
          <CommentItemBody>
            <CommentBodyWrapper>{comment.body}</CommentBodyWrapper>
          </CommentItemBody>
        </CommentItemContainer>
      ) : null}
    </>
  );
};

export default CommentItem;
