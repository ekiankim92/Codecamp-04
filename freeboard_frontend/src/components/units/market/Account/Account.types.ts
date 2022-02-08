import { ChangeEvent } from "react";

export interface IPropsAccountPageUI {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  PasswordValidation: (event: ChangeEvent<HTMLInputElement>) => void;
  nameError: string;
  passwordError: string;
  emailError: string;
  passwordConfirm: string;
  passwordConfirmError: string;
}
