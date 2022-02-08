// import { Banner } from "./Banner.styles";
// import { Carousel } from "antd";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./Banner.styles";
import { Card } from "antd";

export default function BannerUI() {
  // const contentStyle = {
  //   height: "500px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   // textAlign: "center",
  //   background: "#759958",
  // };

  // const contentStyle2 = {
  //   height: "140px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#7c9faf",
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <S.Carousel_Wrapper>
        <S.Carousel1 autoplay dots={false}>
          <S.Img_Wrapper>
            <S.Img src="https://media.istockphoto.com/photos/french-bulldog-with-the-shopping-bag-picture-id1139639758?b=1&k=20&m=1139639758&s=170667a&w=0&h=NupdvppGLOTvNqEV_w55_n7spk442tigsSR2nztFy3M=" />
          </S.Img_Wrapper>
          <S.Img_Wrapper>
            {/* <h3>2</h3> */}
            <S.Img_2 src="https://preview.pixlr.com/images/800wm/1229/2/1229100075.jpg" />
          </S.Img_Wrapper>
          <S.Img_Wrapper>
            {/* <h3>3</h3> */}
            <S.Img_3 src="https://media.istockphoto.com/photos/image-of-dog-trolley-white-background-picture-id1332083145?b=1&k=20&m=1332083145&s=170667a&w=0&h=TG14rSa52UHOmeBZPJa6zb9YRkm86t-Y79hYtdGAn_0=" />
          </S.Img_Wrapper>
          <S.Img_Wrapper>
            {/* <h3>4</h3> */}
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
      <S.Card_Wrapper>
        <S.Card_One className="site-card-border-less-wrapper">
          <Card title="BOGO" bordered={false} style={{ width: 300 }}>
            <p>1+1</p>
            <p>Place Your Order Now!</p>
          </Card>
        </S.Card_One>
        <S.Card_Two className="site-card-border-less-wrapper">
          <Card title="TOYS" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </S.Card_Two>
        <S.Card_Three className="site-card-border-less-wrapper">
          <Card title="NEW ARRIVAL" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </S.Card_Three>
        {/* <S.Card_Four className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content\</p>
            <p>Card content</p>
          </Card>
        </S.Card_Four> */}
      </S.Card_Wrapper>

      {/* <S.Carousel2 autoplay>
        <S.Carousel_Wrapper2>
          <S.Bottom_Carousel_Image1_Wrapper>
            <h3>1</h3>
            <S.Bottom_Carousel_Image1 src="https://howlpotdesign.wisacdn.com/_data/product/big/20200117/8ea0907155f494d791ea60c426a597fd.jpg" />
          </S.Bottom_Carousel_Image1_Wrapper>
          <S.Bottom_Carousel_Image2_Wrapper>
            <h3>2</h3>
            <img src="https://howlpotdesign.wisacdn.com/_data/product/big/201905/991e6f7e103167c4a019b89e022fa91b.jpg" />
          </S.Bottom_Carousel_Image2_Wrapper>
        </S.Carousel_Wrapper2>
      </S.Carousel2> */}
      <S.Bottom_Slider_Wrapper>
        <S.Bottom_Slider {...settings}>
          <S.Slider_Image1 src="https://howlpotdesign.wisacdn.com/_data/product/adcde0b3003e592d1482bd0ed9c8d965.jpg" />
          <S.Slider_Image2 src="https://howlpotdesign.wisacdn.com/_data/product/c83acdcc5ae8230b0e761ef2859a49d4.jpg" />
          <S.Slider_Image3 src="https://howlpotdesign.wisacdn.com/_data/product/7f86eb73982feb4a2fd42ccf4aded4ea.jpg" />
        </S.Bottom_Slider>
      </S.Bottom_Slider_Wrapper>
    </>
  );
}
