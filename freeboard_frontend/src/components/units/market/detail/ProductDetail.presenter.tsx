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
        <div>
          <h1>Product Details</h1>
        </div>
        <S.Outter_Wrapper>
          <S.Image_Wrapper>
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
          </S.Image_Wrapper>
          <S.Info_Wrapper>
            <S.Detail_Name>{props.data?.fetchUseditem.name}</S.Detail_Name>
            <S.Detail_Price>${props.data?.fetchUseditem.price}</S.Detail_Price>
            {process.browser ? (
              <S.Detail_Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              >
                {/* Contents: {props.data?.fetchUseditem.contents} */}
              </S.Detail_Contents>
            ) : (
              <div></div>
            )}
            <S.Detail_tags>{props.data?.fetchUseditem.tags}</S.Detail_tags>
            <S.Detail_Remarks>
              {props.data?.fetchUseditem.remarks}
            </S.Detail_Remarks>
          </S.Info_Wrapper>
          <S.Section_Wrapper>
            <S.Map_Label>Map</S.Map_Label>
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
              <S.Address_Detail>
                Address Detail:{" "}
                {props.data?.fetchUseditem.useditemAddress?.addressDetail}
              </S.Address_Detail>
            </div>
          </S.Section_Wrapper>
        </S.Outter_Wrapper>
        <S.Button_Wrapper>
          <S.Button onClick={props.onClickMoveToMarketList}>List</S.Button>
          <S.Button onClick={props.onClickMoveToEdit}>Edit</S.Button>
          <S.Button onClick={props.onClickDeleteProduct}>Delete</S.Button>
        </S.Button_Wrapper>
      </S.Wrapper>
    </>
  );
}
