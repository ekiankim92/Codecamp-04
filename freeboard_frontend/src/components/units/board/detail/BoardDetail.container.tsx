import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Contents, Password } from "../write/BoardWrite.styles";
import { useState } from "react";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) {
      _id
    }
  }
`;

//splice, slice 는 데이터를 일일히 가져오기 때문에 runtime error 가 생길수있음
export default function ContainerDetailPage() {
  // const createdDate = data?.fetchBoard.createdAt.split("T")[0]
  // console.log(createdDate)

  //게시글 조회
  const router = useRouter();
  const { data: queryBoard } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.content,
    },
  });

  // console.log(queryBoard);

  // console.log(data);
  // function changeBackground(event) {
  //     event.target.style.background = "red";
  // }

  // function changeMouseLeave (event){
  //     event.target.style.background= "";
  // }
  function ButtonToBoardList() {
    router.push(`board_list`);
  }

  //게시글 삭제
  async function onClickBoardDelete() {
    try {
      await deleteBoard({
        varaibles: {
          boardId: router.query.content,
        },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/mento");
    } catch (error) {
      console.log(error.message);
    }
  }

  function BoardListDeleteButton() {
    alert("게시글이 삭제되었습니다");
    router.push(`board_list`);
  }

  // function backToList(){
  //     router.push(`/board/list`)
  // }
  //     return(
  //         <BoardNewDetailUI data={data}
  //         backToList = {backToList}/>
  //     )

  return (
    <>
      <BoardDetailUI
        queryBoard={queryBoard}
        ButtonToBoardList={ButtonToBoardList}
        BoardListDeleteButton={BoardListDeleteButton}
        // CreateCommentButton={CreateCommentButton}
        // onClickCommentDelete={onClickCommentDelete}
      />
    </>
  );
}
