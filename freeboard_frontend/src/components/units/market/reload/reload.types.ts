import { ChangeEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IPropsReloadUI {
  createPointTransactionOfLoading?: Pick<
    IMutation,
    "createPointTransactionOfLoading"
  >;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  buyerData?: Pick<IQuery, "fetchUseditem">;
  amount?: number;
  onChangeAmount: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPayment: () => void;
}
