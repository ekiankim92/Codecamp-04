import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ivory;
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid lightgray;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-style: oblique;
  width: 330px;
  /* height: 130px; */
  /* background-color: crimson; */
`;

export const Logo_Img = styled.img`
  margin-left: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const Header_RoutingPage = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const UsedMarket = styled.div`
  margin-right: 20px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const FreeBoard = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const MyPage = styled.div`
  margin-right: 20px;
  border-left: 1px solid lightgray;
  padding-left: 14px;
  color: black;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

export const Header_Anchor = styled.a`
  font-size: 25px;
  padding: 15px;
  font-weight: bold;
`;
