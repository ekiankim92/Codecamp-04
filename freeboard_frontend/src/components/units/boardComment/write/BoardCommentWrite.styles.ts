import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border-top: 2px solid #000;
`;

export const CommentHeader = styled.div`
  padding-top: 25px;
`;

export const VectorPng = styled.img`
  width: 20px;
  height: 20px;
`;

export const CommentWord = styled.span`
  font-size: 20px;
  margin-left: 10px;
`;

export const UserInterface = styled.div`
  margin-top: 20px;
`;

export const UserInput = styled.input`
  width: 180px;
  height: 52px;
  border-radius: 6px;
  padding: 10px;
  border: 1px solid #d3d3d3;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const PasswordInput = styled.input`
  width: 180px;
  height: 52px;
  border-radius: 6px;
  margin-left: 20px;
  padding: 10px;
  border: 1px solid #d3d3d3;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const TextAreaCommentWrapper = styled.div``;

export const TextAreaComment = styled.textarea`
  width: 100%;
  height: 161px;
  margin-top: 20px;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #d3d3d3;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-top: -3px;
  border: 1px solid #d3d3d3;
  border-top: none;
  border-radius: 6px;
`;

export const CommentCount = styled.div`
  padding: 12px;
`;

export const CommentSubmitButton = styled.button`
  width: 91px;
  margin-left: auto;
  color: #eee;
  border-radius: 6px;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;

export const Stars = styled(Rate)`
  margin-left: 10px;
`;
