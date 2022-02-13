import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 40%;
  margin: 120px auto 50px auto;
  padding: 40px 102px 100px 100px;
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

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 45px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const EmailLabel = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const Email = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  align-items: flex-start;
`;

export const NameLabel = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const FirstName = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
  align-items: flex-start;
`;

export const UsernameLabel = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const UserName = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
  align-items: flex-start;
`;

export const PasswordLabel = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const Password = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const PassConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
  align-items: flex-start;
`;

export const PassConfirmLabel = styled.label`
  font-weight: 700px;
  margin-bottom: 4px;
`;

export const PasswordConfirm = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 8px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const SubmitButton = styled.button`
  width: 260px;
  height: 48px;
  margin-top: 30px;
  border-radius: 3px;
  color: #ffffff;
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
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 12px;
`;
