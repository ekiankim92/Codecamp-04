import * as S from "./testing.styles";

export default function TestingUI(props) {
  return (
    <S.Wrapper>
      <div>Testing</div>
      <div>Second Testing</div>
      <button onClick={props.onClickForTest}>Click for test</button>
      <div>{props.counter}</div>
      <button onClick={props.onClickCounter}>+1</button>
    </S.Wrapper>
  );
}
