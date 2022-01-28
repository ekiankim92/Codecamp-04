import * as S from "./Basket.styles";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import { IPropsBasketUI } from "./Basket.types";
import { ChangeEvent } from "react";

export default function BasketUI(props: IPropsBasketUI) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <>
      <S.Cart_Title>
        <h1>My Cart</h1>
      </S.Cart_Title>
      <S.Outter_Wrapper>
        {props.basketItems.map((el: any) => (
          <div key={uuidv4()}>
            <S.Basket_Wrapper>
              <S.Image_Wrapper>
                <S.Image
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onError={onError}
                />
              </S.Image_Wrapper>
              <S.Seller_Name>Selle's Name: {el.seller.name}</S.Seller_Name>
              <S.Name>Name: {el.name}</S.Name>
              <S.Remark> Remarks: {el.remarks}</S.Remark>
              <S.Tag>Tags: {el.tags}</S.Tag>
              <S.Content>Contents:</S.Content>
              {process.browser ? (
                <S.Content
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(String(el.contents)),
                  }}
                ></S.Content>
              ) : (
                <div></div>
              )}
              <S.Button_Wrapper>
                <S.Delete_Button onClick={props.onClickDelete(el._id)}>
                  Delete
                </S.Delete_Button>
              </S.Button_Wrapper>
            </S.Basket_Wrapper>
          </div>
        ))}
      </S.Outter_Wrapper>
    </>
  );
}
