import styled from "@emotion/styled";
import { Carousel } from "antd";
import { Card } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export const Banner = styled.div`
//   margin: 0;
//   width: 100%;
//   height: 400px;
//   background-color: skyblue;
// `;

export const Carousel_Wrapper = styled.div`
  width: 100%;
  height: 900px;
  overflow: hidden;
  border-bottom: 2px solid lightgray;
`;

export const Carousel1 = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  /* display: flex; */
`;

export const Carousel2 = styled(Carousel)`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: beige;
`;

export const Card_Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Card_Header = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const Fire_Emoji = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`;

export const Card_One = styled.div`
  border: 1px solid lightgray;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
`;

export const Card_Two = styled.div`
  border: 1px solid lightgray;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
`;

export const Card_Three = styled.div`
  border: 1px solid lightgray;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
`;

export const Card_Four = styled.div`
  border: 1px solid lightgray;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%;
  background: #ffffff;
`;

export const Img_Wrapper = styled.div`
  width: 100%;
  height: 900px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Img_2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Img_3 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Img_4 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const Bottom_Carousel_Image1_Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Bottom_Carousel_Image1 = styled.img`
  height: 500px;
  width: 25%;
`;

export const Carousel_Wrapper2 = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const Bottom_Carousel_Image2_Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: beige;
`;

export const Bottom_Slider = styled(Slider)`
  width: 100%;
  margin-top: 20px;
`;

export const Bottom_Slider_Wrapper = styled.div``;

export const Slider_Image1 = styled.img`
  width: 300px;
  height: 300px;
  object-fit: fill;
  border-right: 1px solid lightgray;
`;

export const Slider_Image2 = styled.img`
  width: 300px;
  height: 300px;
  object-fit: fill;
  border-right: 1px solid lightgray;
`;

export const Slider_Image3 = styled.img`
  width: 300px;
  height: 300px;
  object-fit: fill;
  border-right: 1px solid lightgray;
`;
