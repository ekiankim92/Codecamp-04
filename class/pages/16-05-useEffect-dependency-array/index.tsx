import { useEffect, useState } from "react";

export default function UseEffectDependencyArrayPage() {
  const [count, setCount] = useState(0);
  console.log("랜더링시작!");

  // 1번 케이스 한번밖에 적용이 안됨 - 최초 1번 실행 (=DidMount)
  // useEffect(() => {
  //   console.log("최초 한번 실행됨!");
  // }, []);

  // ////// 2번 케이스 ////// -의존성배열의 count 감지후 재실행
  // count 만 올라갈때
  // useEffect(() => {
  //   console.log("count 가 변경되면 재실행!");
  // }, [count]);

  // ////// 3번 케이스 ////// -최초 렌더링 + 1
  // console.log("count 가 변경되면 재실행!");
  // useEffect(() => {
  //   setCount(100);
  // }, []);

  // ////// 4번 케이스 ////// - 무한루프
  // 무한으로 카운트가 올라감
  // 바뀐 숫자가 있어서 다시 useEffect 가 실행하게됨
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!</button>
    </>
  );
}
