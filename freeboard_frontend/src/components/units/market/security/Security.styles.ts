import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 50%;
  margin: 120px auto 50px auto;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #eeee;
`;

export const Header = styled.div`
  padding: 15px;
  font-size: 28px;
  font-weight: 700;
`;

export const ProfileWrapper = styled.div`
  width: 500px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
`;

export const Image = styled.img`
  :hover {
    cursor: pointer;
  }
`;

export const NameWrapper = styled.div`
  width: 500px;
  display: flex;
  border: 1px solid lightgray;
`;

export const NameInnerWrapper = styled.div`
  width: 200px;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NameLabel = styled.label`
  margin-right: 6px;
`;

export const NameEditWrapper = styled.div`
  width: 250px;
  height: 100px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NameInput = styled.input`
  width: 160px;
  height: 30px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const PasswordWrapper = styled.div`
  width: 500px;
  height: 100px;
  padding: 10px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordLabel = styled.label`
  margin-right: 6px;
`;

export const OldPassworld = styled.input`
  width: 160px;
  height: 30px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const NewPassworld = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 3px;
  padding: 10px;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const EditButton = styled.button`
  width: 52px;
  height: 28px;
  border-radius: 3px;
  color: white;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;
