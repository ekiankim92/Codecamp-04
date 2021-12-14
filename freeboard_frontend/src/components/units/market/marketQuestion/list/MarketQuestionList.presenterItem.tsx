import { FETCH_USED_ITEM_QUESTIONS } from "./MarketQuestionList.queries";
import { useForm } from "react-hook-form";

export default function MarketQuestionListUIItem(props) {
  const { handleSubmit, register } = useForm({
    mode: "onTouched",
  });

  return (
    <form onSubmit={handleSubmit(props.onClickQuestionUpdate)}>
      <div>{props.el.contents}</div>
      <button>Edit</button>
      <button>Delete</button>
    </form>
  );
}
