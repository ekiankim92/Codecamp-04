
import BoardWriteUI from './BoardWrite.presenter'
import { useMutation } from '@apollo/client' 
import { useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'


export default function BoardWrite (props){ 

    const router = useRouter()

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updatedBoard] = useMutation(UPDATE_BOARD)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const [myQqq, setQqq] = useState(false)

    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
        if (event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setQqq(true)
        } else {
            setQqq(false)
        }
    }

    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
        if (myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setQqq(true)
        } else {
            setQqq(false)
        }
    }

    function onChangeMyContents(event) {
        setMyContents(event.target.value)
        if (myWriter !== "" && myTitle !== "" && event.target.value !== ""){
            setQqq(true)
        } else {
            setQqq(false)
        }
    }

    async function zzz() {
        // alert("등록하기 버튼을 누르셨습니다")
        const result = await createBoard({
            variables: {writer:myWriter, title:myTitle, contents:myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        router.push(`/08-06-boards/${result.data.createBoard.number}`)
    }

    //수정하기
    async function xxx (){
        // alert("수정하기 버튼을 누르셨습니다!")
        const result = await updatedBoard({
            variables: {
                number: Number(router.query.myNumber),
                writer: myWriter,
                title: myTitle,
                contents: myContents,

            }
        })
        console.log(result)
        router.push(`/08-06-boards/${router.query.myNumber}`)
    }


    return (
        <BoardWriteUI 
            aaa={onChangeMyWriter}
            titleChange={onChangeMyTitle}
            contentChange={onChangeMyContents}
            zzz= {zzz}
            qqq={myQqq}
            ggg = {props.isEdit}
            xxx = {xxx}
        />
    )

}