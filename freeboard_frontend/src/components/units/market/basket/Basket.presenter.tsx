import * as S from "./Basket.styles";
import { v4 as uuidv4 } from "uuid";
import { IPropsBasketUI } from "./Basket.types";
import { ChangeEvent } from "react";
import { timeDisplay } from "../../../../commons/libraries/utils";

export default function BasketUI(props: IPropsBasketUI) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <>
      <S.CartTitle>
        <h1>My Cart</h1>
      </S.CartTitle>
      <S.OutterWrapper>
        {props.basketItems.map((el: any) => (
          <div key={uuidv4()}>
            <S.BasketWrapper>
              <S.ImageWrapper>
                <S.Image
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onError={onError}
                />
              </S.ImageWrapper>
              <S.RemarkWrapper>
                <S.Remark> Remarks: {el.remarks}</S.Remark>
              </S.RemarkWrapper>
              <S.InfoWrapper>
                <S.Price>${el.price}</S.Price>
                <S.TimeWrapper>
                  <S.Time>{timeDisplay(el.createdAt)}</S.Time>
                </S.TimeWrapper>
              </S.InfoWrapper>
              <S.ButtonWrapper>
                <S.DeleteButton onClick={props.onClickDelete(el._id)}>
                  Delete
                </S.DeleteButton>
              </S.ButtonWrapper>
            </S.BasketWrapper>
          </div>
        ))}
      </S.OutterWrapper>
    </>
  );
}
