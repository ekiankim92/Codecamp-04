import { ChangeEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IPropsHeaderUI {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  logoutUser?: Pick<IMutation, "logoutUser">;
  onClickLandingPage: () => void;
  onClickMyPage: () => void;
  onClickLoginPage: () => void;
  onClickCartPage: () => void;
  onClickProductList: () => void;
  onClickFreeBoard: () => void;
  onClickLogout: () => void;
  onError?: (event: ChangeEvent<HTMLImageElement>) => void;
}
