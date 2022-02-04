import MyPageUI from "./Mypage.presenter";
import router from "next/router";

export default function MyPage() {
  const onClickMoveToSecurity = () => {
    router.push("/market/security");
  };

  const onClickMoveToMyOrder = () => {
    router.push("/market/myorder");
  };

  const onClickMoveToArchived = () => {
    router.push("/market/basket");
  };

  const onClickMoveToReload = () => {
    router.push("/market/reloadpage");
  };

  return (
    <>
      <MyPageUI
        onClickMoveToMyOrder={onClickMoveToMyOrder}
        onClickMoveToReload={onClickMoveToReload}
        onClickMoveToSecurity={onClickMoveToSecurity}
        onClickMoveToArchived={onClickMoveToArchived}
      />
    </>
  );
}
