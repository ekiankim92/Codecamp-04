import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);

  const [keyword, setMyKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: dataBestBoards } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const onChangeSearch = (value: string) => {
    setMyKeyword(value);
    console.log(value);
  };

  const onClickMoveToBoard = () => {
    router.push(`/mento`);
  };

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      // router.push(`/board/${event.currentTarget.id}`);
      console.log(event.target.id);
  };

  return (
    <BoardListUI
      data={data}
      dataBestBoards={dataBestBoards}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToDetail={onClickMoveToDetail}
      dataBoardsCount={dataBoardsCount}
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
