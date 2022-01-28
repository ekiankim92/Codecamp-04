import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries";

export default function Header() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onClickLoginPage = () => {
    router.push("/login");
  };

  const onClickCartPage = () => {
    router.push("/market/basket");
  };

  const onClickProductList = () => {
    router.push("/market");
  };

  const onClickLogout = () => {
    localStorage.removeItem("refreshToken");
    const result = logoutUser();
    console.log(result);
    alert("You Have Logged Out");
    router.push("/");
    router.reload();
  };

  return (
    <HeaderUI
      onClickLoginPage={onClickLoginPage}
      onClickCartPage={onClickCartPage}
      onClickProductList={onClickProductList}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
