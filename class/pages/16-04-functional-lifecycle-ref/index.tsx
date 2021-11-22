import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyLifeCyclePage() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // componentDidMount 와 동일. 즉 화면이 레던되고 나서 이것이 실행이됨
  // useEffect 은 한번 할때마다 다시 실행이됨
  // 한번은 실행이되고 dependency array 가 있으니까 한번만 실행이 되고
  // componentDidMount 와 동일
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();
    // componentWillUnmount 와 동일
    return () => {
      console.log("잘가요");
    };
  }, []);

  // componentDidUpdate 와 비슷
  // 첫 한번은 무조건 실행이됨
  // dependency array 가 없어서 뭐 하나라도 바뀌면 다시 실행이되고
  useEffect(() => {
    console.log("수정됨");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!</button>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
