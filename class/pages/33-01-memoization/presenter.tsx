import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 됩니다");

  // container 페이지에서 눌렀는데도 똑같이 여기에 있는 콘솔로그가 뜸
  return (
    <>
      <div>========================================</div>
      <div>이것은 프리젠터 입니다</div>
      <div>========================================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
