import styled from "@emotion/styled";

export const CartTitle = styled.div`
  margin-top: 150px;
  text-align: center;
`;

export const OutterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const BasketWrapper = styled.div`
  width: 350px;
  height: 350px;
  margin-bottom: 50px;
  border: 1px solid lightgray;
  border-radius: 6px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 8px;
  object-fit: fill;
`;

export const RemarkWrapper = styled.div`
  padding: 10px;
  /* background-color: lightblue; */
`;

export const Remark = styled.div`
  font-size: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 10px;
  align-items: center;
  /* justify-content: space-around; */
  /* background-color: gold; */
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  /* background-color: yellow; */
`;

export const Time = styled.div`
  font-size: 15px;
  opacity: 0.4;
  text-align: right;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeleteButton = styled.button`
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;
