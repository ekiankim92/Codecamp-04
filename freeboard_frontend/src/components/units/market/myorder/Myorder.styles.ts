import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px;
  background-color: snow;
  margin: 150px;
`;

export const HeaderWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid black;
  background-color: lightblue;
`;

export const ItemsBought = styled.h1`
  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

export const ItemsSold = styled.h1`
  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

export const SoldImages = styled.img`
  width: 50px;
  height: 50px;
`;
