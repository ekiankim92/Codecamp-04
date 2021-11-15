import router from "next/router";
import * as S from "./BoardDetail.styles";

import { IPropsBoardDetailUI } from "./BoardDetail.typescript";

export default function BoardDetailUI(props: IPropsBoardDetailUI) {
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
            <S.List href="#footer">Footer</S.List>
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
        <S.Video_Section>
          <video id="video" src="/media/cc0-videos/flower.mp4" controls></video>
        </S.Video_Section>
        <S.Icon_Footer id="footer">
          <img src="/images/email.png"></img>
          <img src="/images/phone.png"></img>
        </S.Icon_Footer>
      </S.Wrapper>
      <S.End_Buttons>
        <S.Button onClick={props.ButtonToBoardList}>목록으로</S.Button>
        <S.Button onClick={RouterPush}>수정하기</S.Button>
        <S.Button onClick={props.BoardListDeleteButton}>삭제하기</S.Button>
      </S.End_Buttons>
      <S.Second_Wrapper>
        <S.Comment_Header>
          <S.Vector_Png src="/images/Vector.png" />
          <S.Comment_Word>댓글</S.Comment_Word>
        </S.Comment_Header>
        <S.User_Interface>
          <S.User_Input
            type="text"
            placeholder="Writer"
            onChange={props.CommentWriter}
          />
          <S.Password_Input
            type="password"
            placeholder="Password"
            onChange={props.CommentPassword}
          />
          <S.Rating_Image src="/images/Star.png" />
          <S.Rating_Image src="/images/Star.png" />
          <S.Rating_Image src="/images/Star.png" />
          <S.Rating_Image src="/images/Star.png" />
          <S.Rating_Image src="/images/Star.png" />
        </S.User_Interface>
        <S.TextArea_Comment_Wrapper>
          <S.TextArea_Comment
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고,
            불법 정보 유포시 모니터리랑 후 삭제될 수 있으며, 이에 대한 민형사상
            책임은 게시자에게 있습니다."
            onChange={props.CommentContents}
            maxLength={100}
          ></S.TextArea_Comment>
          <S.Comment_Wrapper>
            <S.Comment_Count>{props.contents.length}/100</S.Comment_Count>
            <S.Comment_Submit_Button onClick={props.CreateCommentButton}>
              등록하기
            </S.Comment_Submit_Button>
          </S.Comment_Wrapper>
        </S.TextArea_Comment_Wrapper>
        <S.Comment_Section>
          {props.queryComment?.fetchBoardComments.map((el) => (
            <div key={el._id}>
              <S.Front_Comment>
                <S.Header_Image src="/images/user.png" />
                <S.Comment_User key={el.id}>{el.writer}</S.Comment_User>
                <S.Rating_Image src="/images/Star.png" />
                <S.Rating_Image src="/images/Star.png" />
                <S.Rating_Image src="/images/Star.png" />
                <S.Rating_Image src="/images/Star.png" />
                <S.Rating_Image src="/images/Star.png" />
              </S.Front_Comment>
              <S.Comment_Content key={el.id}>{el.contents}</S.Comment_Content>
              <S.Created_At_Date>
                {el.createdAt.split("T")[0]}
              </S.Created_At_Date>
              {/* <S.Comment_Icons src="/images/edit_pen.png" />
              <S.Comment_Icons src="/images/x.png" /> */}
              <S.Comment_Button>
                <S.Comment_Icons id={el._id} onClick={props.onClickUpdate}>
                  <img src="/images/edit_pen.png" />
                </S.Comment_Icons>
                <S.Comment_Icons
                  id={el._id}
                  onClick={props.onClickCommentDelete}
                >
                  <img src="/images/x.png" />
                </S.Comment_Icons>
              </S.Comment_Button>
            </div>
          ))}
        </S.Comment_Section>
      </S.Second_Wrapper>
    </>
  );
}
