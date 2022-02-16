import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto 40px auto;
`;

export const DogImg = styled.img`
  width: 300px;
  height: 300px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`;
