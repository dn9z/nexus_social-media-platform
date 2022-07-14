import React, { useState } from "react";
import { Context } from "../../context/Context";
import { CommentListProps, CommentState } from "../../types";
import axiosApiInstance from "../../util/axiosInstance";
import CommentItem from "./CommentItem";

const CommentsList: React.FC<CommentListProps> = ({ post }) => {
  const [showAll, setShowAll] = useState(false);
  const [comments, setComments] = useState<CommentState["comment"]>([]);
  const context = React.useContext(Context);

  async function getComments() {
    try {
      const res = await axiosApiInstance.get(`http://localhost:3000/api/comment/list/${post._id}`);
      setComments(res.data.listComments);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {showAll ? (
        <>
          <button onClick={() => setShowAll(false)}>Collapse</button>
          <ul>
            {comments.map((element, i) => {
              return <CommentItem key={i} comment={element} />;
            })}
          </ul>
        </>
      ) : (
        <>
          <ul>
            {comments.length >= 2 ? (
              <>
                <CommentItem comment={comments[0]} />
                <CommentItem comment={comments[1]} />
              </>
            ) : comments.length === 1 ? (
              <>
                <CommentItem comment={comments[0]} />
              </>
            ) : null}
          </ul>
          {comments.length > 2 ? <button onClick={() => setShowAll(true)}>Show More</button> : null}
        </>
      )}
    </>
  );
};

export default CommentsList;
