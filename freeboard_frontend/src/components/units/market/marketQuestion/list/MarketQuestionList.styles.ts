import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin: 20px auto;
  height: 150px;
  border-top: 1px solid #d3d3d3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  opacity: 0.5;
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
`;

export const Content = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

export const Button = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  color: #eee;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;

export const ButtonInput = styled.input`
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  color: #eee;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;
