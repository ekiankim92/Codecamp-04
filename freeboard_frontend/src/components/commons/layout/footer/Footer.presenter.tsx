import * as S from "./Footer.styles";

export default function FooterUI() {
  return (
    <>
      <S.Footer>
        <S.Footer_Wrapper>
          <S.Footer_Images1 src="market_images/visa.png" />
          <S.Footer_Images2 src="market_images/american-express.png" />
          <S.Footer_Images3 src="market_images/apple-pay.png" />
          <S.Footer_Images4 src="market_images/discover.png" />
          <S.Footer_Images5 src="market_images/paypal.png" />
        </S.Footer_Wrapper>
        <S.Footer_Comment>
          Please don't forget to vist us and to subscribe!
        </S.Footer_Comment>
        <S.Footer_Address>
          <div>서울, 구로구, 구로동, 디지털로 300 패스트파이브 구로점</div>
          <S.Footer_Name>EunKuk Ian Kim</S.Footer_Name>
          <S.Footer_Email>eunkukkim1992@gmail.com</S.Footer_Email>
          <S.Footer_Phone>010-2732-****</S.Footer_Phone>
          <S.Footer_Icon1 src="/images/facebook.png" />
          <S.Footer_Icon2 src="/images/instagram.png" />
          <S.Footer_Icon3 src="/images/twitter.png" />
        </S.Footer_Address>
        <S.Inqueries>
          <S.Notice>공지사항</S.Notice>
          <S.One_To_Chat>1:1 문의</S.One_To_Chat>
          <S.Frequent_Asked>자주 묻는 질문</S.Frequent_Asked>
        </S.Inqueries>
      </S.Footer>
    </>
  );
}
