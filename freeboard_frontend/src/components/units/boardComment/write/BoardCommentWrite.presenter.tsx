import * as S from "./BoardCommentWrite.styles";
import { IPropsBoardCommentWriteUI } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IPropsBoardCommentWriteUI) {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <S.CommentHeader>
          <S.VectorPng src="/images/Vector.png" />
          <S.CommentWord>댓글달기</S.CommentWord>
        </S.CommentHeader>
      )}
      <S.UserInterface>
        <S.UserInput
          type="text"
          placeholder="작성자"
          onChange={props.CommentWriter}
          defaultValue={props.el?.writer || ""}
        />
        <S.PasswordInput
          type="password"
          placeholder="비밀번호"
          onChange={props.CommentPassword}
        />
        <S.Stars onChange={props.CountingStars} value={props.rating}></S.Stars>
      </S.UserInterface>
      <S.TextAreaCommentWrapper>
        <S.TextAreaComment
          placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고,
          불법 정보 유포시 모니터리랑 후 삭제될 수 있으며, 이에 대한 민형사상
          책임은 게시자에게 있습니다."
          onChange={props.CommentContents}
          maxLength={100}
          defaultValue={props.el?.contents}
        ></S.TextAreaComment>
        <S.CommentWrapper>
          <S.CommentCount>{props.contents.length}/100</S.CommentCount>
          <S.CommentSubmitButton
            onClick={
              props.isEdit ? props.onClickUpdate : props.CreateCommentButton
            }
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.CommentSubmitButton>
        </S.CommentWrapper>
      </S.TextAreaCommentWrapper>
    </S.Wrapper>
  );
}
