import * as S from "./Basket.styles";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";

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
              <div>Selle's Name: {el.seller.name}</div>
              <div>Name: {el.name}</div>
              <div> Remarks: {el.remarks}</div>
              <div>Tags: {el.tags}</div>
              <br></br>
              {process.browser ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(String(el.contents)),
                  }}
                ></div>
              ) : (
                <div></div>
              )}
              {/* {el.contents}</div> */}
              <img src={`https://storage.googleapis.com/${el.images[0]}`} />
              <button onClick={props.onClickDelete(el._id)}>Delete</button>
            </S.Wrapper>
          </div>
        ))}
      </S.Outter_Wrapper>
    </>
  );
}
