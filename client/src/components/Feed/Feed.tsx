import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import FeedItem from "./FeedItem";
import {FeedState} from "../../types"

// interface IPost {
//   title: string;
// }

// interface IFeedProps {
//   posts: object[];
// }



const ListContainer = styled.div`

  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Feed = () => {
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState<FeedState["post"]>([]);

  async function loadMore() {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=3`
      );
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
