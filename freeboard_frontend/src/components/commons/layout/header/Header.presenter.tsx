import * as S from "./Header.styles";
import { Breadcrumb, Menu } from "antd";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

interface IPropsHeaderUI {}

export default function HeaderUI(props) {
  // Open Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
        {props.data ? (
          <S.testing>Welcome! {props.data?.fetchUserLoggedIn.name}</S.testing>
        ) : (
          <S.Logo>
            Woof Woof!
            <S.Logo_Img src="images/pawn.png" />
          </S.Logo>
        )}
        <Breadcrumb>
          <Breadcrumb.Item overlay={menu}>
            <S.Header_Anchor href="">General</S.Header_Anchor>
          </Breadcrumb.Item>
        </Breadcrumb>
        <S.Header_RoutingPage>
          <S.UsedMarket onClick={props.onClickProductList}>
            Products
          </S.UsedMarket>
          <S.MyCart onClick={props.onClickCartPage}>My Cart</S.MyCart>
          <S.FreeBoard>Boards</S.FreeBoard>
          <S.MyPage>My Page</S.MyPage>
          {/* <S.Sign_In onClick={handleOpen}>Log In</S.Sign_In> */}
          <S.Sign_In onClick={props.onClickLoginPage}>Log In</S.Sign_In>
          <div onClick={props.onClickLogout}>Log Out</div>
        </S.Header_RoutingPage>
      </S.Header>
    </>
  );
}
