import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  border: 1px solid #000000;
  margin: 120px auto 50px auto;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #d3d3d3;
  border-radius: 25px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

export const ImageWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    width: 150px;
  }
  @media only screen and (max-width: 900px) {
    width: 130px;
  }
`;

export const Images1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`;

export const Images2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`;

export const Images3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
  @media only screen and (max-width: 1100px) {
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 900px) {
    width: 60px;
    height: 60px;
  }
`;

export const InfoWrapper = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1100px) {
    width: 150px;
  }
  @media only screen and (max-width: 900px) {
    width: 200px;
  }
`;

export const DetailName = styled.div`
  width: 350px;
  height: 80px;
  font-size: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px;
  @media only screen and (max-width: 1100px) {
    width: 150px;
  }
  @media only screen and (max-width: 900px) {
    width: 130px;
  }
`;

export const DetailPrice = styled.div`
  width: 350px;
  height: 80px;
  font-size: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px;
  @media only screen and (max-width: 1100px) {
    width: 150px;
  }
  @media only screen and (max-width: 900px) {
    width: 130px;
  }
`;

export const DetailContents = styled.div`
  width: 350px;
  height: 200px;
  font-size: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px;
  @media only screen and (max-width: 1100px) {
    width: 150px;
  }
  @media only screen and (max-width: 900px) {
    width: 130px;
  }
`;

export const DetailTags = styled.div`
  width: 350px;
  height: 80px;
  font-size: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px;
  @media only screen and (max-width: 1100px) {
    width: 150px;
  }
  @media only screen and (max-width: 900px) {
    width: 130px;
  }
`;

export const DetailRemarks = styled.div`
  width: 350px;
  height: 200px;
  font-size: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 10px;
  @media only screen and (max-width: 1100px) {
    width: 150px;
  }
  @media only screen and (max-width: 900px) {
    width: 130px;
  }
`;

export const SectionWrapper = styled.div`
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #808080;
  border-radius: 25px;
  margin-left: 10px;
  background-color: #fffff0;
  @media only screen and (max-width: 1100px) {
    width: 400px;
  }
  @media only screen and (max-width: 900px) {
    width: 340px;
  }
  @media only screen and (max-width: 800px) {
    width: 280px;
  }
`;

export const MapLabel = styled.label`
  font-size: 25px;
  font-weight: bold;
`;

export const Zipcode = styled.div`
  font-size: 20px;
`;

export const Address = styled.div`
  font-size: 20px;
`;

export const AddressDetail = styled.div`
  font-size: 20px;
`;

export const OuterWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  margin: 5px;
  border-radius: 16px;
  background-color: #ffffff;
  color: #ffffff;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;
