import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
// import { useState } from 'react'
import { FETCH_BOARD } from './BoardDetail.queries'
import { useQuery } from '@apollo/client'


//splice, slice 는 데이터를 일일히 가져오기 때문에 runtime error 가 생길수있음
export default function ContainerDetailPage(){

    // const createdDate = data?.fetchBoard.createdAt.split("T")[0]
    // console.log(createdDate)

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.content
        }
    })
    
    console.log(data)

    // function changeBackground(event) {
    //     event.target.style.background = "red";
    // }

    // function changeMouseLeave (event){
    //     event.target.style.background= "";
    // }
    function ButtonToBoardList () {
        router.push(`board_list`)
    }

    function BoardListDeleteButton () {
        alert("게시글이 삭제되었습니다")
        router.push(`board_list`)
    }

    // function backToList(){
    //     router.push(`/board/list`)
    // }
    //     return(
    //         <BoardNewDetailUI data={data}
    //         backToList = {backToList}/>
    //     )
    

    return (
        <BoardDetailUI
            data = {data}
            ButtonToBoardList ={ButtonToBoardList}
            BoardListDeleteButton = {BoardListDeleteButton}
        />
   
    )

}