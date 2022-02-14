import router from "next/router";
import BannerUI from "./Banner.presenter";

export default function Banner() {
  const onClickLogin = () => {
    alert("Please login first");
    router.push("/login");
  };

  return <BannerUI onClickLogin={onClickLogin} />;
}
