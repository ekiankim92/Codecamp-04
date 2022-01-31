import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #eeee;
  margin: 150px;
`;

export const LoginInfo = styled.div`
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginLogo = styled.div`
  margin-top: 190px;
  font-size: 28px;
  font-weight: 700;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const LogoImg = styled.img`
  margin-left: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const EmailLog = styled.input`
  /* width: 384px;
  height: 64px; */
  width: 260px;
  height: 40px;
  margin-top: 70px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const PasswordLog = styled.input`
  width: 260px;
  height: 40px;
  /* margin-top: 70px; */
  margin-top: 10px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const SignButton = styled.button`
  /* width: 300px;
  height: 64px; */
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

export const RegisterButton = styled.button`
  /* width: 300px;
  height: 64px; */
  width: 260px;
  height: 48px;
  margin-top: 10px;
  border-radius: 3px;
  color: white;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;

export const LoginPicture = styled.div`
  width: 400px;
  height: 500px;
  /* width: 1000px;
  height: 500px; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 16px 16px 0px;
`;
