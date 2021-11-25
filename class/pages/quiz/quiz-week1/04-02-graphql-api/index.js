import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql `
    mutation  createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutationBoard(){
    const [createBoard] = useMutation(CREATE_BOARD)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContent, setMyContent] = useState("")

    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event) {
        setMyTitle(event.target.value)
    }

    function onChangeSetMyContent(event) {
        setMyContent(event.target.value)
    }

    
    
    async function PushToBackEnd () {
        const result = await createBoard({
            variables: {writer: myWriter, title: myTitle, contents: myContent}
         })
        console.log(result)
        console.log(result.data.createBoard.message)
    }


    return (
        <di>
            작성자: <input type='text' onChange={onChangeMyWriter}/><br/>
            제목: <input type='text' onChange={onChangeMyTitle}/><br/>
            내용: <input type='text' onChange={onChangeSetMyContent}/><br/>
            <button onClick={PushToBackEnd}>GRAPHQL-API 요청하기</button>
        </di>
    )
}



