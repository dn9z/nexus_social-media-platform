import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import MobileFeedItem from "../Feed/MobileFeedItem";

// interface IPost {
//   title: string;
// }

// interface IFeedProps {
//   posts: object[];
// }

interface IState {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
    
    
  }[];
}

const ListContainer = styled.div`

width: auto;
  height: 100%;
  overflow: auto;
`;

const MobileFeed = () => {
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState<IState["post"]>([]);

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
            return <MobileFeedItem key={i} post={element} />;
          })}
        </InfiniteScroll>
      </ListContainer>
    </>
  );
};

export default MobileFeed;
