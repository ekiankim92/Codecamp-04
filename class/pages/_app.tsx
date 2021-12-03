// import "../styles/globals.css";
// 글로벌로 쓰면 이제 이 스타일은 필요가 없음
import { Global } from "@emotion/react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

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
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken) setMyAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // http://backend04.codebootcamp.co.kr/graphql
  // 'http://example.codebootcamp.co.kr/graphql'

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
