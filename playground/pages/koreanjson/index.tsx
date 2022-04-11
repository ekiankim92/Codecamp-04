import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";

const Wrapper = styled.div`
  border: 1px solid #000;
  width: 600px;
  height: 600px;
  margin: 100px auto;
`;

const KoreanJson = () => {
  const [law, setLaw] = useState("testing korean law");

  const getLawInfo = async () => {
    alert("testing");
    const result = await axios.get("https://koreanjson.com/posts/1'");
    console.log(result);
    setLaw(result.data?.content);
  };

  const onClickTesting = () => {
    alert("testing");
    console.log("onClickTesting");
  };

  return (
    <Wrapper>
      <div>Hello World</div>
      <div>Testing Center</div>
      <div>{law}</div>
      <button onClick={getLawInfo}>Korean Json</button>
      <button onClick={onClickTesting}>Testing</button>
    </Wrapper>
  );
};
export default KoreanJson;
