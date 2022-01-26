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

export const Image_Wrapper = styled.div`
  width: 900px;
  height: 200px;
  margin: 25px;
  display: flex;
  align-items: center;
`;

export const Inner_Image = styled.div`
  margin-left: 30px;
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
  align-items: center;
  border: 1px solid lightgray;
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
  align-items: center;
`;

export const Address_Header = styled.label`
  font-size: 15px;
`;

export const Address_Button = styled.button`
  width: 150px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

export const Zipcode_Label = styled.label`
  font-size: 15px;
`;

export const Zipcode = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
`;

export const Address_Label = styled.label`
  font-size: 15px;
`;

export const Address = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
`;

export const Detail_Label = styled.label`
  font-size: 15px;
`;

export const Detail_Address = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
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

export const Error_Message = styled.div`
  font-size: 15px;
  color: red;
`;
