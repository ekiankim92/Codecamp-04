import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 200px;
  height: 700px;
  background-color: blue;
`;

interface ILayoutProps {
  children: ReactChild;
}

//  배열에 주소를 넣어서 해당하는것만 안보여주게끔
const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev"];

const HIDDEN_FOOTER = ["/12-02-modal-basic"];
//  배열이니까 여러개가 있을수 있음

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar>sidebar!</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      {!isHiddenFooter && <Footer />}
    </Wrapper>
  );
}
