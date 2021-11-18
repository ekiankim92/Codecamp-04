import { Banner } from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Banner>
      여기는 배너 영역입니다
      <Slider {...settings}>
        <div>
          <h3>1</h3>
          <img
            src="https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg"
            width={1500}
            height={300}
          />
        </div>
        <div>
          <h3>2</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZvNT3qiADQNP3BXeweSJociiEDQITeWEVQ&usqp=CAU"
            width={400}
            height={300}
          />
        </div>
        <div>
          <h3>3</h3>
          <img src="https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?size=626&ext=jpg&ga=GA1.2.1356491196.1623715200" />
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Banner>
  );
}
