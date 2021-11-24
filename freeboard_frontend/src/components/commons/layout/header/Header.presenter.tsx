import * as S from "./Header.styles";
import { Breadcrumb, Menu } from "antd";

export default function HeaderUI() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          // href="http://www.alipay.com/"
        >
          General
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          // href="http://www.taobao.com/"
        >
          Walk Your Dog
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_self"
          rel="noopener noreferrer"
          // href="http://localhost:3000/learnmore"
        >
          Tips & Goods
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_self"
          rel="noopener noreferrer"
          href="http://localhost:3000/learnmore"
        >
          Learn More
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <S.Header>
        <S.Logo>
          Woof Woof!
          <S.Logo_Img src="images/pawn.png" />
        </S.Logo>
        <Breadcrumb>
          <Breadcrumb.Item overlay={menu}>
            <S.Header_Anchor href="">General</S.Header_Anchor>
          </Breadcrumb.Item>
        </Breadcrumb>
        <S.Header_RoutingPage>
          <S.UsedMarket>중고거래</S.UsedMarket>
          <S.FreeBoard>게시판</S.FreeBoard>
          <S.MyPage>마이페이지</S.MyPage>
        </S.Header_RoutingPage>
      </S.Header>
    </>
  );
}
