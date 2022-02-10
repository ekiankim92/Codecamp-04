import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { IPropsBoardCommentWrite } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IPropsBoardCommentWrite) {
  const router = useRouter();

  const [writer, setWriter] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const CommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const CommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const CommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const CreateCommentButton = async () => {
    if (!writer) {
      Modal.error({ content: "작성자가 등록되지 않았습니다" });
      return;
    }

    if (!contents) {
      Modal.error({ content: "내용이 수정되지 않았습니다" });
      return;
    }

    if (!password) {
      Modal.error({ content: "비밀번호가 입력되지 않았습니다" });
      return;
    }

    if (writer && contents && password) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
            boardId: String(router.query.content),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.content },
            },
          ],
        });
        Modal.success({ content: "댓글이 등록되었습니다!" });
        console.log(result);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  const CountingStars = (value: number) => {
    setRating(value);
  };

  const onClickUpdate = async () => {
    if (!password && !contents) {
      Modal.error({ content: "비밀번호를 입력해주세요" });
      return;
    }
    try {
      console.log(props.el?._id);
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.content },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      error instanceof Error && console.log(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      CommentWriter={CommentWriter}
      CommentPassword={CommentPassword}
      CommentContents={CommentContents}
      contents={contents}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      CreateCommentButton={CreateCommentButton}
      CountingStars={CountingStars}
      rating={rating}
      el={props.el}
    />
  );
}
