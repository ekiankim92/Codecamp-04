import LogInUI from "./Login.presenter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Login.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalConText } from "../../../../../pages/_app";

export default function LogIn() {
  const router = useRouter();

  // Gloal Acceess Token
  const { setAccessToken } = useContext(GlobalConText);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [myInputs, setMyInputs] = useState({
    email: "admin@gmail.com",
    password: "1234",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        ...myInputs,
      },
    });
    // log in with the token
    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUser.accessToken || ""
    // );

    localStorage.setItem("refreshToken", "true");
    setAccessToken?.(result.data?.loginUser.accessToken || "");

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    if (baskets.length) {
      const result = confirm(
        "There Is Already An Item In Your Cart. Would You Like To Move To That Page?"
      );
      if (result) {
        return router.push("/market/basket");
      } else if (!result) {
        router.push("/market");
      }
    }
  };

  const onClickRegister = () => {
    router.push("/registration");
  };

  return (
    <LogInUI
      onChangeInputs={onChangeInputs}
      onClickLogin={onClickLogin}
      onClickRegister={onClickRegister}
      data={data}
    />
  );
}
