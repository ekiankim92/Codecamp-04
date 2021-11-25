import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql `
    mutation{
        createBoard(writer:"Beatles", title:"Yesterday",contents:"Sing and Song"){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutationBoard(){
    const [createBoard] = useMutation(CREATE_BOARD)

    
    
    async function FinalResut () {
        const result = await createBoard()
        console.log(result)
    }


    return (
        <di>
            <button onClick={FinalResut}>GRAPHQL-API 요청하기</button>
        </di>
    )
}



