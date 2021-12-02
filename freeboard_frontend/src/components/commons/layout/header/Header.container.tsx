import router from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const onClickLoginPage = () => {
    router.push("../../../../../login");
  };

  return <HeaderUI onClickLoginPage={onClickLoginPage} />;
}
