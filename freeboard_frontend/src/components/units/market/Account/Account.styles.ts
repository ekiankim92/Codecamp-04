import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 150px;
  padding: 40px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 16px;
  background-color: #eeee;
`;

export const RegisterIntro = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const Inner_Wrapper = styled.div`
  /* width: 800px;
  height: 900px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 45px;
`;

export const Email_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: flex-start;
  margin-bottom: 12px;
  /* background-color: lightblue; */
`;

export const Email_Label = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const Email = styled.input`
  /* width: 332px;
  height: 44px; */
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const Name_Wrapper = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  margin-bottom: 12px;
  align-items: flex-start;
  /* background-color: gold; */
`;

export const Name_Label = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const First_Name = styled.input`
  /* width: 332px;
  height: 44px;
  border-radius: 10px; */
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const Username_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 12px;
  align-items: flex-start;
  /* background-color: beige; */
`;

export const Username_Label = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const UserName = styled.input`
  /* width: 332px;
  height: 44px;
  border-radius: 10px; */
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const Password_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 12px;
  align-items: flex-start;
  /* background-color: khaki; */
`;

export const Password_Label = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const Password = styled.input`
  /* width: 332px;
  height: 44px;
  border-radius: 10px; */
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const Pass_Confirm_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 12px;
  align-items: flex-start;
  /* background-color: lightgray; */
`;

export const Pass_Confirm_Label = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const Password_Confirm = styled.input`
  /* width: 332px;
  height: 44px;
  border-radius: 10px; */
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const Submit_Button = styled.button`
  /* width: 130px;
  height: 60px; */
  width: 260px;
  height: 48px;
  margin-top: 30px;
  border-radius: 3px;
  color: white;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  /* background-color: black; */
`;

export const Error_Message = styled.div`
  color: red;
  font-size: 12px;
  /* background-color: blue; */
`;
