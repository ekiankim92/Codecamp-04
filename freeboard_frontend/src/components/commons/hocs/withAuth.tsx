//page for log in confirmation

import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (!localStorage.getItem("refreshToken")) {
        alert("Please log in first");
        router.push("/registration");
      }
    }, []);

    return <Component {...props} />;
  };
