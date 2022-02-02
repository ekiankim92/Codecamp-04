import { ChangeEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IPropsSecurityUI {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  resetUserPassword?: Pick<IMutation, "resetUserPassword">;
  updateUser?: Pick<IMutation, "updateUser">;
  password?: string;
  name?: string;
  isUpdate: boolean;
  isEdit: boolean;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeProfile: () => void;
  onUpdateProfile: () => void;
  onClickChangePassword: () => void;
  onClickDone: () => void;
  onClickUpdate: () => void;
}
