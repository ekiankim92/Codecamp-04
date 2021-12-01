import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  justify-content: space-around;
  border-radius: 16px;
  background-color: #eeee;
`;

export const Log_In_Info = styled.div`
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Login_Logo = styled.div`
  margin-top: 150px;
`;

export const Logo_Img = styled.img`
  margin-left: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const Email_Log = styled.input`
  width: 384px;
  height: 64px;
  margin-top: 70px;
`;

export const Password_Log = styled.input`
  width: 384px;
  height: 64px;
  margin-top: 30px;
`;

export const Sign_Log = styled.button`
  width: 300px;
  height: 64px;
  margin-top: 30px;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const Register_Log = styled.button`
  width: 300px;
  height: 64px;
  margin-top: 30px;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const Log_In_Picture = styled.div`
  width: 600px;
  height: 800px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIt3Ov961p3AmrxLYJy61L6pa-PWT94eRzg&usqp=CAU");
  background-repeat: round;
  background-size: 100%;
  background-position: 100%;
  opacity: 0.5;
  border-radius: 10px;
`;
