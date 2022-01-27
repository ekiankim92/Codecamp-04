import { ChangeEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IPropsProductDetail {
  deleteUseditem: Pick<IMutation, "deleteUseditem">;
  onClickDeleteProduct: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToMarketList: () => void;
  onError: (event: ChangeEvent<HTMLImageElement>) => void;
}

export interface IPropsProductDetailUI {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickDeleteProduct: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToMarketList: () => void;
}
