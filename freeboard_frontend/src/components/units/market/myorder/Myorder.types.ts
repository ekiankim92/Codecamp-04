import { IQuery } from "../../../../commons/types/generated/types";

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
  refetch: any;
  refetchBoughtItems: any;
  setStartPage: any;
  refetchItemsPicked: any;
  count: number | undefined;
  count2: number | undefined;
  count3: number | undefined;
}
