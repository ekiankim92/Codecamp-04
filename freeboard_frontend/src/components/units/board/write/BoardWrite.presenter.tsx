import {
    Address,
    ButtonWrapper,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper,
    UploadButton,
    ErrorNotification,
  } from "./BoardWrite.styles";

export default function BoardEditUI (props) {
    
    return (
        <Wrapper>
          <Title>게시판  {props.isEdit ? "수정" : "등록"}</Title>
          <WriterWrapper>
            <InputWrapper>
              <Label>작성자</Label>
              <Writer type="text" placeholder="이름을 적어주세요." onChange={props.SetNames} defaultValue={props.data?.fetchBoard.writer}/>
              <ErrorNotification>{props.nameError}</ErrorNotification>
            </InputWrapper>
            <InputWrapper>
              <Label>비밀번호</Label>
              <Password type="password" placeholder='비밀번호를 적어주세요' onChange={props.SetPassword} minlength='3' defaultValue={props.data?.fetchBoard.password}/>
              <ErrorNotification>{props.passwordError}</ErrorNotification>
            </InputWrapper>
          </WriterWrapper>
          <InputWrapper>
            <Label>제목</Label>
            <Subject type="text" placeholder="제목을 작성해주세요." onChange={props.TitleName} defaultValue={props.data?.fetchBoard.title}/>
            <ErrorNotification>{props.titleError}</ErrorNotification>
          </InputWrapper>
          <InputWrapper>
            <Label>내용</Label>
            <Contents placeholder="내용을 작성해주세요." onChange={props.BodyParagraph} defaultValue={props.data?.fetchBoard.middleComment}/>
            <ErrorNotification>{props.middleBodyError}</ErrorNotification>
          </InputWrapper>
          <InputWrapper>
            <Label>주소</Label>
            <ZipcodeWrapper>
              <Zipcode placeholder="07250" readOnly required/>
              <SearchButton>우편번호 검색</SearchButton>
            </ZipcodeWrapper>
            <Address readOnly />
            <Address />
          </InputWrapper>
          <InputWrapper>
            <Label>유튜브</Label>
            <Youtube placeholder="링크를 복사해주세요." />
          </InputWrapper>
          <ImageWrapper>
            <Label>사진첨부</Label>
            <UploadButton>
              <>+</>
              <>Upload</>
            </UploadButton>
            <UploadButton>
              <>+</>
              <>Upload</>
            </UploadButton>
            <UploadButton>
              <>+</>
              <>Upload</>
            </UploadButton>
          </ImageWrapper>
          <OptionWrapper>
            <Label>메인설정</Label>
            <RadioButton type="radio" id="youtube" name="radio-button" checked/>
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <RadioButton type="radio" id="image" name="radio-button" />
            <RadioLabel htmlFor="image">사진</RadioLabel>
          </OptionWrapper>
          <ButtonWrapper>
            {!props.isEdit && <SubmitButton onClick = {props.BackEndPush} color = {props.color}>등록하기</SubmitButton>}
            {props.isEdit && <SubmitButton onClick = {props.BoardEdit} color = {props.color}>수정하기</SubmitButton>}
            {/* <MyButton color={props.color} onClick={props.isEdit ? props.BackEndPush : props.BoardEdit}>게시물 {props.isEdit ? '수정' : '등록'}하기</MyButton> */}
          </ButtonWrapper>
        </Wrapper>
      )
}