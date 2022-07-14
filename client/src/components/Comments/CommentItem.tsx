import React from "react";
import { CommentItemProps } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";
import { format, parseISO } from "date-fns";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Context } from "../../context/Context";
import Cross from "../../icons/Cross";
import ConfirmModal from "../modals/ConfirmModal";

const CommentItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  /* width: 100%; */
  /* height: 3rem; */
  border: 2px solid grey;
  border-radius: 10px;
  background-color: rgba(211, 211, 211, 0.35);
  margin-bottom: 0.5rem;
  padding-left: 0.6rem;
`;

const CommentItemMetaData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  height: 1rem;
  /* margin: ; */
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
const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const authContext = React.useContext(AuthContext);
  const context = React.useContext(Context);

  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  async function handleDeleteComment(_idToDelete: string) {
    try {
      const res = await axiosApiInstance.delete(
        `http://localhost:3000/api/comment/delete/${_idToDelete}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    async function getUsername() {
      try {
        const res = await axiosApiInstance.get(
          `http://localhost:3000/api/user/getuserbyid/${comment._user}`
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
              {username}
            </CommentItemUser>
            <CommentMetaDataRight>
              <div>{format(parseISO(comment.date), "MMM dd, yyyy")}</div>
              {authContext.userId === comment._user && (
                <DeleteContainer
                  onClick={() => {
                    setShowConfirmModal(true);
                  }}
                >
                  <Cross dropShadow={true} scaleFactor={0.45} color="white" />
                </DeleteContainer>
              )}
            </CommentMetaDataRight>
          </CommentItemMetaData>
          <CommentItemBody>
            <div>{comment.body}</div>
          </CommentItemBody>
        </CommentItemContainer>
      ) : null}
    </>
  );
};

export default CommentItem;
