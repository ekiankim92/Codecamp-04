import { useState } from "react";
import TestingUI from "./testing.presenter";

export default function Testing() {
  const [counter, setCounter] = useState(0);

  const onClickForTest = () => {
    alert("testing");
    confirm("true of false");
    console.log("testing");
  };

  const onClickCounter = () => {
    setCounter((prev) => prev + 1);
    console.log("number testing");
    console.log(counter);
  };

  return (
    <TestingUI
      onClickForTest={onClickForTest}
      counter={counter}
      onClickCounter={onClickCounter}
    />
  );
}
