import styled from "@emotion/styled";
import { SmileOutlined, FrownOutlined, MehOutlined } from "@ant-design/icons";

export const OuterWrapper = styled.div`
  width: 75%;
  margin: 100px auto 50px auto;
`;

export const Wrapper = styled.div`
  border: 1px solid #000000;
  padding: 80px 100px 102px 102px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #808080;
`;

export const Header = styled.div`
  width: 100%;
`;

export const HeaderImage = styled.img`
  width: 45px;
`;

export const HeaderDate = styled.div`
  font-size: 15px;
`;

export const HeaderInfo = styled.div`
  font-size: 20px;
  flex-direction: column;
  padding-top: 5px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-top: 12px;
  background-color: #d3d3d3;
`;

export const List = styled.a`
  color: white;
  font-weight: bolder;
  font-size: 20px;
  cursor: grab;
  :hover {
    color: #000000;
  }
`;

export const TitleWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 32px;
  margin: 10px 0px 10px 0px;
`;

export const ImageContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 800px;
`;

export const ImageSection = styled.section`
  cursor: pointer;
  :hover {
    transform: scale(1.5);
  }
`;

export const ContentSection = styled.main`
  width: 400px;
  height: 150px;
  padding: 10px;
  font-weight: 600;
  overflow: scroll;
  overflow-x: hidden;
  border: 1px solid #d3d3d3;
  :hover {
    border: none;
  }
`;

export const VideoSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const IconFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 70px;
`;

export const SmileyFace = styled(SmileOutlined)`
  font-size: 50px;
  color: #0000ff;
  :hover {
    font-size: 60px;
  }
`;

export const FrownFace = styled(FrownOutlined)`
  font-size: 50px;
  color: #ff0000;
  :hover {
    font-size: 60px;
  }
`;

export const NoFace = styled(MehOutlined)`
  font-size: 50px;
  color: #ffa500;
`;

export const LikeDisLikeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 40px;
`;
export const LikeCount = styled.div`
  font-size: 24px;
`;

export const MiddleFace = styled.div`
  font-size: 24px;
`;

export const DislikeCount = styled.div`
  font-size: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 180px;
  height: 45px;
  border-radius: 6px;
  margin: 6px;
  color: #ffffff;
  background-color: #666666;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #333333;
  }
`;
