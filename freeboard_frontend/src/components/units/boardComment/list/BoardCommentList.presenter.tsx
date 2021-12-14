import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import * as S from "./BoardCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import { IProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: any) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      <S.Second_Wrapper>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={uuidv4()} el={el} />
        ))}
      </S.Second_Wrapper>
    </InfiniteScroll>
  );
}
