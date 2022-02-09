import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 75%;
  margin: 120px auto 50px auto;
  border: 1px solid #000000;
  padding: 80px 100px 102px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #808080;
  border-radius: 8px;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const WriterWrapper = styled.div`
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const Password = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 160px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 8px;
  border-radius: 6px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const ZipcodeWrapper = styled.div`
  margin-top: 20px;
`;

export const Address1 = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const Address2 = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 6px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  margin-right: 24px;
  outline: none;
  border: 1px dashed #808080;
  cursor: grab;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 180px;
  height: 60px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  color: #ffffff;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === true ? "black" : "lightgray"};
`;

export const ErrorNotification = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 4px;
  margin-left: 2px;
`;
