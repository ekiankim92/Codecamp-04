import * as S from "./MarketQuestionList.styles";
import { DELETE_USED_ITEM_QUESTION } from "./MarketQuestionList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import MarketQuestionWrite from "../write/MarketQuestionWrite.container";
import { useState } from "react";
import { IPropsMarketQuestionListUIItem } from "./MarketQuestionList.types";
import { timeDisplay } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";

export default function MarketQuestionListUIItem(
  props: IPropsMarketQuestionListUIItem
) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickQuestionDelete = (id: string) => () => {
    Modal.success({ content: "Comment Deleted" });
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
                  (el: any) => readField("_id", el) !== deleteId
                );
                return [...newFetchItemQuestions];
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log("Comment Delete:", error.message);
    }
  };

  const onClickQuestionUpdate = () => {
    setIsEdit(true);
  };

  return (
    <S.Wrapper>
      {!isEdit && (
        <div>
          <S.UserInfoWrapper>
            <S.UserName>{props.userData?.fetchUserLoggedIn.name}</S.UserName>
            <S.UserDate>
              {timeDisplay(props.userData?.fetchUserLoggedIn.createdAt)}
            </S.UserDate>
          </S.UserInfoWrapper>
          <S.ContentWrapper>
            <S.Content>{props.el?.contents}</S.Content>
          </S.ContentWrapper>
          <S.Button onClick={onClickQuestionUpdate}>Edit</S.Button>
          <S.Button onClick={onClickQuestionDelete(props.el?._id)}>
            Delete
          </S.Button>
          <S.ButtonInput type="button" value="Reply" />
        </div>
      )}
      {isEdit && (
        <MarketQuestionWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </S.Wrapper>
  );
}
