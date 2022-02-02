import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px;
  background-color: #eeee;
  margin: 150px;
`;

export const Header = styled.div`
  padding: 15px;
  font-size: 28px;
  font-weight: 700;
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
  margin-bottom: 30px;
`;

export const ReloadInfo = styled.span`
  font-size: 25px;
  padding: 18px;
`;
