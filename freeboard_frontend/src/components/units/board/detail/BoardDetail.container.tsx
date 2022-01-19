import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
  UPLOAD_FILE,
} from "./BoardDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { Contents, Password } from "../write/BoardWrite.styles";
import { useState, useRef } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

//splice, slice 는 데이터를 일일히 가져오기 때문에 runtime error 가 생길수있음
export default function ContainerDetailPage() {
  const router = useRouter();

  // 좋아요 싫어요
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  // 게시글 리스트 삭제
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  //게시글 페이지 조회
  const { data } = useQuery(FETCH_BOARD, {
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
  async function BoardListDeleteButton() {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.content),
        },
      });
      alert("게시물이 삭제되었습니다.");
      router.push(`board_list`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  //좋아요 올리기
  async function LkeCount() {
    try {
      const result = await likeBoard({
        variables: {
          boardId: String(router.query.content),
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
      if (error instanceof Error) console.log(error.message);
    }
  }

  //싫어요 올리기
  async function DislikeCount() {
    try {
      const result = await dislikeBoard({
        variables: {
          boardId: String(router.query.content),
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
      if (error instanceof Error) console.log(error.message);
    }
  }

  // 사진 조회
  // async function onChangeFile(event) {
  //   const myFile = event.target.files?.[0];
  //   const result = await uploadFile({
  //     variables: {
  //       file: myFile,
  //     },
  //   });
  //   console.log(result);
  // }

  return (
    <>
      <BoardDetailUI
        // YoutubeData={YoutubeData}
        data={data}
        ButtonToBoardList={ButtonToBoardList}
        BoardListDeleteButton={BoardListDeleteButton}
        LkeCount={LkeCount}
        DislikeCount={DislikeCount}
        // onClickBoardDelete={onClickBoardDelete}
        // CreateCommentButton={CreateCommentButton}
        // onClickCommentDelete={onClickCommentDelete}
      />
    </>
  );
}
