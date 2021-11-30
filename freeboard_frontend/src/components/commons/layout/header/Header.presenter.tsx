import * as S from "./Header.styles";
import { Breadcrumb, Menu } from "antd";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function HeaderUI() {
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
          <S.UsedMarket>Product</S.UsedMarket>
          <S.FreeBoard>Boards</S.FreeBoard>
          <S.MyPage>My Page</S.MyPage>
          <S.Create_Account>Create Account</S.Create_Account>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={S.style}>
                <S.Wrapper>
                  <S.Log_In_Info>
                    <S.Email_Log placeholder="Your login or e-mail" />
                    <S.Password_Log placeholder="Password" />
                    <S.Sign_Log>Sign In </S.Sign_Log>
                    <S.Register_Log>Register</S.Register_Log>
                  </S.Log_In_Info>
                  <S.Log_In_Picture></S.Log_In_Picture>
                </S.Wrapper>
              </Box>
            </Modal>
          </div>
          <S.Sign_In onClick={handleOpen}>Sign in</S.Sign_In>
        </S.Header_RoutingPage>
      </S.Header>
    </>
  );
}
