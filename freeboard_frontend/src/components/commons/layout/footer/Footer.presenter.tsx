import { ChangeEvent } from "react";
import * as S from "./Footer.styles";

export default function FooterUI() {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <S.Wrapper>
      <S.Footer>
        <S.FooterWrapper>
          <S.FooterImages1 src="market_images/visa.png" onError={onError} />
          <S.FooterImages2
            src="market_images/american-express.png"
            onError={onError}
          />
          <S.FooterImages3
            src="market_images/apple-pay.png"
            onError={onError}
          />
          <S.FooterImages4 src="market_images/discover.png" onError={onError} />
          <S.FooterImages5 src="market_images/paypal.png" onError={onError} />
        </S.FooterWrapper>
        <S.FooterComment>
          Please don't forget to vist us and to subscribe!
        </S.FooterComment>
        <S.FooterAddress>
          <div>서울 구로구, 구로동, 디지털로 300 패스트파이브 구로점</div>
          <S.FooterName>EunKuk Ian Kim</S.FooterName>
          <S.FooterEmail>eunkukkim1992@gmail.com</S.FooterEmail>
          <S.FooterPhone>010-4481-****</S.FooterPhone>
          <S.FooterIcon1 src="/images/facebook.png" onError={onError} />
          <S.FooterIcon2 src="/images/instagram.png" onError={onError} />
          <S.FooterIcon3 src="/images/twitter.png" onError={onError} />
        </S.FooterAddress>
        <S.Inqueries>
          <S.Notice>Notifications</S.Notice>
          <S.OneToChat>1:1 Inquiry</S.OneToChat>
          <S.FrequentAsked>Frequently Asked Questions</S.FrequentAsked>
        </S.Inqueries>
      </S.Footer>
    </S.Wrapper>
  );
}
