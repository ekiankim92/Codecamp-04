import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 150px;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 45px;
  background-image: url("https://thumbs.dreamstime.com/b/cute-dog-seamless-pattern-dog-wallpaper-suitable-background-wallpaper-cute-dog-seamless-pattern-black-white-color-135656833.jpg");
`;

export const Inner_Wrapper = styled.div`
  width: 800px;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 45px;
`;

export const Email_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Email_Label = styled.label`
  font-weight: 700px;
  margin-right: 10px;
`;

export const Email = styled.input`
  width: 332px;
  height: 44px;
  border-radius: 10px;
`;

export const Name_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Name_Label = styled.label`
  font-weight: 700px;
  margin-right: 10px;
`;

export const First_Name = styled.input`
  width: 332px;
  height: 44px;
  border-radius: 10px;
`;

export const Username_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Username_Label = styled.label`
  font-weight: 700px;
  margin-right: 10px;
`;

export const UserName = styled.input`
  width: 332px;
  height: 44px;
  border-radius: 10px;
`;

export const Password_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Password_Label = styled.label`
  font-weight: 700px;
  margin-right: 10px;
`;

export const Password = styled.input`
  width: 332px;
  height: 44px;
  border-radius: 10px;
`;

export const Pass_Confirm_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Pass_Confirm_Label = styled.label`
  font-weight: 700px;
  margin-right: 10px;
`;

export const Password_Confirm = styled.input`
  width: 332px;
  height: 44px;
  border-radius: 10px;
`;

export const Submit_Button = styled.button`
  width: 100px;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const Error_Message = styled.div`
  color: red;
  font-size: 15px;
`;
