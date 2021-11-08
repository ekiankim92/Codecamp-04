  import { useMutation} from "@apollo/client"
  import { useState } from 'react'
  import { useRouter } from 'next/router'
  import BoardWriteUI from './BoardWrite.presenter' 
  import { CREATE_BOARD } from "./BoardWrite.queries"

  export default function BoardWrite() {
    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)

    const [name           , setName] = useState('')
    const [nameError      , setNameError] = useState('')

    const [password       , setPassword] = useState('')
    const [passwordError  , setPasswordError] = useState('')

    const [title          , setTitle] = useState('')
    const [titleError     , setTitleError] = useState('')

    const [middleComment  ,   setMiddleComment] = useState('')
    const [middleBodyError, setMiddleBodyError] = useState('')

    const [color, setColor] = useState(false)

    function SetNames (event){
        setName(event.target.value) 
            if (event.target.value !==" "){
                setNameError("")
            }
            if (event.target.value !== "" && password !=="" && title !== "" && middleComment !== ""){
                setColor(true)
            } else {
                setColor(false)
            }
    } 

    function SetPassword (event) {
        setPassword(event.target.value)
            if (event.target.value !== "") {
                setPasswordError("")
            }
            if (name !== "" && event.target.value !=="" && title !== "" && middleComment !== ""){
                setColor(true)
            } else {
                setColor(false)
            }
    }

    function TitleName (event) {
        setTitle(event.target.value)
        if (event.target.value !== "") {
          setTitleError("");
        }
        if (name !== "" && password !=="" && event.target.value !== "" && middleComment !== ""){
            setColor(true)
        } else {
            setColor(false)
        }
    }

    function BodyParagraph (event) {
        setMiddleComment(event.target.value)
        if (event.target.value !== "") {
          setMiddleBodyError("");
        }
        if (name !== "" && password !=="" && title !== "" && event.target.value !== ""){
            setColor(true)
        } else {
            setColor(false)
        }
    }

//     function ChangeBackground(event) {
//       event.target.style.background = "yellow";
//     }

//     function changeMouseLeave (event){
//       event.target.style.background= "";
//   }

        async function BackEndPush (){
          try {
            
          if (name === '') {
              setNameError('이름을 등록해 주세요')
          }
          //  else {
          //   setNameError("")
          // }
  
          if (password === "") {
              setPasswordError('비밀번호를 입력해 주세요')
          } 
  
          if (title === '') {
              setTitleError('제목을 등록해 주세요')
          } 
  
          if (middleComment === '') {
              setMiddleBodyError('내용을 입력해 주세요')
          } 

          if (name !== "" && password !== "" && title !== "" && middleComment !== "") {
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
            router.push(`/board/${result.data.createBoard._id}`)
            alert("등록되었습니다")
          }
          } catch (error) {
            console.log(error.message)
          }
        }

        return (
            <BoardWriteUI
            SetNames = {SetNames}
            SetPassword = {SetPassword}
            TitleName = {TitleName}
            BodyParagraph = {BodyParagraph}
            BackEndPush = {BackEndPush}
            nameError= {nameError}
            passwordError = {passwordError}
            titleError = {titleError}
            middleBodyError = {middleBodyError}
            color =  {color} 
            />
        )
  }