import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsLogInUI {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onChangeInputs: () => void;
  onClickLogin: () => void;
  onClickRegister: () => void;
}
