import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";
// import Sidebar from "./sidebar/Sidebar.container";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  /* display: flex; */
`;

interface ILayoutProps {
  children: ReactChild;
  hidden?: boolean;
}

//  배열에 주소를 넣어서 해당하는것만 안보여주게끔
const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev"];
const HIDDEN_FOOTER = ["/12-02-modal-basic"];
const HIDDEN_REGISTER = ["/registration"];
const HIDDEN_LOGIN = ["/login"];
const HIDDEN_OPENAPI = ["/learnmore/"];
const HIDDEN_PRODUCT_POST = ["/productsubmit"];
const HIDDEN_BASKET = ["/market/basket"];
const HIDDEN_MARKET_LIST = ["/market"];
const HIDDEN_MYPAGE = ["/market/mypage"];
const HIDDEN_MYCART = ["/market/basket"];
const HIDDEN_RELOADPAGE = ["/market/reloadpage"];
const HIDDEN_MYORDER = ["/market/myorder"];
const HIDDEN_SECURITY = ["/market/security"];
const HIDDEN_BOARDLIST = ["/board/board_list"];
const HIDDEN_BOARDWRITE = ["/mento"];

export default function Layout(props: ILayoutProps) {
  // const [hidden, setHidden] = useState<boolean>(false);

  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);
  const isHiddenRegister = HIDDEN_REGISTER.includes(router.asPath);
  const isHiddenLogin = HIDDEN_LOGIN.includes(router.asPath);
  const isHiddenOpenApi = HIDDEN_OPENAPI.includes(router.asPath);
  const isHiddenProductPost = HIDDEN_PRODUCT_POST.includes(router.asPath);
  const isHiddenBasket = HIDDEN_BASKET.includes(router.asPath);
  const isHiddenMarketList = HIDDEN_MARKET_LIST.includes(router.asPath);
  const isHiddenMyPage = HIDDEN_MYPAGE.includes(router.asPath);
  const isHiddenMyCart = HIDDEN_MYCART.includes(router.asPath);
  const isHiddenReloadPage = HIDDEN_RELOADPAGE.includes(router.asPath);
  const isHiddenMyOrder = HIDDEN_MYORDER.includes(router.asPath);
  const isHiddenSecurity = HIDDEN_SECURITY.includes(router.asPath);
  const isHiddenBoardList = HIDDEN_BOARDLIST.includes(router.asPath);
  const isHiddenBoardWrite = HIDDEN_BOARDWRITE.includes(router.asPath);

  // useEffect(() => {
  //   if (router.asPath.includes("board/" && "market/")) {
  //     setHidden(true);
  //   }
  // }, [router.asPath]);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      {!isHiddenRegister &&
        !isHiddenLogin &&
        !isHiddenOpenApi &&
        !isHiddenProductPost &&
        !isHiddenBasket &&
        !isHiddenMarketList &&
        !isHiddenMyPage &&
        !isHiddenReloadPage &&
        !isHiddenMyOrder &&
        !isHiddenSecurity &&
        !isHiddenBoardList &&
        !isHiddenBoardWrite && <Banner />}
      {/* <Navigation /> */}
      <BodyWrapper>
        {/* <Sidebar /> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      {!isHiddenFooter && !isHiddenMarketList && !isHiddenMyCart && <Footer />}
    </Wrapper>
  );
}
