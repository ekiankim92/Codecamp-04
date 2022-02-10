import * as S from "./BoardDetail.styles";
import ReactPlayer from "react-player/youtube";
import { IPropsBoardDetailUI } from "./BoardDetail.types";
import { ChangeEvent } from "react";

export default function BoardDetailUI(props: IPropsBoardDetailUI) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <S.OuterWrapper>
      <S.Wrapper>
        <S.Header>
          <S.HeaderInfo>
            <S.HeaderImage src="/images/user.png" />
            <S.HeaderInfo>작성자: {props.data?.fetchBoard.writer}</S.HeaderInfo>
            <S.HeaderDate>
              {props.data?.fetchBoard.createdAt.split("T")[0]}
            </S.HeaderDate>
          </S.HeaderInfo>
          <S.Navigation>
            <S.List href="#title">Title</S.List>
            <S.List href="#content">Content</S.List>
            <S.List href="#video">Video</S.List>
            <S.List href="#comment">Comment</S.List>
          </S.Navigation>
        </S.Header>
        <S.TitleWrapper>
          <S.Title id="title">
            제목:
            {props.data?.fetchBoard.title}
          </S.Title>
        </S.TitleWrapper>
        <S.ImageContentWrapper>
          <S.ImageSection>
            <img
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images?.[0]}`}
              style={{ width: "250px", height: "250px" }}
              onError={onError}
            ></img>
          </S.ImageSection>
          <S.ContentSection>
            <div id="content">{props.data?.fetchBoard.contents}</div>
          </S.ContentSection>
        </S.ImageContentWrapper>
        <S.VideoSection id="video">
          <ReactPlayer
            url={String(props.data?.fetchBoard.youtubeUrl)}
            width={700}
            height={400}
            controls
          />
        </S.VideoSection>
        <S.IconFooter id="comment">
          <S.SmileyFace onClick={props.LkeCount} />
          <S.NoFace onClick={props.onClickCount} />
          <S.FrownFace onClick={props.DislikeCount} />
        </S.IconFooter>
        <S.LikeDisLikeWrapper>
          <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          <S.MiddleFace>{props.count}</S.MiddleFace>
          <S.DislikeCount>{props.data?.fetchBoard.dislikeCount}</S.DislikeCount>
        </S.LikeDisLikeWrapper>
        <S.ButtonWrapper>
          <S.Button onClick={props.ButtonToBoardList}>목록으로</S.Button>
          <S.Button onClick={props.onClickEdit}>수정하기</S.Button>
          <S.Button onClick={props.BoardListDeleteButton}>삭제하기</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.OuterWrapper>
  );
}
