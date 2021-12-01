import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsAccountPageUI {
  onChangeInput: () => void;
  onChangeName: () => void;
  onClickSubmit: () => void;
  PasswordValidation: () => void;
  nameError: string;
  passwordError: string | number;
  emailError: string | number;
}
