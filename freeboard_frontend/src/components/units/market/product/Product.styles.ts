import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  margin: 120px auto 50px auto;
  border: 1px solid #000;
  padding: 80px 102px 100px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #808080;
  border-radius: 45px;
  background-color: #eeee;
`;

export const Header = styled.h1`
  font-weight: bold;
  margin-top: -20px;
`;

export const ProductWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductLabel = styled.label`
  font-size: 20px;
`;

export const ProductName = styled.input`
  width: 350px;
  height: 52px;
  margin: 5px;
  padding: 15px;
  border-radius: 16px;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const DetailContents = styled.textarea`
  width: 350px;
  height: 200px;
  font-size: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px;
`;

export const ImageWrapper = styled.div`
  width: 900px;
  height: 200px;
  margin: 25px;
  display: flex;
  align-items: center;
`;

export const InnerImage = styled.div`
  margin-left: 30px;
`;

export const PriceWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PriceLabel = styled.label`
  font-size: 20px;
`;

export const Price = styled.input`
  width: 350px;
  height: 52px;
  margin: 5px;
  padding: 15px;
  border-radius: 16px;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const DescriptionLabel = styled.label`
  font-size: 20px;
`;

export const TagWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
`;

export const TagLabel = styled.label`
  font-size: 20px;
`;

export const MapWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d3d3d3;
`;

export const MapTitle = styled.div`
  width: 350px;
  margin: 5px 0px 15px 0px;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddressHeader = styled.label`
  font-size: 15px;
`;

export const AddressButton = styled.button`
  width: 150px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: #eee;
  }
`;

export const ZipcodeLabel = styled.label`
  font-size: 15px;
`;

export const Zipcode = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
`;

export const AddressLabel = styled.label`
  font-size: 15px;
`;

export const Address = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
`;

export const DetailLabel = styled.label`
  font-size: 15px;
`;

export const DetailAddress = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
`;

export const RemarkWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RemarkLabel = styled.label`
  font-size: 20px;
`;

export const Remark = styled.input`
  width: 350px;
  height: 52px;
  margin: 5px;
  padding: 15px;
  border-radius: 16px;
`;

export const ButtonWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 16px;
  color: #000;
  background-color: #eee;
  :hover {
    cursor: pointer;
    background-color: #000;
    color: #000;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 15px;
  color: #ff0000;
`;
