import styled from "@emotion/styled";
import { Carousel } from "antd";
import { Card } from "antd";

export const Banner = styled.div`
  margin: 0;
  width: auto;
  height: 400px;
  background-color: skyblue;
`;

export const Carousel2 = styled(Carousel)`
  margin-top: 20px;
`;

export const Card_Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Card_Header = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const Card_One = styled.div`
  /* border: 1px solid lightgray; */
  /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8%; */
  /* background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px; */
  border: 1px solid lightgray;
  border-radius: 4px;
`;

export const Card_Two = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
`;

export const Card_Three = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
`;

export const Card_Four = styled.div`
  border: 1px solid lightgray;
  border-radius: 4px;
`;
