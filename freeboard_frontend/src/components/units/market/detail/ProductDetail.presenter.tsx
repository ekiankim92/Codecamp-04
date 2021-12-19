import * as S from "./ProductDetail.styles";
import KakaoMap from "../../../commons/kakaomap/map.container";
import Dompurify from "dompurify";
import { v4 as uuidv4 } from "uuid";

export default function ProductDetailUI(props) {
  return (
    <>
      <S.Wrapper>
        <div>
          <h1>Product Details</h1>
        </div>
        <S.Outter_Wrapper>
          <S.Image_Wrapper>
            <S.Images1>
              {/* {props.data?.fetchUseditem.images
                ?.filter((el) => el)
                .map((el) => (
                  <img
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))} */}
              <img
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              />
              {/* <div>====================</div>
              <img
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              />
              <div>====================</div> */}
            </S.Images1>
            <S.Images2>
              Image 2:{" "}
              <img
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`}
              />
            </S.Images2>
            <S.Images3>
              Image 3:{" "}
              <img
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[2]}`}
              />
            </S.Images3>
          </S.Image_Wrapper>
          <S.Info_Wrapper>
            <S.Detail_Name>
              Name: {props.data?.fetchUseditem.name}
            </S.Detail_Name>
            <S.Detail_Price>
              Price: {props.data?.fetchUseditem.price} USD
            </S.Detail_Price>
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
            <S.Detail_tags>Tag: {props.data?.fetchUseditem.tags}</S.Detail_tags>
            <S.Detail_Remarks>
              Remarks: {props.data?.fetchUseditem.remarks}
            </S.Detail_Remarks>
          </S.Info_Wrapper>
          <S.Section_Wrapper>
            <div>Maps</div>
            <KakaoMap />
            <div>
              <div>
                Zipcode: {props.data?.fetchUseditem.useditemAddress.zipcode}
              </div>
              <div>
                Address: {props.data?.fetchUseditem.useditemAddress.address}
              </div>
              <div>
                Address Detail:{" "}
                {props.data?.fetchUseditem.useditemAddress.addressDetail}
              </div>
            </div>
          </S.Section_Wrapper>
        </S.Outter_Wrapper>
        <div>
          <button onClick={props.onClickMoveToMarketList}>List</button>
          <button onClick={props.onClickMoveToEdit}>Edit</button>
          <button onClick={props.onClickDeleteProduct}>Delete</button>
        </div>
      </S.Wrapper>
    </>
  );
}
