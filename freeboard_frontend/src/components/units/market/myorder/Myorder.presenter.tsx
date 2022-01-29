import * as S from "./Myorder.styles";
import { getDate } from "../../../../commons/libraries/utils";
import PaginationsPage01 from "../../../commons/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent } from "react";

export default function MyOrderUI(props) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.ItemsBought onClick={props.onClickItemsBought}>
          Items Bought
        </S.ItemsBought>
        <S.ItemsSold onClick={props.onClickItemsSold}>Items Sold</S.ItemsSold>
      </S.HeaderWrapper>
      {props.itemsSold && (
        <>
          <div>
            <div>
              <span>Date</span>
              <span>Product Name</span>
              <span>Seller</span>
              <span>Price</span>
            </div>
            <br />
            {props.data?.fetchUseditemsISold.map((el) => (
              <div key={uuidv4()}>
                <span>{getDate(el.createdAt)}</span>
                <span>{el.name}</span>
                <span>{el.seller.name}</span>
                <span>{el.price}</span>
                <span>
                  <S.SoldImages
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    onError={onError}
                  />
                </span>
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
      )}
      ===================================================
      {props.itemsBought && (
        <div>
          <div>
            <span>Date</span>
            <span>Product Name</span>
            <span>Seller</span>
            <span>Price</span>
          </div>
          <div>
            {props.dataItemsBought?.fetchUseditemsIBought.map((el) => (
              <div key={uuidv4()}>
                <span>{getDate(el.createdAt)}</span>
                <span>{el.name}</span>
                <span>{el.seller.name}</span>
                <span>{el.price}</span>
                <img
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onError={onError}
                />
              </div>
            ))}
          </div>
          <PaginationsPage01
            refetchBoughtItems={props.refetchBoughtItems}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
            count2={props.count}
          />
        </div>
      )}
    </S.Wrapper>
  );
}
