import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  //   const [myEmail, setMyEmail] = useState("");
  //   const [myPassword, setMyPassword] = useState("");

  const [myinputs, setMyInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  //   const onChangeMyEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //     setMyEmail(event.target.value);
  //   };

  //   const onChangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
  //     setMyPassword(event.target.value);
  //   };

  const onChangeInputs = (event) => {
    setMyInputs({ ...myinputs, [event.target.name]: event.target.value });
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        // email: myEmail,
        // password: myPassword,
        ...myinputs,
      },
    });
    setAccessToken?.(result.data?.loginUser.accessToken || "");
    // result.data?.loginUser.accessToken;
    // 여기서 setAccessToken 필요! (글로벌 스테이트에)

    // 로그인 성공된 페이지로 이동시키기
    router.push("/22-02-login-success");
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
