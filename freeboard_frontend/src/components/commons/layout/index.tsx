import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
// import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";
import Sidebar from "./sidebar/Sidebar.container";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;

interface ILayoutProps {
  children: ReactChild;
}

//  배열에 주소를 넣어서 해당하는것만 안보여주게끔
const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev"];
const HIDDEN_FOOTER = ["/12-02-modal-basic"];
//  배열이니까 여러개가 있을수 있음
const HIDDEN_REGISTER = ["/registration"];
const HIDDEN_LOGIN = ["/login"];
const HIDDEN_OPENAPI = ["/learnmore"];
const HIDDEN_PRODUCT_POST = ["/productsubmit"];
const HIDDEN_PRODUCT_DETAIL = [`/market/$[marketId]`];
const HIDDEN_BASKET = ["/market/basket"];
const HIDDEN_MARKET_LIST = ["/market"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  const isHiddenRegister = HIDDEN_REGISTER.includes(router.asPath);
  const isHiddenLogin = HIDDEN_LOGIN.includes(router.asPath);
  const isHiddenOpenApi = HIDDEN_OPENAPI.includes(router.asPath);
  const isHiddenProductPost = HIDDEN_PRODUCT_POST.includes(router.asPath);
  const isHiddenProductDetail = HIDDEN_PRODUCT_DETAIL.includes(router.asPath);
  const isHiddenBasket = HIDDEN_BASKET.includes(router.asPath);
  const isHiddenMarketList = HIDDEN_MARKET_LIST.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      {!isHiddenRegister &&
        !isHiddenLogin &&
        !isHiddenOpenApi &&
        !isHiddenProductPost &&
        !isHiddenProductDetail &&
        !isHiddenBasket &&
        !isHiddenMarketList && <Banner />}
      {/* <Navigation /> */}
      <BodyWrapper>
        {!isHiddenRegister &&
          !isHiddenLogin &&
          !isHiddenOpenApi &&
          !isHiddenProductPost &&
          !isHiddenProductDetail &&
          !isHiddenBasket &&
          !isHiddenMarketList && <Sidebar />}
        <Body>{props.children}</Body>
      </BodyWrapper>
      {!isHiddenFooter && !isHiddenMarketList && <Footer />}
    </Wrapper>
  );
}
