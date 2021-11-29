import styled from "@emotion/styled";

export const Footer = styled.div`
  display: absolute;
  z-index: 1;
  height: 200px;
  background-color: ivory;
`;

export const Footer_Images1 = styled.img`
  margin: 10px;
  margin-bottom: 25px;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const Footer_Images2 = styled.img`
  margin: 10px;
  padding: 10px;
  margin-bottom: 25px;
  :hover{
    cursor: pointer;
`;

export const Footer_Images3 = styled.img`
  margin: 10px;
  padding: 10px;
  margin-bottom: 25px;
  :hover{
    cursor: pointer;
`;

export const Footer_Address = styled.div`
  font-size: 18px;
  padding: 15px;
  float: right;
  margin-top: -50px;
  align-items: center;
`;

export const Inqueries = styled.div`
  display: flex;
  justify-content: center;
  float: left;
  margin-top: 16px;
  margin-left: 15px;
`;

export const Notice = styled.div`
  width: 100px;
  /* height: 150px; */
  text-align: center;
  padding: 5px;
  border: 1px solid lightgray;
  margin-right: 15px;
  :hover {
    cursor: pointer;
    color: black;
    /* background-color: royalblue; */
`;

export const One_To_Chat = styled.div`
  width: 100px;
  /* height: 150px; */
  text-align: center;
  padding: 5px;
  border: 1px solid lightgray;
  :hover {
    cursor: pointer;
    color: black;
    /* background-color: lavender; */
`;

export const Frequent_Asked = styled.div`
  width: 100px;
  /* height: 150px; */
  text-align: center;
  padding: 5px;
  border: 1px solid lightgray;
  margin-left: 15px;
  :hover {
    cursor: pointer;
    color: black;
    /* background-color: magenta; */
  }
`;

export const Footer_Name = styled.div`
  font-style: italic;
`;

export const Footer_Email = styled.div`
  font-style: italic;
`;

export const Footer_Phone = styled.div`
  font-style: italic;
`;

export const Footer_Comment = styled.div`
  font-weight: bold;
  font-size: 16px;
  /* margin: 10px; */
  margin-left: 15px;
`;
