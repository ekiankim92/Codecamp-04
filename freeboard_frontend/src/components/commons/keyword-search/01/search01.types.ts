import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface ISearch01Props {
  refetch: (
    variables: Partial<IQueryFetchBoardArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;

  search: string;

  onChangeSearch: (value: string) => void;
}
