import styled from "@emotion/styled";

export const Outter_Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-around; */
  width: 400px;
  height: 400px;
  border: 2px solid black;
  background-color: yellowgreen;
  overflow: scroll;
`;

export const Cart_Image = styled.button`
  border: none;
  background-color: lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
  }
`;
