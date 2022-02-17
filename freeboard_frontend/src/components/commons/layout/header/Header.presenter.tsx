import * as S from "./Header.styles";
import { Breadcrumb, Menu } from "antd";
import { IPropsHeaderUI } from "./Header.types";
import { ChangeEvent } from "react";

export default function HeaderUI(props: IPropsHeaderUI) {
  const menu = (
    <Menu>
      <Menu.Item>
        <S.MyPage onClick={props.onClickMyPage}>My Page</S.MyPage>
      </Menu.Item>
      <Menu.Item>
        <S.UsedMarket onClick={props.onClickProductList}>Products</S.UsedMarket>
      </Menu.Item>
      <Menu.Item>
        <S.FreeBoard onClick={props.onClickFreeBoard}>Boards</S.FreeBoard>
      </Menu.Item>
      <Menu.Item>
        <S.MyCart onClick={props.onClickCartPage}>My Cart</S.MyCart>
      </Menu.Item>
      <Menu.Item>
        <S.LogOut onClick={props.onClickLogout}>Log Out</S.LogOut>
      </Menu.Item>
    </Menu>
  );

  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/images/pawn.png";
  };

  return (
    <>
      <S.Wrapper>
        <S.Logo onClick={props.onClickLandingPage}>
          <S.LogoImg src="images/pawn.png" onError={onError} />
          Woof Shop
        </S.Logo>
        <S.BreadWrapper>
          <Breadcrumb>
            <Breadcrumb.Item overlay={menu}>
              {props.data?.fetchUserLoggedIn ? (
                <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
              ) : (
                <S.Login onClick={props.onClickLoginPage}>Log In</S.Login>
              )}
            </Breadcrumb.Item>
          </Breadcrumb>
        </S.BreadWrapper>
      </S.Wrapper>
    </>
  );
}
