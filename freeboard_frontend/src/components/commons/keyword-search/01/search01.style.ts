import styled from "@emotion/styled";

export const SearchIconWrapper = styled.span`
  margin-right: 5px;
`;

export const SearchImage = styled.img`
  width: 25px;
  height: 25px;
`;

export const SearchSection = styled.div`
  width: 1000px;
  display: flex;
  justify-content: flex-end;
`;

export const SearchArea = styled.input`
  width: 350px;
  height: 44px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
`;

export const SearchData = styled.input`
  width: 224px;
  height: 52px;
  padding: 10px;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  cursor: pointer;
  :hover {
    color: white;
    background-color: black;
  }
`;
