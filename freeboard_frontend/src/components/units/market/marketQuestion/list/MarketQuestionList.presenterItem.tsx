import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./MarketQuestionList.queries";
import { useContext } from "react";
import { MyContext } from "../../../../../../pages/market/[marketId]/edit";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";

export default function MarketQuestionListUIItem(props) {
  const router = useRouter();

  const { isEdit } = useContext(MyContext);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  // const onClickQuestionDelete = async () => {
  //   try {
  //     const result = await deleteUseditemQuestion({
  //       variables: {
  //         useditemQuestionId: props.el?._id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USED_ITEM_QUESTIONS,
  //           variables: {
  //             useditemId: String(router.query.marketId),
  //           },
  //         },
  //       ],
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const onClickQuestionDelete = (id) => () => {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: id,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestions: prev,
          },
        });
      },
    });
  };

  return (
    <>
      <div>{props.el.contents}</div>
      <button>Edit</button>
      <button onClick={onClickQuestionDelete}>Delete</button>
    </>
  );
}
