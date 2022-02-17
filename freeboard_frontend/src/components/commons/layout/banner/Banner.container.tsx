import router from "next/router";
import BannerUI from "./Banner.presenter";

export default function Banner() {
  const onClickLogin = () => {
    if (localStorage.getItem("refreshToken")) {
      // eslint-disable-next-line no-useless-return
      return;
    } else {
      alert("Please login first");
      router.push("/login");
    }
  };

  return <BannerUI onClickLogin={onClickLogin} />;
}
