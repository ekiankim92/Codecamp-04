import styled from "@emotion/styled";

export const Best_List = styled.div`
  width: 1100px;
  height: 250px;
`;

export const Outer_Wrapper = styled.div`
  margin: 35px 45px;
  width: 1100px;
  height: auto;
`;

export const Inner_Wrapper = styled.div`
  /* display: flex;
    justify-content: space-around; */
  border: 1px black solid;
  width: 1100px;
  height: auto;
`;

export const Header = styled.div`
  width: 1100px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 3px solid black;
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
`;

export const Row = styled.div`
  width: 1100px;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// export const Best_List_Header = styled.div`

// `

export const SearchSection = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  /* background-color: aqua; */
`;

export const Search_Area = styled.input`
  width: 776px;
  height: 52px;
  /* background-color: red; */
`;

export const Search_Data = styled.input`
  width: 224px;
  height: 52px;
`;

export const Search_Button = styled.button`
  width: 94px;
  height: 52px;
  cursor: pointer;

  :hover {
    color: white;
    background-color: black;
  }
`;

export const Create_Board_Button = styled.button`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 6px;

  :hover {
    background-color: yellow;
    cursor: pointer;
  }
`;
