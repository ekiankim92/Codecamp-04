import { useMutation, gql } from '@apollo/client' 
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"Nicholas Cage", title:"Ghost Rider", contents:"fighting") {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationBoard1Page(){
    const [createBoard] = useMutation(CREATE_BOARD)

    const [aaa,setAaa] = useState('안녕하세요')


    async function zzz() {
        const result = await createBoard()
        console.log(result)
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)

    }


    return (
        <>
        <div>{aaa}</div>
        <button onClick={zzz}>GRAPHQL-API 요청하기</button>
        </>
    ) 

}