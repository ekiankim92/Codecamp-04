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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
import {
  Carousel2,
  Card_Wrapper,
  Card_Header,
  Card_One,
  Card_Two,
  Card_Three,
  Card_Four,
} from "./Banner.styles";
import { Card } from "antd";

export default function BannerUI() {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#759958",
  };

  const contentStyle2 = {
    height: "140px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#7c9faf",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src="https://howlpotdesign.wisacdn.com/_data/banner/f8b1a21c8c6074ef9b6f96d4e5da012a.jpg" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
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
      ,
      <Carousel2 autoplay>
        <div>
          <div>
            <h3 style={contentStyle2}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle2}>2</h3>
          </div>
        </div>
      </Carousel2>
    </>
  );
}
