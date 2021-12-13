import * as S from "./Mypage.styles";
import Reload from "../reload/reload.container";

export default function MyPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Header>My Page</S.Header>
          <S.Header>Name</S.Header>
          <S.Header>
            Point Amount: {props.data?.fetchUserLoggedIn.userPoint.amount}{" "}
          </S.Header>
          <div>
            <img src="/market_images/profile.png" />
          </div>
        </div>
        <S.Login_Security>
          <span>
            <img src="/market_images/padlock.png" />
          </span>
          <S.Login_Security_Info>Login & Security</S.Login_Security_Info>
        </S.Login_Security>
        <S.Your_Order>
          <span>
            <img src="/market_images/order.png" />
          </span>
          <S.Your_Order_Info>Your Orders</S.Your_Order_Info>
        </S.Your_Order>
        <S.Archived_Order>
          <span>
            <img src="/market_images/archive.png" />
          </span>
          <S.Archived_Order_Info>Archived Orders</S.Archived_Order_Info>
        </S.Archived_Order>
      </S.Wrapper>
      <Reload />
    </>
  );
}
