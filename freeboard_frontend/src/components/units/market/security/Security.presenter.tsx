import * as S from "./Security.styles";
import { Avatar, Image } from "antd";

export default function SecurityUI(props) {
  return (
    <S.Wrapper>
      <S.Header>Login & Security</S.Header>
      <div>Profile Picture:</div>
      <S.ProfileWrapper>
        {props.isUpdate ? (
          <Avatar
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{ width: "40%", height: "40%", margin: "0 auto" }}
              />
            }
            style={{ width: "40%", height: "40%" }}
          />
        ) : (
          <div onClick={props.onChangeProfile}>
            <img src="/market_images/profile.png" />
          </div>
        )}
        <button onClick={props.onUpdateProfile}>Edit</button>
      </S.ProfileWrapper>
      ========================================
      <div>Name:</div>
      <div>{props.data?.fetchUserLoggedIn.name}</div>
      <input onChange={props.onChangeName} />
      <button onClick={props.onClickUpdate}>Edit</button>
      ========================================
      <div>
        <label>Current Password:</label>
        <input type="password" />
        <label>New Password</label>
        <input type="password" onChange={props.onChangePassword} />
        <button onClick={props.onClickChangePassword}>비번 바꾸기</button>
      </div>
      =========================================
      {/* <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: "60%", height: "60%", margin: "0 auto" }}
          />
        }
        style={{ width: "70%", height: "70%" }}
      /> */}
    </S.Wrapper>
  );
}
