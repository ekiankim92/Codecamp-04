import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { IPropsBoardCommentListUIItem } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IPropsBoardCommentListUIItem
) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  async function onClickCommentDelete() {
    const password = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.content,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log("commentDelete:", error.message);
    }
  }

  return (
    <>
      {!isEdit && (
        <S.CommentSection>
          <div>
            <S.FrontComment>
              <S.HeaderImage src="/images/user.png" />
              <S.CommentUser>{props.el?.writer}</S.CommentUser>
              <S.Stars value={props.el?.rating}></S.Stars>
            </S.FrontComment>
            <S.CommentContent>{props.el?.contents}</S.CommentContent>
            <S.CreatedAtDate>{getDate(props.el?.createdAt)}</S.CreatedAtDate>
            <S.CommentButton>
              <S.CommentIcons onClick={onClickUpdate}>
                <img src="/images/edit_pen.png" />
              </S.CommentIcons>
              <S.CommentIcons onClick={onClickCommentDelete}>
                <img src="/images/x.png" />
              </S.CommentIcons>
            </S.CommentButton>
          </div>
        </S.CommentSection>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
