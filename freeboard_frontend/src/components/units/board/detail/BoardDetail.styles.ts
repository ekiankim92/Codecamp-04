import styled from "@emotion/styled";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import { SmileOutlined, FrownOutlined, MehOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
  /* background-color: blue; */
`;

export const Header = styled.div`
  width: 1200px;
  height: 250px;
  padding-top: 50px;
  /* background-color: blue; */
`;

export const Header_Image = styled.img`
  width: 45px;
  height: 45px;
`;

export const Header_Date = styled.div`
  font-size: 15px;
  padding-bottom: 15px;
`;

export const Header_Info = styled.div`
  width: 150px;
  height: 150px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5px;
  border-radius: 60px;
  /* background-color: pink;  */
`;

export const Navigation = styled.nav`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  margin-top: 12px;
  background-color: lightgray;
`;

export const List = styled.a`
  color: white;
  font-weight: bolder;
  font-size: 20px;
  cursor: grab;

  :hover {
    color: crimson;
  }
`;

export const MyDiv = styled.div`
  width: 340px;
  height: 60px;
  top: 937px;
  left: 462px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 65px;
  /* background-color: red; */
`;

export const Title = styled.section`
  width: 1200px;
  height: auto;
  /* background-color: olive; */
`;

export const Image_Section = styled.section`
  width: 996px;
  height: 480px;
  /* background-color: aqua; */
`;

export const Content_Section = styled.main`
  width: 996px;
  height: 180px;
  margin-top: 40px;
  /* background-color: beige;  */
`;

export const Video_Section = styled.div`
  width: auto;
  height: auto;
  margin-top: 120px;
  background-color: navy;
`;

export const Icon_Footer = styled.div`
  width: 996px;
  height: 96px;
  margin-top: 40px;
  /* background-color: gold; */
`;

export const Like_Dislike_Count = styled.div`
  width: 996px;
`;

export const SmileyFace = styled(SmileOutlined)`
  font-size: 80px;
  color: blue;
  margin-left: 332px;
  :hover {
    font-size: 150px;
  }
`;

export const FrownFace = styled(FrownOutlined)`
  font-size: 80px;
  color: red;
  margin-left: 50px;
    :hover {
    font-size: 150px;
`;

export const NoFace = styled(MehOutlined)`
  font-size: 80px;
  color: orange;
  margin-left: 50px;
`;

export const Like_DisLike_Wrapper = styled.div`
  height: 100px;
  /* position: relative; */
  /* background-color: greenyellow; */
`;

export const Like_Count = styled.div`
  width: 80px;
  height: 80px;
  font-size: 35px;
  margin-left: 330px;
  text-align: center;
  /* background-color: lightskyblue; */
`;

export const Dislike_Count = styled.div`
  width: 80px;
  height: 80px;
  font-size: 35px;
  margin-left: 591px;
  margin-top: -80px;
  position: relative;
  text-align: center;
  /* background-color: lightslategrey; */
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  /* background-color: red; */

  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const End_Buttons = styled.div`
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;
  margin-left: 300px;
  margin-top: -100px;
  /* background-color: black; */
`;
