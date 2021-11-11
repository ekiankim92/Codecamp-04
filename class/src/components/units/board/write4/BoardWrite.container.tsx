
import BoardWriteUI from './BoardWrite.presenter'
import { useMutation } from '@apollo/client' 
import { ChangeEvent, useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'
import {IPropsBoardWrite, IMyVariables} from './BoardWrite.types'

export default function BoardWrite (props: IPropsBoardWrite){ 

    const router = useRouter()

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updatedBoard] = useMutation(UPDATE_BOARD)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const [myQqq, setQqq] = useState <boolean> (false)

    function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
        setMyWriter(event.target.value)
        if (event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setQqq(true)
        } else {
            setQqq(false)
        }
    }

    function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
        setMyTitle(event.target.value)
        if (myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setQqq(true)
        } else {
            setQqq(false)
        }
    }

    function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
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
        router.push(`/09-02-boards2/${result.data.createBoard.number}`)
    }

    //수정하기
    async function xxx (){

        const myVariables: IMyVariables = {
            number: Number(router.query.myNumber)
        }

        if (myWriter !== "") {
            myVariables.writer = myWriter
        }
        // 중괄호는 하나 이상 있을때. 충괄호를 생략하면 하나만 실행이됨 

        if (myTitle !== "") {
            myVariables.title = myTitle
        }

        if(myContents !== "") {
            myVariables.contents = myContents
        }


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
        router.push(`/09-02-boards2/${router.query.myNumber}`)
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
            data = {props.data}
        />
    )

}