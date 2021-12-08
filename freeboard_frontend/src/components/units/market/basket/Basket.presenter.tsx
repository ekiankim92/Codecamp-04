import * as S from "./Basket.styles";
import { v4 as uuidv4 } from "uuid";

export default function BasketUI(props) {
  return (
    <>
      <S.Cart_Title>
        <h1>Shopping Cart</h1>
      </S.Cart_Title>
      <S.Outter_Wrapper>
        {props.basketItems.map((el) => (
          <div key={uuidv4()}>
            <S.Wrapper>
              <div>{el.name}</div>
              <div>{el.remarks}</div>
              <div>{el.tags}</div>
              <div>{el.contents}</div>
              <div>{el.seller.name}</div>
              <img src={`https://storage.googleapis.com/${el.images[0]}`} />
              <button onClick={props.onClickDelete(el._id)}>Delete</button>
            </S.Wrapper>
          </div>
        ))}
      </S.Outter_Wrapper>
    </>
  );
}
