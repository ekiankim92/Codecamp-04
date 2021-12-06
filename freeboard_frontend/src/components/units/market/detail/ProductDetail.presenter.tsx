import * as S from "./ProductDetail.styles";

export default function ProductDetailUI(props) {
  return (
    <>
      <S.Wrapper>
        <div>
          <h1>Product Detail</h1>
        </div>
        <S.Outter_Wrapper>
          <S.Image_Wrapper>
            <S.Images1>
              <img
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              />
            </S.Images1>
            <S.Images2>Image 2</S.Images2>
            <S.Images3>Image 3</S.Images3>
          </S.Image_Wrapper>
          <S.Info_Wrapper>
            <S.Detail_Name>
              Name: {props.data?.fetchUseditem.name}
            </S.Detail_Name>
            <S.Detail_Price>
              Price: {props.data?.fetchUseditem.price} USD
            </S.Detail_Price>
            <S.Detail_Contents>
              Contents: {props.data?.fetchUseditem.contents}
            </S.Detail_Contents>
            <S.Detail_tags>Tag: {props.data?.fetchUseditem.tags}</S.Detail_tags>
            <S.Detail_Remarks>
              Remarks: {props.data?.fetchUseditem.remarks}
            </S.Detail_Remarks>
          </S.Info_Wrapper>
          <S.Section_Wrapper>
            <div>Maps</div>
            <div>Address 1</div>
            <div>Address 2</div>
          </S.Section_Wrapper>
        </S.Outter_Wrapper>
        <div>
          <button onClick={props.onClickMoveToProduct}>List</button>
          <button onClick={props.onClickMoveToEdit}>Edit</button>
          <button onClick={props.onClickDeleteProduct}>Delete</button>
        </div>
      </S.Wrapper>
    </>
  );
}
