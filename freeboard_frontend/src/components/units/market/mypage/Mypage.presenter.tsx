import * as S from "./Mypage.styles";
import { IPropsMyPageUI } from "./Mypage.types";

export default function MyPageUI(props: IPropsMyPageUI) {
  return (
    <>
      <S.Wrapper>
        <S.Header>My Page</S.Header>
        <S.LoginSecurity onClick={props.onClickMoveToSecurity}>
          <span>
            <img src="/market_images/padlock.png" />
          </span>
          <S.LoginSecurityInfo>Login & My Info</S.LoginSecurityInfo>
        </S.LoginSecurity>
        <S.YourOrder onClick={props.onClickMoveToMyOrder}>
          <span>
            <img src="/market_images/order.png" />
          </span>
          <S.YourOrderInfo>Order History</S.YourOrderInfo>
        </S.YourOrder>
        <S.ArchivedOrder onClick={props.onClickMoveToArchived}>
          <span>
            <img src="/market_images/archive.png" />
          </span>
          <S.ArchivedOrderInfo>Archived Orders</S.ArchivedOrderInfo>
        </S.ArchivedOrder>
        <S.Reload onClick={props.onClickMoveToReload}>
          <span>
            <img src="/market_images/refresh.png" />
          </span>
          <S.ReloadInfo>Reload Points</S.ReloadInfo>
        </S.Reload>
      </S.Wrapper>
    </>
  );
}
