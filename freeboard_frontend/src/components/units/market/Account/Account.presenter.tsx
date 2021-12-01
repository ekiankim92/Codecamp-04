import { inputAdornmentClasses } from "@mui/material";
import * as S from "./Account.styles";
import { IPropsAccountPageUI } from "./Account.types";

export default function AccountPageUI(props: IPropsAccountPageUI) {
  return (
    <>
      <S.Wrapper>
        <h1>Create Account</h1>
        <S.Inner_Wrapper>
          <div>
            First Name:
            <S.First_Name
              type="text"
              placeholder="Enter Your First Name"
              name="name"
              onChange={props.onChangeInput}
            />
            <S.Error_Message>{props.nameError}</S.Error_Message>
          </div>
          <div>
            Username:
            <S.UserName type="text" placeholder="Enter Your User Name" />
          </div>
          <div>
            Password:
            <S.Password
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={props.onChangeInput}
            />
            <S.Error_Message>{props.passwordError}</S.Error_Message>
          </div>
          <div>
            Confirm Password:
            <S.Password_Confirm
              type="password"
              placeholder="Confirm Your Password"
              name="password"
              onChange={props.onChangeInput}
            />
          </div>
          <div></div>
          <div>
            Email:
            <S.Email
              type="text"
              placeholder="Enter Your Email"
              name="email"
              onChange={props.onChangeInput}
            />
            <S.Error_Message>{props.emailError}</S.Error_Message>
          </div>
        </S.Inner_Wrapper>
        <S.Submit_Button onClick={props.onClickSubmit}>Submit</S.Submit_Button>
      </S.Wrapper>
    </>
  );
}
