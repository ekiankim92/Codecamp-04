import * as S from "./Header.styles";

export default function HeaderUI() {
  return (
    <>
      <S.Header>
        <S.Logo></S.Logo>
        <S.Header_RoutingPage>
          <S.UsedMarket>중고거래</S.UsedMarket>
          <S.FreeBoard>게시판</S.FreeBoard>
          <S.MyPage>마이페이지</S.MyPage>
        </S.Header_RoutingPage>
      </S.Header>
    </>
  );
}
