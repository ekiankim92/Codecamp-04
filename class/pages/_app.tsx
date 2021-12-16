// import "../styles/globals.css";
// 글로벌로 쓰면 이제 이 스타일은 필요가 없음
import * as Sentry from "@sentry/nextjs";
import { Global } from "@emotion/react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
// import Head from "next/head";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8TwUQSbnZW-6kfO5Qtq3ovcE4uuoX8LA",
  authDomain: "codecamp-04-ek.firebaseapp.com",
  projectId: "codecamp-04-ek",
  storageBucket: "codecamp-04-ek.appspot.com",
  messagingSenderId: "953883520300",
  appId: "1:953883520300:web:98471590d102c3ff279089",
};

interface IGlobalConText {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  setUserInfo?: Dispatch<SetStateAction<{}>>;
}

// Initialize Firebase
export const firebaseAPP = initializeApp(firebaseConfig);

// Sentry set up
Sentry.init({
  dsn: "https://ac592df11efb44e28577c17c4aca7eff@o1091875.ingest.sentry.io/6109515",
});

// Access Token
export const GlobalContext = createContext<IGlobalConText>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo,
  };

  // 1. 위에 쓰이는 윈도우가 서버임
  // if (typeof window !== "undefined") {
  // }

  // 2. 현재 브라우저 이면
  // if (process.browser)

  // 3 번 방법

  useEffect(() => {
    // 1. this is for accessToken
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setMyAccessToken(accessToken);

    // 2. this is for restoreAccessToken.
    if (localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러를 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. refreshToken 으로 accessToken 재발급 받기 => restoreAccessToken

          // since the code is too long, we have placed in the commons
          // const graphQLClient = new GraphQLClient(
          //   "https://backend04.codebootcamp.co.kr/graphql",
          //   { credentials: "include" }
          // );

          // const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
          // const newAccessToken = result.restoreAccessToken.accessToken;
          // setMyAccessToken(newAccessToken);

          // 3. 기존에 실패한 요청 다시 재요청 하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`, // const newAccessToken = getAccessToken(setMyAccessToken);
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // http://backend04.codebootcamp.co.kr/graphql
  // 'http://example.codebootcamp.co.kr/graphql'

  return (
    <>
      {/* 모든 페이지에서 카카오맵을 다운로드 받음으로 비효율적 */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f838ca83e2835f9b0d0a9e92a075ecb8"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
