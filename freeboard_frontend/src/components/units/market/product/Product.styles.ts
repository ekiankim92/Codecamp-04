import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  /* padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px; */
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  background-color: ivory;
`;

export const Header = styled.h1`
  font-weight: bold;
  margin-top: -20px;
`;

export const UploadButton = styled.button`
  width: 180px;
  height: 180px;
  background-color: white;
  margin-right: 24px;
  outline: none;
  border: 1px dashed gray;
  cursor: grab;
  border-radius: 40px;
  background-image: url("/market_images/image.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Image_Wrapper = styled.div`
  width: 900px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: crimson; */
`;

export const Product_Label = styled.label`
  font-size: 20px;
`;

export const Product_Name = styled.input`
  width: 750px;
  height: 52px;
  margin: 15px;
  border-radius: 16px;
`;
