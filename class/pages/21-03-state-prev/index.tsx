import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // 1번 화살표 함수
    // setCount((prev) => prev + 1);
    // 명칭은 콜백함수가 됨

    // 2번 그냥 함수
    // setCount(function (prev) {
    // 로직 추가하기 ... const aaa = 3 // 변수도 만들수있음
    // 로직 추가하기 ...
    //   return prev + 1;
    // });

    // 3번 화살표 함수에서 매개변수 바꾸기
    setCount((wgwgwgwgwgwgw) => wgwgwgwgwgwgw + 1);
  }

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </>
  );
}
