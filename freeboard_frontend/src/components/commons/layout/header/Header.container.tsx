import HeaderUI from "./Header.presenter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./Header.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, useContext } from "react";
import { GlobalConText } from "../../../../../pages/_app";
import { useState } from "react";
import { withAuth } from "../../../../../src/components/commons/hocs/withAuth";

export default function Header() {
  // const router = useRouter();

  // // Gloal Acceess Token
  // const { setAccessToken } = useContext(GlobalConText);

  // // Log in
  // const [loginUser] = useMutation<
  //   Pick<IMutation, "loginUser">,
  //   IMutationLoginUserArgs
  // >(LOGIN_USER);

  // // Access Token 조회
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // const [myInputs, setMyInputs] = useState({
  //   email: "",
  //   password: "",
  // });

  // const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
  //   setMyInputs({
  //     ...myInputs,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const onClickLogin = async () => {
  //   const result = await loginUser({
  //     variables: {
  //       ...myInputs,
  //     },
  //   });
  //   localStorage.setItem(
  //     "accessToken",
  //     result.data?.loginUser.accessToken || ""
  //   );
  //   setAccessToken?.(result.data?.loginUser.accessToken || "");
  //   router.push("/learnmore");
  // };

  // //Router to New Registration
  // const onClickRegister = () => {
  //   router.push("../../../../../registration/");
  // };

  return <HeaderUI />;
}
// export default withAuth(Header);
