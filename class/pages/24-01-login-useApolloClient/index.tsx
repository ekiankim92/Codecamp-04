import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
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

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
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

  const client = useApolloClient();

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
    const accessToken = result.data?.loginUser.accessToken || "";
    localStorage.setItem(
      "accessToken",
      // result.data?.loginUser.accessToken || ""
      accessToken
    );
    setAccessToken?.(accessToken);

    // 이메일과 비번으로 요청을 하고
    // accessToken 을 저장해주면서 userInfo 도 같이 저장
    // fetchUserLoggedIn 을 요청함. 사용자에 유저정보를 받아올수있음
    // const result = axios.get("koreanjson.com/posts/1")     axios 는 이러는 방식으로 원하는 곳에서 useQuery 필요 // function 안에서 요청이 가능함

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    setUserInfo(resultUserInfo.data.fetchUserLoggedIn);

    // const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)
    // 두개를 동시에 넣을수있음
    // 어떤 페이지에서든 글로번 스테이트에서 유저 정보를 쓸수있음

    // useApolloClient
    // axios 처럼 원하는곳에서 API 요청을 할수있음

    // result.data?.loginUser.accessToken;
    // 여기서 setAccessToken 필요! (글로벌 스테이트에)

    // 로그인 성공된 페이지로 이동시키기
    router.push("/24-02-login-success");
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
