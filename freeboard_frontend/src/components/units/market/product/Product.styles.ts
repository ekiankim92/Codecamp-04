import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 45px;
  background-color: ivory;
`;

export const Header = styled.h1`
  font-weight: bold;
  margin-top: -20px;
`;

export const Product_Wrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Product_Label = styled.label`
  font-size: 20px;
`;

export const Product_Name = styled.input`
  width: 350px;
  height: 52px;
  margin: 5px;
  padding: 15px;
  border-radius: 16px;
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
  margin: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: yellow;
`;

export const Price_Wrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Price_Label = styled.label`
  font-size: 20px;
`;

export const Price = styled.input`
  width: 350px;
  height: 52px;
  margin: 5px;
  padding: 15px;
  border-radius: 16px;
`;

export const Description_Wrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const Description_Label = styled.label`
  font-size: 20px;
`;

export const Tag_Wrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
`;

export const Tag_Label = styled.label`
  font-size: 20px;
`;

export const Map_Wrapper = styled.div`
  display: flex;
  background-color: lightblue;
`;

export const Map_Title = styled.div`
  width: 350px;
  margin: 5px 0px 15px 0px;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Address_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Remark_Wrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Remark_Label = styled.label`
  font-size: 20px;
`;

export const Remark = styled.input`
  width: 350px;
  height: 52px;
  margin: 5px;
  padding: 15px;
  border-radius: 16px;
`;

export const Button_Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Submit_Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 16px;
  color: black;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;
