import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #000;
  margin: 60px auto;
`;

const Integer = styled.div`
  font-size: 40px;
  margin: 14px;
`;

const Minus = styled.div`
  border: 1px solid #000;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  text-align: center;
  margin: 10px;
`;

const Plus = styled.div`
  border: 1px solid #000;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  text-align: center;
  margin: 10px;
`;

export default function Numbers() {
  const [number, setNumbers] = useState(0);

  let integer = 0;

  const onClickIncrease = () => {
    console.log(number);
    // setNumbers((prev) => prev + 1);
    setNumbers(integer++);
  };

  const onClickDecrease = () => {
    console.log(number);
    setNumbers((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <Minus onClick={() => setNumbers(number - 1)}>-</Minus>
      <Integer>{number}</Integer>
      <Plus onClick={onClickIncrease}>+</Plus>
    </Wrapper>
  );
}

// import { useState } from "react";
// export default function Numbers() {
//   const [number, setNumbers] = useState(0);
//   console.log(number);
//   return (
//     <>
//       <div onClick={() => setNumbers(number - 1)}>-</div>
//       <div>{number}</div>
//       <div onClick={() => setNumbers(number + 1)}>+</div>
//     </>
//   );
// }
