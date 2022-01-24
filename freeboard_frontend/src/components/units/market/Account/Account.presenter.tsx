import * as S from "./Account.styles";
import { IPropsAccountPageUI } from "./Account.types";

export default function AccountPageUI(props: IPropsAccountPageUI) {
  return (
    <>
      <S.Wrapper>
        <h1>Create Account</h1>
        <S.Inner_Wrapper>
          <S.Email_Wrapper>
            <S.Email_Label>Email:</S.Email_Label>
            <S.Email
              type="text"
              placeholder="Enter Your Email"
              name="email"
              onChange={props.onChangeInput}
            />
          </S.Email_Wrapper>
          {props.emailError && (
            <S.Error_Message>*{props.emailError}*</S.Error_Message>
          )}
          <S.Name_Wrapper>
            <S.Name_Label>First Name:</S.Name_Label>
            <S.First_Name type="text" placeholder="Enter Your First Name" />
          </S.Name_Wrapper>
          <S.Username_Wrapper>
            <S.Username_Label>Username:</S.Username_Label>
            <S.UserName
              type="text"
              placeholder="Enter Your User Name"
              onChange={props.onChangeInput}
              name="name"
            />
          </S.Username_Wrapper>
          {props.nameError && (
            <S.Error_Message>*{props.nameError}*</S.Error_Message>
          )}
          <S.Password_Wrapper>
            <S.Password_Label>Password:</S.Password_Label>
            <S.Password
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={props.onChangeInput}
            />
          </S.Password_Wrapper>
          {props.passwordError && (
            <S.Error_Message>*{props.passwordError}*</S.Error_Message>
          )}
          <S.Pass_Confirm_Wrapper>
            <S.Pass_Confirm_Label>Confirm Password:</S.Pass_Confirm_Label>
            <S.Password_Confirm
              type="password"
              placeholder="Confirm Your Password"
              name="confirmPassword"
              onChange={props.PasswordValidation}
            />
          </S.Pass_Confirm_Wrapper>
          {props.passwordConfirmError && (
            <S.Error_Message>*{props.passwordConfirmError}*</S.Error_Message>
          )}
        </S.Inner_Wrapper>
        <S.Submit_Button onClick={props.onClickSubmit}>Submit</S.Submit_Button>
      </S.Wrapper>
    </>
  );
}
