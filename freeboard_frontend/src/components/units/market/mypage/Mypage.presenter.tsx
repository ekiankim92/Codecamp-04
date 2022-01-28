import * as S from "./Mypage.styles";
import { v4 as uuid4 } from "uuid";
import PaginationsPage01 from "../../../commons/paginations/01/Paginations01.container";

export default function MyPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Header>My Page</S.Header>
          <S.Header>
            Name: {props.userLoggedIn?.fetchUserLoggedIn.name}
          </S.Header>
          <S.Header>
            Point Amount:
            {props.userLoggedIn?.fetchUserLoggedIn.userPoint.amount} points
          </S.Header>
          <div>
            <img src="/market_images/profile.png" />
          </div>
        </div>
        <S.LoginSecurity>
          <span>
            <img src="/market_images/padlock.png" />
          </span>
          <S.LoginSecurityInfo>Login & Security</S.LoginSecurityInfo>
        </S.LoginSecurity>
        ========================================
        <div>
          <label>현재 비밀번호:</label>
          <input type="password" />
          <label>새 비밀번호</label>
          <input type="password" onChange={props.onChangePassword} />
          <button onClick={props.onClickChangePassword}>비번 바꾸기</button>
        </div>
        =========================================
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
      =========================================
      {/* <div>
        <Reload />
      </div> */}
      =========================================
      <div>
        {props.data?.fetchUseditemsIPicked.map((el, index) => (
          <div key={uuid4()}>
            <span>{index + 1}</span>
            <span>{el.seller.name}</span>
            <span>{el.contents}</span>
            <span>{el.price}</span>
          </div>
        ))}
      </div>
      <PaginationsPage01
        refetch={props.refetch}
        startPage={props.startPage}
        setStartPage={props.setStartPage}
        count={props.count}
      />
    </>
  );
}
