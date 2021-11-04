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
    ErrorNotification
  } from "../../styles/mento";

  import { useMutation, gql} from "@apollo/client"
  import { useState } from 'react'

  const CREATE_BOARD =gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
        _id
        writer
        title
        contents
        }
    }
`

  export default function BoardsNewPage() {
    const [createBoard] = useMutation(CREATE_BOARD)

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState('')

    const [middleComment, setMiddleComment] = useState('')
    const [middleBodyError, setMiddleBodyError] = useState('')

    function SetNames (event){
        setName(event.target.value)

        if (event.target.value !== "") {
          setNameError("");
        }
    } 

    function SetPassword (event) {
        setPassword(event.target.value)

        if (event.target.value !== "") {
          setPasswordError("");
        }
    }

    function TitleName (event) {
        setTitle(event.target.value)

        if (event.target.value !== "") {
          setTitleError("");
        }
    }

    function BodyParagraph (event) {
        setMiddleComment(event.target.value)

        if (event.target.value !== "") {
          setMiddleBodyError("");
        }
    }

        async function BackEndPush (){

            if (name.length === 0) {
              setNameError('이름을 등록해 주세요')
              return
          }
          //  else {
          //   setNameError("")
          // }
  
          if (password.length <= 3) {
              setPasswordError('비밀번호를 입력해 주세요')
          } 
  
          if (title === '') {
              setTitleError('제목을 등록해 주세요')
          } 
  
          if (middleComment === '') {
              setMiddleBodyError('내용을 입력해 주세요')
          } 
          
          const result = await createBoard({
            variables: {
              createBoardInput: {
                writer: name,
                password: password,
                title: title,
                contents: middleComment
              }
            }
          })
          console.log(result)

    }

   

    return (
      <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={SetNames} required/>
            <ErrorNotification>{nameError}</ErrorNotification>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder='비밀번호를 적어주세요' onChange={SetPassword} minlength='3' required/>
            <ErrorNotification>{passwordError}</ErrorNotification>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={TitleName} required/>
          <ErrorNotification>{titleError}</ErrorNotification>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요." onChange={BodyParagraph} required/>
          <ErrorNotification>{middleBodyError}</ErrorNotification>
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
          <SubmitButton onClick = {BackEndPush}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    )
  }