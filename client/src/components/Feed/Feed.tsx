import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import {FeedState} from "../../types"
import axiosApiInstance from "../../util/axiosInstance";

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Feed: React.FC = () => {
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState<FeedState["post"]>([]);

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

  return (
    <>
      <ListContainer>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
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
