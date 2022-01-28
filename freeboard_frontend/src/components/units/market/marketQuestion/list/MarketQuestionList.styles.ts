import styled from "@emotion/styled";

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 500px;
  height: 150px;
  padding: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-size: 10px;
  padding: 5px;
  margin-left: 5px;
`;

export const UserDate = styled.div`
  font-size: 10px;
  padding: 5px;
  margin-left: 5px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 15px;
  border: 1px solid lightgray;
`;

export const Content = styled.div`
  font-size: 15px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
`;

export const ButtonInput = styled.input`
  width: 100px;
  height: 40px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
`;
