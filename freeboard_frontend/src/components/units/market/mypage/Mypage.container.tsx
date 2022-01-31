import MyPageUI from "./Mypage.presenter";
import router from "next/router";

export default function MyPage() {
  const onClickMoveToMyOrder = () => {
    router.push("/market/myorder");
  };

  const onClickMoveToReload = () => {
    router.push("/market/reloadpage");
  };

  const onClickMoveToSecurity = () => {
    router.push("/market/security");
  };

  return (
    <>
      <MyPageUI
        onClickMoveToMyOrder={onClickMoveToMyOrder}
        onClickMoveToReload={onClickMoveToReload}
        onClickMoveToSecurity={onClickMoveToSecurity}
      />
    </>
  );
}
