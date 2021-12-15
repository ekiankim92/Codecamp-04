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
  margin: 100px;
  /* padding: 80px 102px 100px 102px; */
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

export const Search_Wrapper = styled.div`
  margin: 100px;
  width: 300px;
  background-color: green;
`;
