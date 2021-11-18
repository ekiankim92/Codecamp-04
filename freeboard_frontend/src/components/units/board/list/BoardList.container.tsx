import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  DELETE_BOARD,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data: data2 } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  function onClickMoveToBoard() {
    router.push(`/mento`);
  }

  function onClickMoveToBoardDetail(event) {
    // alert(event.target.id);
    router.push(`/board/${event.target.id}`);
  }

  function onClickMoveToBestDetail(event) {
    alert(event.target.id);
    router.push(`/board/${event.target.id}`);
  }

  async function onClickDate(event) {
    alert(event.target.id);
    try {
      await deleteBoard({
        variables: { boardId: event.currentTarget.id },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }

  //Pagination
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;
  const [startPage, setStartPage] = useState(1);

  function onClickPage(event) {
    if (event.target.id) refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    if (startPage <= 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) {
      return;
    }
    setStartPage((prev) => prev + 10);
  }
  console.log(startPage);
  console.log(lastPage);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  return (
    <BoardListUI
      onClickDate={onClickDate}
      data={data}
      data2={data2}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBestDetail={onClickMoveToBestDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      dataBoardsCount={dataBoardsCount}
      lastPage={lastPage}
      startPage={startPage}
    />
  );
}
