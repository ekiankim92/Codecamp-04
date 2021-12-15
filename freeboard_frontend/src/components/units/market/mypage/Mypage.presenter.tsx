import * as S from "./Mypage.styles";
import Reload from "../reload/reload.container";
import { v4 as uuid4 } from "uuid";

export default function MyPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Header>My Page</S.Header>
          <S.Header>Name</S.Header>
          <S.Header>Point Amount:</S.Header>
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
        ========================================
        <div>
          <label>현재 비밀번호:</label>
          <input type="password" />
          <label>새 비밀번호</label>
          <input type="password" onChange={props.onChangePassword} />
          <button onClick={props.onClickChangePassword}>비번 바꾸기</button>
        </div>
        =========================================
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
      =========================================
      <div>
        <Reload />
      </div>
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
    </>
  );
}
