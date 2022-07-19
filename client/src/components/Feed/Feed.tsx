import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import {FeedProps, FeedState} from "../../types"
import axiosApiInstance from "../../util/axiosInstance";
import { Context } from "../../context/Context";
import * as Hook from "usehooks-ts"

const ListContainer = styled.div<{marginTop:string}>`
margin-top: ${props=>props.marginTop};
  width: 98%;
  height: 99%;
  overflow: hidden;
`;

const Feed: React.FC<FeedProps> = ({profileId}) => {
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState<FeedState["post"]>([]);
  const match1500 = Hook.useMediaQuery("(max-width: 1500px)");
  const context = useContext(Context);


  // console.log(hasMore)

  async function loadMore() {
    try {
      const res = await axiosApiInstance.get(`http://localhost:3000/api/post/paginate?page=${pageNumber}`);

        setPosts([...posts, ...res.data]);
        setPageNumber(pageNumber + 1);
        setHasMore(res.data.length > 0);
    } catch (e) {
      console.log(e);
    }
  }

  async function loadMoreById() {
    try {
      const res = await axiosApiInstance.get(`http://localhost:3000/api/post/paginatebyid/${profileId}?page=${pageNumber}`);
        setPosts([...posts, ...res.data]);
        setPageNumber(pageNumber + 1);
        setHasMore(res.data.length > 0);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if(context.needRefresh === true){
      setPageNumber(1);
      setPosts([]);
      !profileId ? loadMore() : loadMoreById();
      context.setNeedRefresh(false)
      return () => {
        setPageNumber(1);
      };
    }
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
      <ListContainer marginTop={match1500 ? "61px" : "0px"}>
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