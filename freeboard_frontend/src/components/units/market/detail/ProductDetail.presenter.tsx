import * as S from "./ProductDetail.styles";
import KakaoMap from "../../../commons/kakaomap/map.container";
import Dompurify from "dompurify";
import { ChangeEvent } from "react";
import { IPropsProductDetailUI } from "./ProductDetail.types";

export default function ProductDetailUI(props: IPropsProductDetailUI) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>Product Details</S.Title>
        <S.OuterWrapper>
          <S.ImageWrapper>
            <S.Images1>
              <S.Image
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images?.[0]}`}
                onError={onError}
              />
            </S.Images1>
            <S.Images2>
              <S.Image
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images?.[1]}`}
                onError={onError}
              />
            </S.Images2>
            <S.Images3>
              <S.Image
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem?.images?.[2]}`}
                onError={onError}
              />
            </S.Images3>
          </S.ImageWrapper>
          <S.InfoWrapper>
            <S.DetailName>{props.data?.fetchUseditem.name}</S.DetailName>
            <S.DetailPrice>${props.data?.fetchUseditem.price}</S.DetailPrice>
            {process.browser ? (
              <S.DetailContents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              ></S.DetailContents>
            ) : (
              <div></div>
            )}
            <S.DetailTags>{props.data?.fetchUseditem.tags}</S.DetailTags>
            <S.DetailRemarks>
              {props.data?.fetchUseditem.remarks}
            </S.DetailRemarks>
          </S.InfoWrapper>
          <S.SectionWrapper>
            <S.MapLabel>Map</S.MapLabel>
            <KakaoMap
              address={props.data?.fetchUseditem.useditemAddress?.address}
            />
            <div>
              <S.Zipcode>
                Zipcode: {props.data?.fetchUseditem.useditemAddress?.zipcode}
              </S.Zipcode>
              <S.Address>
                Address: {props.data?.fetchUseditem.useditemAddress?.address}
              </S.Address>
              <S.AddressDetail>
                Address Detail:{" "}
                {props.data?.fetchUseditem.useditemAddress?.addressDetail}
              </S.AddressDetail>
            </div>
          </S.SectionWrapper>
        </S.OuterWrapper>
        <S.ButtonWrapper>
          <S.Button onClick={props.onClickMoveToMarketList}>List</S.Button>
          <S.Button onClick={props.onClickMoveToEdit}>Edit</S.Button>
          <S.Button onClick={props.onClickDeleteProduct}>Delete</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
