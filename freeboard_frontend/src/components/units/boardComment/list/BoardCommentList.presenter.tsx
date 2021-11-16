import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import * as S from "./BoardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <S.Second_Wrapper>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
    </S.Second_Wrapper>
  );
}
