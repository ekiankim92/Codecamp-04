import MarketQuestionWriteUI from "./MarketQuestionWrite.presenter";
import { FormValues } from "./MarketQuestionWrite.types";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
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
import { Modal } from "react-bootstrap";

export default function MarketQuestionWrite(props) {
  const router = useRouter();

  const [contents, myContents] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const onClickWriteQuestion = async (data: FormValues) => {
    setIsSubmitting(true);
    if (!data.contents) {
      alert("Please Enter Your Inquiry");
      return;
    }
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
      router.reload(`/market/${router.query.marketId}/edit`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    myContents(event.target.value);
  };

  const onClickQuestionUpdate = async () => {
    if (!contents) {
      alert("Please Edit Your Contents");
      return;
    }
    try {
      if (!props.el?._id) return;
      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemQuestionId: router.query.marketId,
            },
          },
        ],
      });
      props.setIsEdit?.(false);
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickTesting = () => {
    alert("testing");
  };

  return (
    <MarketQuestionWriteUI
      onClickWriteQuestion={onClickWriteQuestion}
      onClickQuestionUpdate={onClickQuestionUpdate}
      onChangeContent={onChangeContent}
      contents={contents}
      el={props.el}
      isSubmitting={isSubmitting}
      isEdit={props.isEdit}
      onClickTesting={onClickTesting}
    />
  );
}
