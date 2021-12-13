import MyPageUI from "./Mypage.presenter";

export default function MyPage(props) {
  return (
    <>
      <MyPageUI data={props.data} />;
    </>
  );
}
