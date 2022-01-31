import * as S from "./Mypage.styles";

export default function MyPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Header>My Page</S.Header>
        <S.LoginSecurity onClick={props.onClickMoveToSecurity}>
          <span>
            <img src="/market_images/padlock.png" />
          </span>
          <S.LoginSecurityInfo>Login & Security</S.LoginSecurityInfo>
        </S.LoginSecurity>
        <S.YourOrder onClick={props.onClickMoveToMyOrder}>
          <span>
            <img src="/market_images/order.png" />
          </span>
          <S.YourOrderInfo>Your Orders</S.YourOrderInfo>
        </S.YourOrder>
        <S.ArchivedOrder>
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
