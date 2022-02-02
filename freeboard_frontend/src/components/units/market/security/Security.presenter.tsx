import * as S from "./Security.styles";
import { Avatar, Image } from "antd";
import { IPropsSecurityUI } from "./Security.types";

export default function SecurityUI(props: IPropsSecurityUI) {
  return (
    <S.Wrapper>
      <S.Header>Login & Security</S.Header>
      <S.ProfileWrapper>
        {props.isUpdate ? (
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{ width: "50%", height: "50%", margin: "0 auto" }}
              />
            }
            style={{ width: "80%", height: "80%" }}
          />
        ) : (
          <div onClick={props.onChangeProfile}>
            <S.Image src="/market_images/profile.png" />
          </div>
        )}
        <S.EditButton
          onClick={props.onUpdateProfile}
          style={{ marginTop: "5px" }}
        >
          Edit
        </S.EditButton>
      </S.ProfileWrapper>
      <S.NameWrapper>
        <S.NameInnerWrapper>
          <S.NameLabel>Name:</S.NameLabel>
          <div>{props.data?.fetchUserLoggedIn.name}</div>
        </S.NameInnerWrapper>
        <S.NameEditWrapper>
          <S.NameInput onChange={props.onChangeName} placeholder="new name" />
          <S.EditButton onClick={props.onClickUpdate}>Edit</S.EditButton>
        </S.NameEditWrapper>
      </S.NameWrapper>
      <S.PasswordWrapper>
        {props.isEdit ? (
          <div>
            <S.PasswordLabel>New Password</S.PasswordLabel>
            <S.NewPassworld
              type="password"
              onChange={props.onChangePassword}
              placeholder="new password"
            />
          </div>
        ) : (
          <div>
            <S.PasswordLabel>Current Password:</S.PasswordLabel>
            <S.OldPassworld
              type="password"
              onChange={props.onChangePassword}
              placeholder="current password"
            />
          </div>
        )}
        <S.EditButton
          onClick={
            props.isEdit ? props.onClickChangePassword : props.onClickDone
          }
        >
          {props.isEdit ? "Done" : "Edit"}
        </S.EditButton>
      </S.PasswordWrapper>
    </S.Wrapper>
  );
}
