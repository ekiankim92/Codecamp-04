// import { useState } from "react";

// export default function StatePrevPage() {
//   const [count, setCount] = useState(0);

//   function onClickCounter() {
//     setCount(count + 1);
//     setCount(count + 1);
//   }
//   // 이건 하나밖에 못올림. 왜냐면 기존에 있는걸 무시하고 마지막걸 실행함. React 가 임시저장으로 들어갔다가 마지막껄 실행함

//   //   function onClickNegativeCounter() {
//   //     setCount(count - 1);
//   //   }

//   return (
//     <>
//       <div>현재 카운트: {count}</div>
//       <button onClick={onClickCounter}>카운트 올리기</button>
//       {/* <button onClick={onClickNegativeCounter}>카운트 내리기</button> */}
//     </>
//   );
// }

import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  );
}
