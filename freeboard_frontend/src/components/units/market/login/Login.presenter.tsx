import * as S from "./Login.styles";
import { IPropsLogInUI } from "./Login.types";

export default function LogInUI(props: IPropsLogInUI) {
  return (
    <>
      <S.Wrapper>
        <S.LoginInfo>
          <S.LoginLogo>Sign-In</S.LoginLogo>
          <S.InfoWrapper>
            <S.EmailLog
              type="text"
              name="email"
              placeholder="Enter your e-mail"
              onChange={props.onChangeInputs}
            />
            <S.PasswordLog
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={props.onChangeInputs}
            />
            <S.SignButton onClick={props.onClickLogin}>Sign-In</S.SignButton>
            <S.RegisterButton onClick={props.onClickRegister}>
              Register
            </S.RegisterButton>
          </S.InfoWrapper>
        </S.LoginInfo>
        <S.LoginPicture>
          <S.Image src="/market_images/tongue.jpeg" />
        </S.LoginPicture>
      </S.Wrapper>
    </>
  );
}
