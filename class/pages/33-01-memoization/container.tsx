import { useState, useMemo, useCallback } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다");

  let countLet = 0;

  const [countState, setCountState] = useState(0);

  const randomValue = useMemo(() => Math.random(), []);
  console.log(randomValue);

  // let 은 페이지를 렌더링 시켜주지않음
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    // countLet = countLet + 1
    countLet += 1;
  }, []);

  // state 는 다시 페이지를 렌더링 시켜줌
  const onClickCountState = useCallback(() => {
    // console.log((prev) => prev + 1);
    // console.log(countState + 1);
    // setCountState(countState + 1)
    setCountState((prev) => prev + 1);
  }, []); // 제기역 할수있게 만들어줌. dependency 가 하나 혹은 두개일때만

  return (
    <>
      <div>========================================</div>
      <div>이것은 컨테이너 입니다</div>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      <div>========================================</div>
      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
