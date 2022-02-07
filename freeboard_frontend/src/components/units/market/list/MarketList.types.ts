import { ApolloQueryResult } from "@apollo/client";
import {
  IBoard,
  IMutation,
  IQuery,
  IQueryFetchBoardsCountArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IPropsMarketListUI {
  data?: Pick<IQuery, "fetchUseditems">;
  createPointTransactionOfBuyingAndSelling?: Pick<
    IMutation,
    "createPointTransactionOfBuyingAndSelling"
  >;
  toggleUseditemPick?: Pick<IMutation, "toggleUseditemPick">;
  onLoadMore: () => void;
  onClickPurchase: (id: string) => () => void;
  onClickBasket: (el: IBoard) => () => void;
  onClickDetail: (id: string) => () => void;
  onClickTogglePick: (id: string) => () => void;
  onChangeSearch: (value: any) => void;
  refetch?: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  refetchBoardsCount?: (
    variables?: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onload?: any;
}
