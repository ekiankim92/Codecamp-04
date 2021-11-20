import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  //   fetchMore 는 기존에 있는걸 놔두고 더 fetch 하는것

  // 1. 12 페이지 요청 => 120개
  // 2. 13 페이지 요청 => 127개 (추가 7개 )
  // 3. 14 페이지 요청 => 127개 (추가 0개 )
  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  }

  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el.writer}</span>
            <span>{el.title}</span>
            <span>{el.contents}</span>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

{
  /* <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false} // 무조건 스크롤만 내리면 실행되게끔 
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {items} // <-- This is the content you want to load
</InfiniteScroll> */
}
