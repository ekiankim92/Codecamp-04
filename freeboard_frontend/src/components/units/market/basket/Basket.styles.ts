import styled from "@emotion/styled";

export const Cart_Title = styled.div`
  margin-top: 150px;
  text-align: center;
`;

export const Outter_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Basket_Wrapper = styled.div`
  width: 400px;
  height: 400px;
  margin-bottom: 50px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: ivory;
  overflow: scroll;
`;

export const Image_Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  padding: 8px;
`;

export const Seller_Name = styled.div`
  font-size: 15px;
`;

export const Name = styled.div`
  font-size: 15px;
`;

export const Remark = styled.div`
  font-size: 15px;
`;

export const Tag = styled.div`
  font-size: 15px;
`;

export const Content = styled.div`
  font-size: 15px;
`;

export const Button_Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Delete_Button = styled.button`
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;
