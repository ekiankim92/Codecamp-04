import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 150px;
  border: 1px solid lightgray;
  border-radius: 16px;
  background-color: snow;
`;

export const HeaderWrapper = styled.div``;

export const Header = styled.div`
  font-size: 35px;
  text-decoration: underline;
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
  width: 150px;
  height: 40px;
  padding: 15px;
  border-radius: 12px;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
`;
