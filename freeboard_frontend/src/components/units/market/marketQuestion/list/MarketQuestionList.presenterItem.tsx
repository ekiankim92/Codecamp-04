import * as S from "./MarketQuestionList.styles";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./MarketQuestionList.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import MarketQuestionWrite from "../write/MarketQuestionWrite.container";
import { useState } from "react";

export default function MarketQuestionListUIItem(props) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

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
    alert("testing");
    try {
      deleteUseditemQuestion({
        variables: {
          useditemQuestionId: id,
        },
        update(cache, { data }) {
          const deleteId = data?.deleteUseditemQuestion;
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const newFetchItemQuestions = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...newFetchItemQuestions];
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickQuestionUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <div>
          <div>{props.el?.contents}</div>
          <button onClick={onClickQuestionUpdate}>Edit</button>
          <button onClick={onClickQuestionDelete(props.el?._id)}>Delete</button>
          <S.ButtonInput
            type="button"
            value="Reply"
            onClick={props.onClickTesting}
          />
        </div>
      )}
      {isEdit && (
        <MarketQuestionWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
