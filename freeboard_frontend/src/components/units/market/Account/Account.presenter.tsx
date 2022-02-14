import * as S from "./Account.styles";
import { IPropsAccountPageUI } from "./Account.types";

export default function AccountPageUI(props: IPropsAccountPageUI) {
  return (
    <>
      <S.Wrapper>
        <S.RegisterIntro>Create Account</S.RegisterIntro>
        <S.InnerWrapper>
          <S.EmailWrapper>
            <S.EmailLabel>Email:</S.EmailLabel>
            <S.Email
              type="text"
              placeholder="enter your email"
              name="email"
              onChange={props.onChangeInput}
            />
          </S.EmailWrapper>
          {props.emailError && (
            <S.ErrorWrapper>
              <S.ErrorMessage>*{props.emailError}*</S.ErrorMessage>
            </S.ErrorWrapper>
          )}
          <S.NameWrapper>
            <S.NameLabel>First Name:</S.NameLabel>
            <S.FirstName type="text" placeholder="enter your first name" />
          </S.NameWrapper>
          <S.UsernameWrapper>
            <S.UsernameLabel>Username:</S.UsernameLabel>
            <S.UserName
              type="text"
              placeholder="enter your user name"
              onChange={props.onChangeInput}
              name="name"
            />
          </S.UsernameWrapper>
          {props.nameError && (
            <S.ErrorMessage>*{props.nameError}*</S.ErrorMessage>
          )}
          <S.PasswordWrapper>
            <S.PasswordLabel>Password:</S.PasswordLabel>
            <S.Password
              type="password"
              placeholder="enter your password"
              name="password"
              onChange={props.onChangeInput}
            />
          </S.PasswordWrapper>
          {props.passwordError && (
            <S.ErrorMessage>*{props.passwordError}*</S.ErrorMessage>
          )}
          <S.PassConfirmWrapper>
            <S.PassConfirmLabel>Confirm Password:</S.PassConfirmLabel>
            <S.PasswordConfirm
              type="password"
              placeholder="confirm your password"
              name="confirmPassword"
              onChange={props.PasswordValidation}
            />
          </S.PassConfirmWrapper>
          {props.passwordConfirmError && (
            <S.ErrorMessage>*{props.passwordConfirmError}*</S.ErrorMessage>
          )}
        </S.InnerWrapper>
        <S.SubmitButton onClick={props.onClickSubmit}>Submit</S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
