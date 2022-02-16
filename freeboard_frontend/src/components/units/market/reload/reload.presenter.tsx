import * as S from "./reload.style";
import Head from "next/head";
import { IPropsReloadUI } from "./reload.types";

export default function ReloadUI(props: IPropsReloadUI) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.Header>Reload Points</S.Header>
        </S.HeaderWrapper>
        <S.PointWrapper>
          Current Points: {props.data?.fetchUserLoggedIn.userPoint?.amount}
        </S.PointWrapper>
        <S.DescriptionWrapper>
          <S.Description>Points You Wished to Exchange:</S.Description>
          <S.PointInput type="text" onChange={props.onChangeAmount} />
          <S.SubmitButton onClick={props.onClickPayment}>Reload</S.SubmitButton>
        </S.DescriptionWrapper>
      </S.Wrapper>
    </>
  );
}
