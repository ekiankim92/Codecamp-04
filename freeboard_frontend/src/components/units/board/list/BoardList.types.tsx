import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardListUI {
  startPage: number;
  keyword: string;
  data?: Pick<IQuery, "fetchBoards">;
  dataBestBoards?: Pick<IQuery, "fetchBoardsOfTheBest">;
  dataBoardsCount?: Pick<IQuery, "fetchBoardsCount">;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeSearch: (value: string) => void;
  onClickMoveToBoard: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLDivElement>) => void;
  count?: number;
  setStartPage: Dispatch<SetStateAction<number>>;
}

export interface IPropsSearchBar {
  isMatched: boolean;
}
