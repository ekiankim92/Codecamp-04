// 이 페이지는 로그인을 했는지 안했는지를 검증하는 페이지
// 이 페지이를 HOC 상위해서 실행되는 컴포넌트

import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 한 사람만 입장 가능합니다. 로그인을 먼저 해주세요");
      router.push("/22-04-login");
    }
  }, []);

  return <Component {...props} />;
};
