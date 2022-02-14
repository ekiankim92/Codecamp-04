import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Banner.styles";
import { Card } from "antd";
import { IPropsBannerUI } from "./Banner.types";

export default function BannerUI(props: IPropsBannerUI) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <S.Carousel_Wrapper onClick={props.onClickLogin}>
        <S.Carousel1 autoplay dots={false}>
          <S.Img_Wrapper>
            <S.Img src="https://media.istockphoto.com/photos/french-bulldog-with-the-shopping-bag-picture-id1139639758?b=1&k=20&m=1139639758&s=170667a&w=0&h=NupdvppGLOTvNqEV_w55_n7spk442tigsSR2nztFy3M=" />
          </S.Img_Wrapper>
          <S.Img_Wrapper>
            <S.Img_2 src="https://preview.pixlr.com/images/800wm/1229/2/1229100075.jpg" />
          </S.Img_Wrapper>
          <S.Img_Wrapper>
            <S.Img_3 src="https://media.istockphoto.com/photos/image-of-dog-trolley-white-background-picture-id1332083145?b=1&k=20&m=1332083145&s=170667a&w=0&h=TG14rSa52UHOmeBZPJa6zb9YRkm86t-Y79hYtdGAn_0=" />
          </S.Img_Wrapper>
          <S.Img_Wrapper>
            <S.Img_4 src="https://media.istockphoto.com/photos/beagle-wearing-red-sunglasses-goes-shopping-picture-id162816884?b=1&k=20&m=162816884&s=170667a&w=0&h=mEEmr5sHtnJoYs-Uha7mIfyAver5cM9Hz-sAr8U3KGM=" />
          </S.Img_Wrapper>
        </S.Carousel1>
      </S.Carousel_Wrapper>
      <S.Card_Header>
        Hottest Items!
        <span>
          <S.Fire_Emoji src="https://emojiguide.org/images/emoji/u/1ka998yekfseu.png" />
        </span>
      </S.Card_Header>
      <S.Card_Wrapper onClick={props.onClickLogin}>
        <S.Card_One className="site-card-border-less-wrapper">
          <Card title="BOGO" bordered={false} style={{ width: 300 }}>
            <p>1+1</p>
            <p>Place Your Order Now!</p>
          </Card>
        </S.Card_One>
        <S.Card_Two className="site-card-border-less-wrapper">
          <Card title="TOYS" bordered={false} style={{ width: 300 }}>
            <p>Get new toys for your pet</p>
            <p>Spring Sale</p>
          </Card>
        </S.Card_Two>
        <S.Card_Three className="site-card-border-less-wrapper">
          <Card title="NEW ARRIVAL" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </S.Card_Three>
      </S.Card_Wrapper>
      <S.Bottom_Slider_Wrapper onClick={props.onClickLogin}>
        <S.Bottom_Slider {...settings}>
          <S.Slider_Image1 src="https://howlpotdesign.wisacdn.com/_data/product/adcde0b3003e592d1482bd0ed9c8d965.jpg" />
          <S.Slider_Image2 src="https://howlpotdesign.wisacdn.com/_data/product/c83acdcc5ae8230b0e761ef2859a49d4.jpg" />
          <S.Slider_Image3 src="https://howlpotdesign.wisacdn.com/_data/product/7f86eb73982feb4a2fd42ccf4aded4ea.jpg" />
        </S.Bottom_Slider>
      </S.Bottom_Slider_Wrapper>
    </>
  );
}
