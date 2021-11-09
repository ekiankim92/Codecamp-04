import {gql} from "@apollo/client"


export const FETCH_BOARDS_OF_THE_BEST = gql`
    query {
        fetchBoardsOfTheBest {
            writer
            title
            contents
            createdAt
        }
    }
`

export const FETCH_BOARDS = gql`
    query {
        fetchBoards 
        {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`