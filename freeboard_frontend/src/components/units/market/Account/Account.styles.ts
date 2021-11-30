import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 150px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 25px;
  background-image: url("https://thumbs.dreamstime.com/b/cute-dog-seamless-pattern-dog-wallpaper-suitable-background-wallpaper-cute-dog-seamless-pattern-black-white-color-135656833.jpg");
  /* opacity: 0.7; */
`;

export const Inner_Wrapper = styled.div`
  width: 800px;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`;

export const First_Name = styled.input`
  width: 332px;
  height: 44px;
`;

export const Last_Name = styled.input`
  width: 332px;
  height: 44px;
`;

export const UserName = styled.input`
  width: 332px;
  height: 44px;
`;

export const Password = styled.input`
  width: 332px;
  height: 44px;
`;

export const Password_Confirm = styled.input`
  width: 332px;
  height: 44px;
`;

export const Email = styled.input`
  width: 332px;
  height: 44px;
`;

export const Submit_Button = styled.button`
  width: 100px;
  height: 60px;
`;
