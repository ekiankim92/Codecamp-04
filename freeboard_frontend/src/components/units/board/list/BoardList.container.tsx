import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent } from "react";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  DELETE_BOARD,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);
  const { data: data2 } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  function onClickMoveToBoard() {
    router.push(`/mento`);
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/board/${event.target.id}`);
    alert("testing");
  }

  async function onClickDate(event: ChangeEvent<HTMLInputElement>) {
    try {
      await deleteBoard({
        variables: { boardId: event.target.id },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <BoardListUI
      onClickDate={onClickDate}
      data={data}
      data2={data2}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
