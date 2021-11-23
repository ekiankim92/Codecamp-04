import {
  Footer,
  Footer_Images1,
  Footer_Images2,
  Footer_Images3,
  Inqueries,
  Notice,
  One_To_Chat,
  Frequent_Asked,
  Footer_Address,
  Footer_Name,
  Footer_Email,
  Footer_Phone,
  Footer_Comment,
} from "./Footer.styles";

export default function FooterUI() {
  return (
    <>
      <Footer>
        <div>
          <Footer_Images1 src="/images/facebook.png" />
          <Footer_Images2 src="/images/instagram.png" />
          <Footer_Images3 src="/images/twitter.png" />
          <Footer_Comment>
            Please don't forget vist us and to subscribe!
          </Footer_Comment>
        </div>
        <Footer_Address>
          <div>서울, 구로구, 구로동, 디지털로 300 패스트파이브 구로점</div>
          <Footer_Name>EunKuk Ian Kim</Footer_Name>
          <Footer_Email>eunkukkim1992@gmail.com</Footer_Email>
          <Footer_Phone>010-2732-9260</Footer_Phone>
        </Footer_Address>
        <Inqueries>
          <Notice>공지사항</Notice>
          <One_To_Chat>1:1 문의</One_To_Chat>
          <Frequent_Asked>자주 묻는 질문</Frequent_Asked>
        </Inqueries>
      </Footer>
    </>
  );
}
