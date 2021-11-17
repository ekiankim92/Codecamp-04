import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
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
  const router = useRouter();
  // 좋아요 싫어요
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  //게시글 페이지 조회
  const { data: queryBoard } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.content,
    },
  });

  // 유툽 조회
  // const { data: YoutubeData } = useQuery(FETCH_BOARD, {
  //   variables: {
  //     boardId: router.query.content,
  //   },
  // });

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
        variables: {
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

  //좋아요 올리기
  async function LkeCount() {
    try {
      const result = await likeBoard({
        variables: {
          boardId: router.query.content,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.content },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  //싫어요 올리기
  async function DislikeCount() {
    try {
      const result = await dislikeBoard({
        variables: {
          boardId: router.query.content,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.content },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
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
        // YoutubeData={YoutubeData}
        queryBoard={queryBoard}
        ButtonToBoardList={ButtonToBoardList}
        BoardListDeleteButton={BoardListDeleteButton}
        LkeCount={LkeCount}
        DislikeCount={DislikeCount}
        // CreateCommentButton={CreateCommentButton}
        // onClickCommentDelete={onClickCommentDelete}
      />
    </>
  );
}
