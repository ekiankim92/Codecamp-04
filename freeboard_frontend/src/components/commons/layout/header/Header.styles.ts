import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #d1c9c7;
  position: fixed;
  top: 0px;
  z-index: 1;
  border-bottom: 1px solid #d3d3d3;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-style: oblique;
  :hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 40px;
  margin-right: 8px;
  :hover {
    cursor: pointer;
  }
`;

export const SignIn = styled.div`
  :hover {
    cursor: pointer;
    color: #808080;
    font-weight: bold;
  }
`;

export const UsedMarket = styled.div`
  :hover {
    cursor: pointer;
    color: #808080;
    font-weight: bold;
  }
`;

export const FreeBoard = styled.div`
  :hover {
    cursor: pointer;
    color: #808080;
    font-weight: bold;
  }
`;

export const MyCart = styled.div`
  :hover {
    cursor: pointer;
    color: #808080;
    font-weight: bold;
  }
`;

export const MyPage = styled.div`
  :hover {
    cursor: pointer;
    color: #808080;
    font-weight: bold;
  }
`;

export const LogOut = styled.div`
  :hover {
    cursor: pointer;
    color: #808080;
    font-weight: bold;
  }
`;

export const BreadWrapper = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  justify-content: flex-end;
`;

export const UserName = styled.a`
  font-size: 20px;
  font-weight: bold;
  margin-right: 6px;
`;

export const Login = styled.a`
  font-size: 20px;
  font-weight: bold;
  margin-right: 6px;
`;
