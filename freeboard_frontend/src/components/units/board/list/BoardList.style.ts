import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 80%;
  /* margin: 100px auto 20px auto; */
  margin: 120px auto 50px auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: lightcoral;
`;

export const BestWrapper = styled.div`
  background-color: lightblue;
`;

export const Inner_Wrapper = styled.div`
  border: 1px black solid;
`;

export const Lists = styled.div`
  /* border: 1px solid black */
`;

export const Column = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  /* border-bottom: 1px solid black; */
  :hover {
    color: red;
    cursor: pointer;
  }
`;

export const Row = styled.div`
  /* width: 1100px; */
  /* height: 51px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const Create_Board_Button = styled.button`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 3px;
  :hover {
    background-color: yellow;
    cursor: pointer;
  }
`;

export const SearchBar = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;

export const Carousel = styled(Slider)`
  width: 100%
  height: 100%;
  background-color: gold;
`;
