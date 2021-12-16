import MarketQuestionWriteUI from "./MarketQuestionWrite.presenter";
import { FormValues } from "./MarketQuestionWrite.types";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./MarketQuestionWrite.queries";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/MarketQuestionList.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";

export default function MarketQuestionWrite(props) {
  const router = useRouter();

  const [contents, myContents] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  // const [updateUseditemQuestion] = useMutation<
  //   Pick<IMutation, "updateUseditemQuestion">,
  //   IMutationUpdateUseditemQuestionArgs
  // >(UPDATE_USED_ITEM_QUESTION);

  const onClickWriteQuestion = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      setIsSubmitting(false);
      console.log(result.data?.createUseditemQuestion.contents);
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onChangeContent = (event) => {
    myContents(event.target.value);
  };

  // const onClickQuestionUpdate = async () => {
  //   alert("testing");
  //   if (!contents) {
  //     alert("Please Edit Your Contents");
  //     return;
  //   }
  //   try {
  //     const result = await updateUseditemQuestion({
  //       variables: {
  //         updateUseditemQuestionInput: {
  //           contents,
  //         },
  //         useditemQuestionId: props.el?._id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USED_ITEM_QUESTIONS,
  //           variables: {
  //             useditemQuestionId: router.query.marketId,
  //           },
  //         },
  //       ],
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error.messagae);
  //   }
  // };

  return (
    <MarketQuestionWriteUI
      onClickWriteQuestion={onClickWriteQuestion}
      // onClickQuestionUpdate={onClickQuestionUpdate}
      onChangeContent={onChangeContent}
      contents={contents}
      el={props.el}
      isSubmitting={isSubmitting}
    />
  );
}
