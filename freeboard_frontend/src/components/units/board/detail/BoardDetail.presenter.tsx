import router from "next/router";
import * as S from "./BoardDetail.styles";
import ReactPlayer from "react-player/youtube";

import { IPropsBoardDetailUI } from "./BoardDetail.typescript";

export default function BoardDetailUI(props) {
  function RouterPush() {
    router.push(`/board/${router.query.content}/edit`);
  }

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Header_Info>
            <S.Header_Image src="/images/user.png" />
            <S.Header_Info>
              작성자: {props.queryBoard?.fetchBoard.writer}
            </S.Header_Info>
            <S.Header_Date>Date</S.Header_Date>
          </S.Header_Info>
          <S.Navigation>
            <S.List href="#title">Title</S.List>
            {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
            <S.List href="#content">Content</S.List>
            {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
            <S.List href="#image">Image</S.List>
            {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
            <S.List href="#video">Video</S.List>
            {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
            <S.List href="#comment">Comment</S.List>
            {/* onMouseEnter={changeBackground} onMouseLeave={changeMouseLeave} */}
          </S.Navigation>
        </S.Header>
        <S.Title>
          <S.MyDiv id="title">
            제목: {props.queryBoard?.fetchBoard.title}
          </S.MyDiv>
        </S.Title>
        <S.Image_Section>
          <img
            id="image"
            src="https://content.codecademy.com/courses/freelance-1/unit-2/explorer.jpeg"
          ></img>
        </S.Image_Section>
        <S.Content_Section>
          <div id="content">내용: {props.queryBoard?.fetchBoard.contents}</div>
        </S.Content_Section>
        <S.Video_Section id="video">
          {/* <video id="video" controls>
            
          </video> */}
          <ReactPlayer
            url={props.queryBoard?.fetchBoard.youtubeUrl}
            width={700}
            height={400}
            controls
          />
        </S.Video_Section>
        <S.Icon_Footer id="comment">
          <S.SmileyFace onClick={props.LkeCount} />
          <S.NoFace />
          <S.FrownFace onClick={props.DislikeCount} />
          <div>{props.queryBoard?.fetchBoard.likeCount}</div>
          <div>{props.queryBoard?.fetchBoard.dislikeCount}</div>
        </S.Icon_Footer>
      </S.Wrapper>
      <S.End_Buttons>
        <S.Button onClick={props.ButtonToBoardList}>목록으로</S.Button>
        <S.Button onClick={RouterPush}>수정하기</S.Button>
        <S.Button onClick={props.BoardListDeleteButton}>삭제하기</S.Button>
      </S.End_Buttons>
    </>
  );
}
