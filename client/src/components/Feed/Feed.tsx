import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import {FeedProps, FeedState} from "../../types"
import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";

const ListContainer = styled.div`
  width: 99%;
  height: 99%;
  overflow: auto;
`;

const Feed: React.FC<FeedProps> = ({profileId}) => {
  const [hasMore, setHasMore] = useState(true);
  // const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState<FeedState["post"]>([]);
  const context = useContext(Context);

  async function loadMore() {
    try {
      const res = await axiosApiInstance.get(`http://localhost:3000/api/post/paginate?page=${context.pageNumber}`);

        setPosts([...posts, ...res.data]);
        context.setPageNumber(context.pageNumber + 1);
        setHasMore(res.data.length > 0);
    } catch (e) {
      console.log(e);
    }
  }

  async function loadMoreById() {
    try {
      const res = await axiosApiInstance.get(`http://localhost:3000/api/post/paginatebyid/${profileId}?page=${context.pageNumber}`);

        setPosts([...posts, ...res.data]);
        context.setPageNumber(context.pageNumber + 1);
        setHasMore(res.data.length > 0);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setPosts([]);
    !profileId ? loadMore() : loadMoreById();
    return () => {
      context.setPageNumber(1);
    };
  }, [context.showPostModal, context.needRefresh]);

  // useEffect(() => {
  //   console.log(context.needRefresh)
  //   if(context.needRefresh) {
  //     context.setNeedRefresh(false)
  //     loadMore()
  //   }
  // }, [context.needRefresh])

  return (
    <>
      <ListContainer>
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            !profileId ? loadMore() : loadMoreById();
          }}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {posts.map((element, i) => {
            return <FeedItem key={i} post={element} />;
          })}
        </InfiniteScroll>
      </ListContainer>
    </>
  );
};

export default Feed;