import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 30%;
  height: 500px;
  margin: 120px auto 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-radius: 16px;
  background-color: #eeee;
`;

export const HeaderWrapper = styled.div``;

export const Header = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const PointWrapper = styled.div`
  font-size: 20px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.label`
  font-size: 20px;
`;

export const PointInput = styled.input`
  width: 260px;
  height: 40px;
  margin-top: 30px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const SubmitButton = styled.button`
  width: 260px;
  height: 48px;
  margin-top: 16px;
  border-radius: 3px;
  color: #eee;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;
