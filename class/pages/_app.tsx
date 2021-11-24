// import "../styles/globals.css";
// 글로벌로 쓰면 이제 이 스타일은 필요가 없음
import { Global } from "@emotion/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// Initialize Firebase
export const firebaseAPP = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // http://backend04.codebootcamp.co.kr/graphql
  //'http://example.codebootcamp.co.kr/graphql'

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
