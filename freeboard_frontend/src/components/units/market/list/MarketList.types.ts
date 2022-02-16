import {
  IMutation,
  IQuery,
  IUseditem,
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
  onClickBasket: (el: IUseditem) => () => void;
  onClickDetail: (id: string) => () => void;
  onClickTogglePick: (id: string) => () => void;
  onChangeSearch: (value: any) => void;
  // refetchBoardsCount?: (
  //   variables?: Partial<IQueryFetchBoardsCountArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  refetchBoardsCount?: any;
  onload?: any;
  onClickProductSubmit: () => void;
  keyword?: any;
  refetch?: any;
}
