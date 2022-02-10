import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  border-top: 2px solid #d3d3d3;
`;

export const CommentSection = styled.div`
  padding-bottom: 6px;
  border-bottom: 2px solid #d3d3d3;
`;

export const CommentUser = styled.div`
  padding: 10px;
`;

export const CommentIcons = styled.button`
  width: 35px;
  height: 35px;
  margin-left: 10px;
`;

export const CommentIconsDelete = styled.img`
  width: 50px;
  height: 20px;
`;

export const CommentButton = styled.div`
  width: 120px;
  height: 40px;
`;

export const CreatedAtDate = styled.div`
  margin: 0px 0px 10px 10px;
`;

export const FrontComment = styled.div`
  display: flex;
  padding: 8px;
`;

export const CommentContent = styled.div`
  padding: 10px;
`;

export const HeaderImage = styled.img`
  width: 45px;
`;

export const Stars = styled(Rate)`
  padding: 2px;
`;
