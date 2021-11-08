// 페이지도 하나의 컴포넨트 

import BoardWriteUI from './BoardWrite.presenter'
import { useMutation } from '@apollo/client' 
import { useState } from 'react'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite (){ //this is not a whole page anymore

    const [createBoard] = useMutation(CREATE_BOARD)
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
        const result = await createBoard({
            variables: {writer:myWriter, title:myTitle, contents:myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }


    return (
        <BoardWriteUI 
            aaa={onChangeMyWriter}
            titleChange={onChangeMyTitle}
            contentChange={onChangeMyContents}
            zzz= {zzz}
            qqq={myQqq}
        />
    )

}