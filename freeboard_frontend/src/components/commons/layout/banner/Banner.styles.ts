import styled from "@emotion/styled";
import { Carousel } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CarouselWrapper = styled.div`
  height: 600px;
  overflow: hidden;
  border-bottom: 2px solid #d3d3d3;
`;

export const Carousel1 = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const Carousel2 = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #f5f5dc;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CardHeader = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const FireEmoji = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;

export const CardOne = styled.div`
  border: 1px solid #d3d3d3;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
  @media only screen and (max-width: 900px) {
    margin-top: 5px;
  }
`;

export const CardTwo = styled.div`
  border: 1px solid #d3d3d3;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
  @media only screen and (max-width: 900px) {
    margin: 15px;
  }
`;

export const CardThree = styled.div`
  border: 1px solid #d3d3d3;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
`;

export const CardFour = styled.div`
  border: 1px solid #d3d3d3;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 600px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Img2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Img3 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Img4 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const BottomCarouselImage1Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BottomCarouselImage1 = styled.img`
  height: 500px;
  width: 25%;
`;

export const CarouselWrapper2 = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const BottomCarouselImage2Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5dc;
`;

export const BottomSlider = styled(Slider)`
  width: 100%;
  margin-top: 20px;
`;

export const BottomSliderWrapper = styled.div``;

export const SliderImage1 = styled.img`
  width: 300px;
  height: 300px;
  object-fit: fill;
  border-right: 1px solid #d3d3d3;
`;

export const SliderImage2 = styled.img`
  width: 300px;
  height: 300px;
  object-fit: fill;
  border-right: 1px solid #d3d3d3;
`;

export const SliderImage3 = styled.img`
  width: 300px;
  height: 300px;
  object-fit: fill;
  border-right: 1px solid #d3d3d3;
`;
