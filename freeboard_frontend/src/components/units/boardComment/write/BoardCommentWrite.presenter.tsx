import * as S from "./BoardCommentWrite.styles";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props) {
  return (
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
    </S.Second_Wrapper>
  );
}
