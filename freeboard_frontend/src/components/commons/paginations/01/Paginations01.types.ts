import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IPropsPaginationsPage01 {
  count?: number;
  refetch: (
    varaibles: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
}

export interface IPropsPaginations01UI {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
