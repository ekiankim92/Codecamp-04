import { useQuery } from "@apollo/client";
import router from "next/router";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGED_IN } from "./Header.queries";

export default function Header() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // router to "Log In"
  const onClickLoginPage = () => {
    router.push("/login");
  };

  // router to "My Cart"
  const onClickCartPage = () => {
    router.push("/market/basket");
  };

  // router to Market Product List
  const onClickProductList = () => {
    router.push("/market");
  };

  return (
    <HeaderUI
      onClickLoginPage={onClickLoginPage}
      onClickCartPage={onClickCartPage}
      onClickProductList={onClickProductList}
      data={data}
    />
  );
}
