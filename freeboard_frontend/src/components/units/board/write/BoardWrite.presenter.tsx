import * as S from "./BoardWrite.styles";

export default function BoardEditUI(props) {
  return (
    <S.Wrapper>
      <S.Title>게시판 {props.isEdit ? "수정" : "등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.SetNames}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <S.ErrorNotification>{props.nameError}</S.ErrorNotification>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 적어주세요"
            onChange={props.SetPassword}
            minlength="3"
            defaultValue={props.data?.fetchBoard.password}
          />
          <S.ErrorNotification>{props.passwordError}</S.ErrorNotification>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.TitleName}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.ErrorNotification>{props.titleError}</S.ErrorNotification>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.BodyParagraph}
          defaultValue={props.data?.fetchBoard.middleComment}
        />
        <S.ErrorNotification>{props.middleBodyError}</S.ErrorNotification>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode placeholder="07250" readOnly required />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.ZipcodeWrapper>
        <S.Address readOnly />
        <S.Address />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요." />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.UploadButton>
          <>+</>
          <>Upload</>
        </S.UploadButton>
        <S.UploadButton>
          <>+</>
          <>Upload</>
        </S.UploadButton>
        <S.UploadButton>
          <>+</>
          <>Upload</>
        </S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" checked />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        {!props.isEdit && (
          <S.SubmitButton onClick={props.BackEndPush} color={props.color}>
            등록하기
          </S.SubmitButton>
        )}
        {props.isEdit && (
          <S.SubmitButton onClick={props.BoardEdit} color={props.color}>
            수정하기
          </S.SubmitButton>
        )}
        {/* <MyButton color={props.color} onClick={props.isEdit ? props.BackEndPush : props.BoardEdit}>게시물 {props.isEdit ? '수정' : '등록'}하기</MyButton> */}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
