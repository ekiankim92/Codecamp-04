import * as S from "./Login.styles";
import { IPropsLogInUI } from "./Login.types";

export default function LogInUI(props: IPropsLogInUI) {
  return (
    <>
      <S.Wrapper>
        <S.LoginInfo>
          <S.LoginLogo>
            Woof Woof!
            <S.LogoImg src="images/pawn.png" />
          </S.LoginLogo>
          <S.EmailLog
            type="text"
            name="email"
            placeholder="Your login or e-mail"
            onChange={props.onChangeInputs}
          />
          <S.PasswordLog
            type="password"
            name="password"
            placeholder="Password"
            onChange={props.onChangeInputs}
          />
          <S.SignButton onClick={props.onClickLogin}>Log In</S.SignButton>
          <S.RegisterButton onClick={props.onClickRegister}>
            Register
          </S.RegisterButton>
        </S.LoginInfo>
        <S.LoginPicture>
          <S.Image src="/market_images/logscreen.png" />
        </S.LoginPicture>
      </S.Wrapper>
    </>
  );
}
