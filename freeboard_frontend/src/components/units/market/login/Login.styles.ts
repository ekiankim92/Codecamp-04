import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  justify-content: space-around;
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
  margin-top: 150px;
`;

export const LogoImg = styled.img`
  margin-left: 14px;
  :hover {
    cursor: pointer;
  }
`;

export const EmailLog = styled.input`
  width: 384px;
  height: 64px;
  margin-top: 70px;
  border-radius: 16px;
  padding: 10px;
`;

export const PasswordLog = styled.input`
  width: 384px;
  height: 64px;
  margin-top: 30px;
  border-radius: 16px;
  padding: 10px;
`;

export const SignButton = styled.button`
  width: 300px;
  height: 64px;
  margin-top: 30px;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
`;

export const RegisterButton = styled.button`
  width: 300px;
  height: 64px;
  margin-top: 30px;
  border-radius: 16px;
  :hover {
    cursor: pointer;
    background-color: ivory;
  }
`;

export const LoginPicture = styled.div`
  width: 600px;
  height: 800px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;
