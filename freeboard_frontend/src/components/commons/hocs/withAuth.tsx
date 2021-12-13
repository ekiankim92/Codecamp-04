//page for log in confirmation

import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("Please log in first");
      router.push("/registration");
    }
  }, []);

  return <Component {...props} />;
};
