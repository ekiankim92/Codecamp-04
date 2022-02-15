import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  margin: 120px auto 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #eeee;
`;

export const NavigationWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px 20px 0px;
  @media only screen and (max-width: 600px) {
    width: 500px;
  }
`;

export const ItemsBought = styled.h1`
  border-bottom: 2px solid #000;
  :hover {
    cursor: pointer;
  }
`;

export const ItemsSold = styled.h1`
  border-bottom: 2px solid #000;
  :hover {
    cursor: pointer;
  }
`;

export const ItemsIPicked = styled.h1`
  border-bottom: 2px solid #000;
  :hover {
    cursor: pointer;
  }
`;

export const HeaderWrapper = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  margin-bottom: 15px;
  @media only screen and (max-width: 1000px) {
    width: 700px;
  }
  @media only screen and (max-width: 800px) {
    width: 500px;
  }
`;

export const NumberWrapper = styled.div`
  width: 150px;
  text-align: center;
`;

export const ProductWrapper = styled.div`
  width: 500px;
  text-align: flex-start;
`;

export const PriceWrapper = styled.div`
  width: 150px;
  text-align: center;
`;

export const DateWrapper = styled.div`
  width: 150px;
  text-align: center;
`;

export const HeaderInfo = styled.span`
  font-size: 20px;
`;

export const HeaderInfoProduct = styled.span`
  font-size: 20px;
  margin-left: 50px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  @media only screen and (max-width: 800px) {
    width: 500px;
  }
`;

export const NumberInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`;

export const ProductInfo = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 450px;
  @media only screen and (max-width: 800px) {
    width: 250px;
  }
  @media only screen and (max-width: 600px) {
    width: 60px;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`;

export const DateInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
`;

export const SoldImages = styled.img`
  width: 50px;
  height: 50px;
  :hover {
    transform: scale(1.5);
  }
  @media only screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const BoughtImages = styled.img`
  width: 50px;
  height: 50px;
  :hover {
    transform: scale(2);
  }
  @media only screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

export const PaginationWrapper = styled.div`
  margin: 20px 0px 30px 0px;
`;
