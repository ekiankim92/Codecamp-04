import styled from "@emotion/styled";
import { Rate } from "antd";

export const Second_Wrapper = styled.div`
  width: 1200px;
  height: 500px;
  margin-left: 100px;
  padding-top: 20px;
  /* padding-bottom: 100px; */
  padding-left: 102px;
  padding-right: 102px;
  border-top: 2px solid black;
  /* background-color: blue; */
`;

export const Comment_Header = styled.div`
  width: 1000px;
  height: 50px;
  padding-left: 10px;
  padding-top: 35px;
  /* background-color: yellow; */
`;

export const Vector_Png = styled.img`
  width: 20px;
  height: 20px;
  margin: -8px;
`;

export const Comment_Word = styled.span`
  width: 37px;
  height: 27px;
  font-size: 15px;
  margin-left: 14px;
`;

export const User_Interface = styled.div`
  width: 1000px;
  height: 50px;
  margin-top: 40px;
  /* background-color: green; */
`;

export const User_Input = styled.input`
  width: 180px;
  height: 52px;
`;

export const Password_Input = styled.input`
  width: 180px;
  height: 52px;
  margin-left: 20px;
`;

export const Rating_Image = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

export const TextArea_Comment_Wrapper = styled.div`
  width: 1300px;
  height: 250px;
  /* background-color: crimson; */
`;

export const TextArea_Comment = styled.textarea`
  width: 1000px;
  height: 161px;
  margin-top: 20px;
`;

export const Comment_Wrapper = styled.div`
  width: 1000px;
  height: 50px;
  display: flex;
  justify-content: start;
  margin-top: -3px;
  border: 1px solid black;
  border-top: none;
  /* background-color: blue; */
`;

export const Comment_Count = styled.div`
  padding: 12px;
`;

export const Comment_Submit_Button = styled.button`
  width: 91px;
  height: auto;
  color: white;
  background-color: black;
  margin-left: auto;
  :hover {
    cursor: pointer;
  }
`;

export const Stars = styled(Rate)``;
