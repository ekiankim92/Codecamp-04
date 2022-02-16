import * as S from "./Myorder.styles";
import { getDate } from "../../../../commons/libraries/utils";
import PaginationsPage01 from "../../../commons/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent } from "react";
import { IPropsMyOrderUI } from "./Myorder.types";

export default function MyOrderUI(props: IPropsMyOrderUI) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <S.Wrapper>
      <S.NavigationWrapper>
        <S.ItemsBought onClick={props.onClickItemsBought}>
          Items Bought
        </S.ItemsBought>
        <S.ItemsSold onClick={props.onClickItemsSold}>Items Sold</S.ItemsSold>
        <S.ItemsIPicked onClick={props.onClickItemsIPicked}>
          Items I Liked
        </S.ItemsIPicked>
      </S.NavigationWrapper>
      {props.itemsSold && (
        <>
          <div>
            <S.HeaderWrapper>
              <S.NumberWrapper>
                <S.HeaderInfo>Number</S.HeaderInfo>
              </S.NumberWrapper>
              <S.ProductWrapper>
                <S.HeaderInfoProduct>Product Name</S.HeaderInfoProduct>
              </S.ProductWrapper>
              <S.PriceWrapper>
                <S.HeaderInfo>Price</S.HeaderInfo>
              </S.PriceWrapper>
              <S.DateWrapper>
                <S.HeaderInfo>Date</S.HeaderInfo>
              </S.DateWrapper>
            </S.HeaderWrapper>
            {props.data?.fetchUseditemsISold.map((el: any, index: number) => (
              <S.InfoWrapper key={uuidv4()}>
                <S.NumberInfo>
                  <span>{index + 1}</span>
                </S.NumberInfo>
                <S.ProductInfo>
                  <span>{el.name}</span>
                  <span>
                    <S.SoldImages
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      onError={onError}
                    />
                  </span>
                </S.ProductInfo>
                <S.PriceInfo>
                  <span>${el.price}</span>
                </S.PriceInfo>
                <S.DateInfo>
                  <span>{getDate(el.createdAt)}</span>
                </S.DateInfo>
              </S.InfoWrapper>
            ))}
          </div>
          <S.PaginationWrapper>
            <PaginationsPage01
              // @ts-ignore:next-line
              refetch={props.refetch}
              startPage={props.startPage}
              setStartPage={props.setStartPage}
              count={props.count}
            />
          </S.PaginationWrapper>
        </>
      )}
      {props.itemsBought && (
        <>
          <div>
            <S.HeaderWrapper>
              <S.NumberWrapper>
                <S.HeaderInfo>Number</S.HeaderInfo>
              </S.NumberWrapper>
              <S.ProductWrapper>
                <S.HeaderInfoProduct>Product Name</S.HeaderInfoProduct>
              </S.ProductWrapper>
              <S.PriceWrapper>
                <S.HeaderInfo>Price</S.HeaderInfo>
              </S.PriceWrapper>
              <S.DateWrapper>
                <S.HeaderInfo>Date</S.HeaderInfo>
              </S.DateWrapper>
            </S.HeaderWrapper>
            {props.dataItemsBought?.fetchUseditemsIBought.map(
              (el: any, index: number) => (
                <S.InfoWrapper key={uuidv4()}>
                  <S.NumberInfo>
                    <span>{index + 1}</span>
                  </S.NumberInfo>
                  <S.ProductInfo>
                    <span>{el.name}</span>
                    <span>
                      <S.SoldImages
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        onError={onError}
                      />
                    </span>
                  </S.ProductInfo>
                  <S.PriceInfo>
                    <span>${el.price}</span>
                  </S.PriceInfo>
                  <S.DateInfo>
                    <span>{getDate(el.createdAt)}</span>
                  </S.DateInfo>
                </S.InfoWrapper>
              )
            )}
          </div>
          <S.PaginationWrapper>
            <PaginationsPage01
              refetchBoughtItems={props.refetchBoughtItems}
              startPage={props.startPage}
              setStartPage={props.setStartPage}
              count={props.count2}
            />
          </S.PaginationWrapper>
        </>
      )}
      {props.itemsIPicked && (
        <>
          <div>
            <S.HeaderWrapper>
              <S.NumberWrapper>
                <S.HeaderInfo>Number</S.HeaderInfo>
              </S.NumberWrapper>
              <S.ProductWrapper>
                <S.HeaderInfoProduct>Product Name</S.HeaderInfoProduct>
              </S.ProductWrapper>
              <S.PriceWrapper>
                <S.HeaderInfo>Price</S.HeaderInfo>
              </S.PriceWrapper>
              <S.DateWrapper>
                <S.HeaderInfo>Date</S.HeaderInfo>
              </S.DateWrapper>
            </S.HeaderWrapper>
            {props.dataItemsPicked?.fetchUseditemsIPicked.map(
              (el: any, index: number) => (
                <S.InfoWrapper key={uuidv4()}>
                  <S.NumberInfo>
                    <span>{index + 1}</span>
                  </S.NumberInfo>
                  <S.ProductInfo>
                    <span>{el.name}</span>
                    <span>
                      <S.SoldImages
                        src={`https://storage.googleapis.com/${el.images?.[0]}`}
                        onError={onError}
                      />
                    </span>
                  </S.ProductInfo>
                  <S.PriceInfo>
                    <span>${el.price}</span>
                  </S.PriceInfo>
                  <S.DateInfo>
                    <span>{getDate(el.createdAt)}</span>
                  </S.DateInfo>
                </S.InfoWrapper>
              )
            )}
          </div>
          <S.PaginationWrapper>
            <PaginationsPage01
              refetchItemsPicked={props.refetchItemsPicked}
              startPage={props.startPage}
              setStartPage={props.setStartPage}
              count={props.count3}
            />
          </S.PaginationWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
