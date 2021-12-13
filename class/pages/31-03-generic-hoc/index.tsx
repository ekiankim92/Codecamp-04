import { useRouter } from "next/router";
import { ComponentType, useEffect, useState } from "react";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    // const [isMyLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인 한 사람만 입장 가능합니다. 로그인을 먼저 해주세요");
        router.push("/22-04-login");
      }
      //   else {
      //     setIsLoading(false);
      //   }
    }, []);

    // 이렇게 하면 객체로 넘겨주는거임
    // return {
    //   isLoading: isMyLoading,
    // };
    return <Component {...props} />;
  };
