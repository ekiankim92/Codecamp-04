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
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  // Delete board
  const [deleteBoard] = useMutation(DELETE_BOARD);
  // Fetch best comment
  const { data: data2 } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();
  // Pagination
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);
  // Pagination startPage
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  // Search Keyword
  // const [search, setSearch] = useState("");
  const [keyword, setMyKeyword] = useState("");

  function onChangeSearch(value) {
    setMyKeyword(value);
    console.log(value);
  }

  // function onClickSearch() {
  //   props.refetch({ search });
  // }

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

  return (
    <BoardListUI
      onClickDate={onClickDate}
      data={data}
      data2={data2}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBestDetail={onClickMoveToBestDetail}
      // onClickPage={onClickPage}
      // onClickPrevPage={onClickPrevPage}
      // onClickNextPage={onClickNextPage}
      dataBoardsCount={dataBoardsCount}
      // lastPage={lastPage}
      startPage={startPage}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      setStartPage={setStartPage}
      keyword={keyword}
      onChangeSearch={onChangeSearch}
      refetchBoardsCount={refetchBoardsCount}
    />
  );
}
