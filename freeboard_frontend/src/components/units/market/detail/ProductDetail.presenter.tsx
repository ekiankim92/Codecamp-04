import * as S from "./ProductDetail.styles";

export default function ProductDetailUI() {
  return (
    <>
      <S.Wrapper>
        <S.Image_Wrapper>
          <S.Images1>Image 1</S.Images1>
          <S.Images2>Image 2</S.Images2>
          <S.Images3>Image 3</S.Images3>
        </S.Image_Wrapper>
        <S.Info_Wrapper>
          <S.Info_Font>Name:</S.Info_Font>
          <S.Info_Font>Price:</S.Info_Font>
          <S.Info_Font>Contents:</S.Info_Font>
          <S.Info_Font>Tag:</S.Info_Font>
          <S.Info_Font>Remarks:</S.Info_Font>
        </S.Info_Wrapper>
      </S.Wrapper>
      <div>
        <div>Maps</div>
        <div>Address 1</div>
        <div>Address 2</div>
      </div>
    </>
  );
}
