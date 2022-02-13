import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 120px 20px 40px 0px;
`;

export const Header = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProductSubmitButtonWrapper = styled.div`
  margin: 0px auto 10px;
  width: 80%;
  display: flex;
  justify-content: flex-end;
`;

export const ProductSubmitButton = styled.button`
  border: none;
  width: 200px;
  height: 48px;
  border-radius: 6px;
  :hover {
    cursor: pointer;
    border: 1px solid #d3d3d3;
  }
`;

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 350px;
  height: 350px;
  margin-bottom: 50px;
  border: 1px solid #d3d3d3;
  border-radius: 6px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #d3d3d3;
  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 8px;
  object-fit: fill;
  :hover {
    width: 98%;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  font-weight: bold;
  padding: 5px;
`;

export const TimerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const Timer = styled.span`
  opacity: 0.4;
`;

export const NameWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.div`
  width: 120px;
  padding: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CartIcon = styled.button`
  border-radius: 4px 0px 0px 4px;
  width: 50%;
  border: none;
  border-right: 1px solid #d3d3d3;
  background-color: #fff;
  :hover {
    border: 1px solid #000000;
    cursor: pointer;
    background-color: #d3d3d3;
  }
`;

export const PickIcon = styled.button`
  width: 50%;
  border: none;
  border-radius: 0px 4px 4px 0px;
  background-color: #fff;
  :hover {
    border: 1px solid #000000;
    cursor: pointer;
    background-color: #d3d3d3;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BuyButton = styled.button`
  height: 30px;
  border: none;
  border-top: 1px solid #d3d3d3;
  :hover {
    cursor: pointer;
    background-color: #d3d3d3;
  }
`;

export const LoadMore = styled.div`
  text-align: center;
`;

export const MoreButton = styled.button`
  opacity: 0.5;
  width: 200px;
  height: 60px;
  border: none;
  cursor: pointer;
`;
