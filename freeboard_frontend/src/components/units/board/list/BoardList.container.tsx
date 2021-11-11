import {useMutation, useQuery} from '@apollo/client'
import { ChangeEvent } from 'react'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, DELETE_BOARD, FETCH_BOARDS_OF_THE_BEST } from './BoardList.queries'

export default function BoardList () {
    const [ deleteBoard ] = useMutation(DELETE_BOARD)
    const { data : data1 } = useQuery(FETCH_BOARDS) 
    const { data : data2 } = useQuery(FETCH_BOARDS_OF_THE_BEST)

    async function onClickDate(event: ChangeEvent<HTMLInputElement>) {
        try{
            await deleteBoard ({
                variables: {boardId : event.target.id},
                refetchQueries: [{query: FETCH_BOARDS}]
            })
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <BoardListUI
        onClickDate = {onClickDate}
        data1 = {data1}
        data2 = {data2}
        />
    )

}