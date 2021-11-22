// import { Banner } from "./Banner.styles";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function BannerUI() {
//   let settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Banner>
//       여기는 배너 영역입니다
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//           <img
//             src="https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg"
//             width={1500}
//             height={300}
//           />
//         </div>
//         <div>
//           <h3>2</h3>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZvNT3qiADQNP3BXeweSJociiEDQITeWEVQ&usqp=CAU"
//             width={400}
//             height={300}
//           />
//         </div>
//         <div>
//           <h3>3</h3>
//           <img src="https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?size=626&ext=jpg&ga=GA1.2.1356491196.1623715200" />
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </Banner>
//   );
// }

import { Banner } from "./Banner.styles";
import { Carousel } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Carousel2,
  Card_Wrapper,
  Card_Header,
  Card_One,
  Card_Two,
  Card_Three,
  Card_Four,
  Carousel_Wrapper,
  Carousel1,
  Img_Wrapper,
  Img,
  Img_2,
  Img_3,
  Img_4,
  Bottom_Carousel_Image1,
  Bottom_Carousel_Image1_Wrapper,
  Bottom_Carousel_Image2_Wrapper,
  Carousel_Wrapper2,
  Bottom_Slider,
  Slider_Image1,
  Slider_Image2,
  Slider_Image3,
  Bottom_Slider_Wrapper,
} from "./Banner.styles";
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Carousel_Wrapper>
        <Carousel1 autoplay dots={false}>
          <Img_Wrapper>
            <Img src="https://media.istockphoto.com/photos/french-bulldog-with-the-shopping-bag-picture-id1139639758?b=1&k=20&m=1139639758&s=170667a&w=0&h=NupdvppGLOTvNqEV_w55_n7spk442tigsSR2nztFy3M=" />
          </Img_Wrapper>
          <Img_Wrapper>
            {/* <h3>2</h3> */}
            <Img_2 src="https://media.istockphoto.com/photos/cute-golden-retriever-pet-store-picture-id492001652?b=1&k=20&m=492001652&s=170667a&w=0&h=LHRDo_FS3Humjg3lkeXl0BYCY2HPrXvfiW-H1hfFUCs=" />
          </Img_Wrapper>
          <Img_Wrapper>
            {/* <h3>3</h3> */}
            <Img_3 src="https://media.istockphoto.com/photos/image-of-dog-trolley-white-background-picture-id1332083145?b=1&k=20&m=1332083145&s=170667a&w=0&h=TG14rSa52UHOmeBZPJa6zb9YRkm86t-Y79hYtdGAn_0=" />
          </Img_Wrapper>
          <Img_Wrapper>
            {/* <h3>4</h3> */}
            <Img_4 src="https://media.istockphoto.com/photos/beagle-wearing-red-sunglasses-goes-shopping-picture-id162816884?b=1&k=20&m=162816884&s=170667a&w=0&h=mEEmr5sHtnJoYs-Uha7mIfyAver5cM9Hz-sAr8U3KGM=" />
          </Img_Wrapper>
        </Carousel1>
      </Carousel_Wrapper>
      <Card_Header>지금 막 올라온 아이템!</Card_Header>
      <Card_Wrapper>
        <Card_One className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Card_One>
        <Card_Two className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Card_Two>
        <Card_Three className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Card_Three>
        <Card_Four className="site-card-border-less-wrapper">
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content\</p>
            <p>Card content</p>
          </Card>
        </Card_Four>
      </Card_Wrapper>
      <Carousel2 autoplay>
        <Carousel_Wrapper2>
          <Bottom_Carousel_Image1_Wrapper>
            <h3>1</h3>
            <Bottom_Carousel_Image1 src="https://howlpotdesign.wisacdn.com/_data/product/big/20200117/8ea0907155f494d791ea60c426a597fd.jpg" />
          </Bottom_Carousel_Image1_Wrapper>
          <Bottom_Carousel_Image2_Wrapper>
            <h3>2</h3>
            <img src="https://howlpotdesign.wisacdn.com/_data/product/big/201905/991e6f7e103167c4a019b89e022fa91b.jpg" />
          </Bottom_Carousel_Image2_Wrapper>
        </Carousel_Wrapper2>
      </Carousel2>
      <Bottom_Slider_Wrapper>
        <Bottom_Slider {...settings}>
          <div>
            <h3>1</h3>
            <Slider_Image1 src="https://howlpotdesign.wisacdn.com/_data/product/adcde0b3003e592d1482bd0ed9c8d965.jpg" />
          </div>
          <div>
            <h3>2</h3>
            <Slider_Image2 src="https://howlpotdesign.wisacdn.com/_data/product/c83acdcc5ae8230b0e761ef2859a49d4.jpg" />
          </div>
          <div>
            <h3>3</h3>
            <Slider_Image3 src="https://howlpotdesign.wisacdn.com/_data/product/7f86eb73982feb4a2fd42ccf4aded4ea.jpg" />
          </div>
        </Bottom_Slider>
      </Bottom_Slider_Wrapper>
    </>
  );
}
