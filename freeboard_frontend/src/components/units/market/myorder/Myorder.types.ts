import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

export interface IPropsMyOrderUI {
  startPage: number;
  itemsSold: boolean;
  itemsBought: boolean;
  itemsIPicked: boolean;
  data?: Pick<IQuery, "fetchUseditemsISold">;
  dataSoldCount?: Pick<IQuery, "fetchUseditemsCountISold">;
  dataItemsBought?: Pick<IQuery, "fetchUseditemsIBought">;
  dataBoughtCount?: Pick<IQuery, "fetchUseditemsCountIBought">;
  dataItemsPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  dataFetchCountIPicked?: Pick<IQuery, "fetchUseditemsCountIPicked">;
  onClickItemsBought: () => void;
  onClickItemsSold: () => void;
  onClickItemsIPicked: () => void;
  refetch: (
    varaiables?: Partial<IQueryFetchUseditemsISoldArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsISold">>>;
  refetchBoughtItems: (
    varaiables?: Partial<IQueryFetchUseditemsIBoughtArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;
  setStartPage: any;
  refetchItemsPicked: (
    variables?: Partial<IQueryFetchUseditemsIPickedArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIPicked">>>;
  count: number | undefined;
  count2: number | undefined;
  count3: number | undefined;
}
