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
  border-radius: 25px;
`;

export const Image_Wrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Images1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`;

export const Images2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`;

export const Images3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const Info_Wrapper = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: lightblue; */
`;

export const Detail_Name = styled.div`
  width: 350px;
  height: 80px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;

export const Detail_Price = styled.div`
  width: 350px;
  height: 80px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;

export const Detail_Contents = styled.div`
  width: 350px;
  height: 200px;
  font-size: 15px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  /* overflow: scroll; */
`;

export const Detail_tags = styled.div`
  width: 350px;
  height: 80px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;

export const Detail_Remarks = styled.div`
  width: 350px;
  height: 200px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
  /* overflow: scroll; */
`;

export const Section_Wrapper = styled.div`
  width: 550px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 25px;
  margin-left: 10px;
  background-color: ivory;
`;

export const Map_Label = styled.label`
  font-size: 25px;
  font-weight: bold;
`;

export const Zipcode = styled.div`
  font-size: 20px;
`;

export const Address = styled.div`
  font-size: 20px;
`;

export const Address_Detail = styled.div`
  font-size: 20px;
`;

export const Outter_Wrapper = styled.div`
  display: flex;
  margin: 10px;
`;

export const Button_Wrapper = styled.div`
  margin-top: 15px;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  margin: 5px;
  border-radius: 16px;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
`;
