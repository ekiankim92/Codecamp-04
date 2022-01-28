import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px;
  background-color: snow;
  margin: 150px;
`;

export const Header = styled.div`
  font-size: 30px;
  text-decoration: underline;
  padding: 15px;
`;

export const LoginSecurity = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
  padding: 35px;
`;

export const LoginSecurityInfo = styled.span`
  font-size: 25px;
  padding: 15px;
`;

export const YourOrder = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
  padding: 35px;
`;

export const YourOrderInfo = styled.span`
  font-size: 25px;
  padding: 18px;
`;

export const ArchivedOrder = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
  padding: 35px;
`;

export const ArchivedOrderInfo = styled.span`
  font-size: 25px;
  padding: 18px;
`;

export const Reload = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
  padding: 35px;
`;

export const ReloadInfo = styled.span`
  font-size: 25px;
  padding: 18px;
`;
