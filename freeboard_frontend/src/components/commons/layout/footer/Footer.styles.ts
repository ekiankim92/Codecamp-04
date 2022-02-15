import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  background-color: yellow;
`;

export const Footer = styled.div`
  width: 100%;
  background-color: #d1c9c7;
`;

export const FooterIcon1 = styled.img`
  margin-bottom: 25px;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const FooterIcon2 = styled.img`
  padding: 10px;
  margin-bottom: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const FooterIcon3 = styled.img`
  padding: 10px;
  margin-bottom: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const FooterAddress = styled.div`
  font-size: 18px;
  padding: 15px;
  float: right;
  margin-top: -95px;
  align-items: center;
  @media only screen and (max-width: 830px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 770px) {
    font-size: 10px;
  }
`;

export const Inqueries = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin: 10px;
  @media only screen and (max-width: 830px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 770px) {
    font-size: 10px;
  }
`;

export const Notice = styled.div`
  width: 100px;
  height: 60px;
  text-align: center;
  padding-top: 15px;
  margin-right: 15px;
  :hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px solid #000;
  }
`;

export const OneToChat = styled.div`
  width: 100px;
  height: 60px;
  text-align: center;
  padding-top: 15px;
  :hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px solid #000;
  }
`;

export const FrequentAsked = styled.div`
  width: 150px;
  height: 60px;
  text-align: center;
  padding: 5px;
  margin-left: 15px;
  :hover {
    cursor: pointer;
    color: gray;
    border-bottom: 1px solid #000;
  }
  @media only screen and (max-width: 770px) {
    margin-top: 20px;
  }
`;

export const FooterName = styled.div`
  font-style: italic;
`;

export const FooterEmail = styled.div`
  font-style: italic;
`;

export const FooterPhone = styled.div`
  font-style: italic;
`;

export const FooterComment = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-left: 15px;
  @media only screen and (max-width: 830px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 770px) {
    font-size: 10px;
  }
`;

export const FooterImages1 = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`;

export const FooterImages2 = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`;

export const FooterImages3 = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`;

export const FooterImages4 = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
`;

export const FooterImages5 = styled.img`
  width: 35px;
  height: 35px;
`;

export const FooterWrapper = styled.div`
  padding: 25px;
`;
