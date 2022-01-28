import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsLogInUI {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickRegister: () => void;
}
