
import {Wrapper, MyDiv, Textarea} from '../../../styles/board_content'
import { useRouter } from 'next/router'
import { useQuery, gql} from '@apollo/client'


const FETCH_BOARD = gql`
    query fetchBoard ($boardId: ID!){
        fetchBoard (boardId: $boardId){
            _id
            writer
            title
            contents
        }
    }
`

export default function PortfolioContent(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.content
        }
    })

    console.log(data)

    return (
        <>
        <Wrapper>
            <MyDiv>게시글 제목입니다.</MyDiv>
            <Textarea>
            </Textarea>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <div></div>
            <img></img>
            <img></img>
        </Wrapper>
        </>
    )


}