import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  font-size: 30px;
  font-family: italic;
  margin-left: 15px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WordCount = styled.div`
  margin-right: 10px;
  font-size: 15px;
  display: inline-block;
`;

export const QuestionInput = styled.input`
  width: 1000px;
  height: 150px;
  padding: 15px;
  border-radius: 10px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 1000px;
  text-align: end;
`;

export const Button = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  color: white;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;
