import MarketQuestionListUIItem from "./MarketQuestionList.presenterItem";
import { v4 as uuidv4 } from "uuid";

export default function MarketQuestionListUI(props) {
  if (!props.data) return <div />;
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <MarketQuestionListUIItem key={uuidv4()} el={el} />
      ))}
    </>
  );
}
