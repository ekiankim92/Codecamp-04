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
      <S.CarouselWrapper onClick={props.onClickLogin}>
        <S.Carousel1 autoplay dots={false}>
          <S.ImgWrapper>
            <S.Img src="https://media.istockphoto.com/photos/french-bulldog-with-the-shopping-bag-picture-id1139639758?b=1&k=20&m=1139639758&s=170667a&w=0&h=NupdvppGLOTvNqEV_w55_n7spk442tigsSR2nztFy3M=" />
          </S.ImgWrapper>
          <S.ImgWrapper>
            <S.Img2 src="https://preview.pixlr.com/images/800wm/1229/2/1229100075.jpg" />
          </S.ImgWrapper>
          <S.ImgWrapper>
            <S.Img3 src="https://media.istockphoto.com/photos/image-of-dog-trolley-white-background-picture-id1332083145?b=1&k=20&m=1332083145&s=170667a&w=0&h=TG14rSa52UHOmeBZPJa6zb9YRkm86t-Y79hYtdGAn_0=" />
          </S.ImgWrapper>
          <S.ImgWrapper>
            <S.Img4 src="https://media.istockphoto.com/photos/beagle-wearing-red-sunglasses-goes-shopping-picture-id162816884?b=1&k=20&m=162816884&s=170667a&w=0&h=mEEmr5sHtnJoYs-Uha7mIfyAver5cM9Hz-sAr8U3KGM=" />
          </S.ImgWrapper>
        </S.Carousel1>
      </S.CarouselWrapper>
      <S.CardHeader>
        Hottest Items! Testing 1
        <span>
          <S.FireEmoji src="https://emojiguide.org/images/emoji/u/1ka998yekfseu.png" />
        </span>
      </S.CardHeader>
      <S.CardWrapper onClick={props.onClickLogin}>
        <S.CardOne className="site-card-border-less-wrapper">
          <Card title="BOGO" bordered={false} style={{ width: 300 }}>
            <p>1+1</p>
            <p>Place Your Order Now!</p>
          </Card>
        </S.CardOne>
        <S.CardTwo className="site-card-border-less-wrapper">
          <Card title="TOYS" bordered={false} style={{ width: 300 }}>
            <p>Get new toys for your pet</p>
            <p>Spring Sale</p>
          </Card>
        </S.CardTwo>
        <S.CardThree className="site-card-border-less-wrapper">
          <Card title="NEW ARRIVAL" bordered={false} style={{ width: 300 }}>
            <p>New items coming soon</p>
            <p>New arrival every Monday</p>
          </Card>
        </S.CardThree>
      </S.CardWrapper>
      <S.BottomSliderWrapper onClick={props.onClickLogin}>
        <S.BottomSlider {...settings}>
          <S.SliderImage1 src="https://howlpotdesign.wisacdn.com/_data/product/adcde0b3003e592d1482bd0ed9c8d965.jpg" />
          <S.SliderImage2 src="https://howlpotdesign.wisacdn.com/_data/product/c83acdcc5ae8230b0e761ef2859a49d4.jpg" />
          <S.SliderImage3 src="https://howlpotdesign.wisacdn.com/_data/product/7f86eb73982feb4a2fd42ccf4aded4ea.jpg" />
        </S.BottomSlider>
      </S.BottomSliderWrapper>
    </>
  );
}
