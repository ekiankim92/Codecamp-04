import styled from "@emotion/styled";

export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  /* background-color: orange; */
`;

export const Logo = styled.div`
  font-size: 20px;
  width: 130px;
  background-color: crimson;
`;

export const Header_RoutingPage = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const UsedMarket = styled.div`
  margin-right: 20px;
  color: gray;
  :hover {
    cursor: pointer;
    color: black;
  }
`;

export const FreeBoard = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: gray;
  :hover {
    cursor: pointer;
    color: black;
  }
`;

export const MyPage = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: gray;
  :hover {
    cursor: pointer;
    color: black;
  }
`;
