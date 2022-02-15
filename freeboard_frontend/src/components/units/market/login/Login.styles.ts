import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  height: 500px;
  margin: 120px auto 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #eeee;
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

export const EmailLog = styled.input`
  width: 260px;
  height: 40px;
  margin-top: 70px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  @media only screen and (max-width: 700px) {
    width: 200px;
  }
`;

export const PasswordLog = styled.input`
  width: 260px;
  height: 40px;
  margin-top: 10px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  @media only screen and (max-width: 700px) {
    width: 200px;
  }
`;

export const SignButton = styled.button`
  width: 260px;
  height: 48px;
  margin-top: 30px;
  border-radius: 3px;
  color: #eee;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
  @media only screen and (max-width: 700px) {
    width: 200px;
  }
`;

export const RegisterButton = styled.button`
  width: 260px;
  height: 48px;
  margin-top: 10px;
  border-radius: 3px;
  color: #eee;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
  @media only screen and (max-width: 700px) {
    width: 200px;
  }
`;

export const LoginPicture = styled.div`
  width: 400px;
  height: 500px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 16px 16px 0px;
  object-fit: fill;
  @media only screen and (max-width: 700px) {
    object-fit: cover;
  }
  @media only screen and (max-width: 600px) {
    object-fit: cover;
  }
`;
