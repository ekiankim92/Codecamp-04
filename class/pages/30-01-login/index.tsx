import { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [myinputs, setMyInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  const onChangeInputs = (event) => {
    setMyInputs({ ...myinputs, [event.target.name]: event.target.value });
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        ...myinputs,
      },
    });
    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUserExample.accessToken || ""
    // );
    localStorage.setItem("refreshToken", "true");
    setAccessToken?.(result.data?.loginUserExample.accessToken || "");

    router.push("/30-02-login-success");
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeInputs} name="email" />
      비밀번호:{" "}
      <input type="password" onChange={onChangeInputs} name="password" />
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
}
