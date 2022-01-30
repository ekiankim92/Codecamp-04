import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMyOrderUI {
  startPage: number;
  itemsSold: boolean;
  itemsBought: boolean;
  data?: Pick<IQuery, "fetchUseditemsISold">;
  dataSoldCount?: Pick<IQuery, "fetchUseditemsCountISold">;
  dataItemsBought?: Pick<IQuery, "fetchUseditemsIBought">;
  dataBoughtCount?: Pick<IQuery, "fetchUseditemsCountIBought">;
  onClickItemsBought: () => void;
  onClickItemsSold: () => void;
  refetch: any;
  refetchBoughtItems: any;
  setStartPage: any;
  count: number | undefined;
  count2: number | undefined;
}
