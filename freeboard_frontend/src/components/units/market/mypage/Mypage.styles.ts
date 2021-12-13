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
  font-size: 45px;
  text-decoration: underline;
  padding: 15px;
`;

export const Login_Security = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
  padding: 35px;
  /* background-color: yellow; */
`;

export const Login_Security_Info = styled.span`
  font-size: 25px;
  padding: 15px;
`;

export const Your_Order = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
  padding: 35px;
  /* background-color: bisque; */
`;

export const Your_Order_Info = styled.span`
  font-size: 25px;
  padding: 18px;
`;

export const Archived_Order = styled.div`
  width: 350px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
  padding: 35px;
  /* background-color: lavender; */
`;

export const Archived_Order_Info = styled.span`
  font-size: 25px;
  padding: 18px;
`;
