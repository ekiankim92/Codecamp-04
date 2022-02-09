import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
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

export default function BoardCommentWrite(props) {
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

  function CommentWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function CommentPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function CommentContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  async function CreateCommentButton() {
    if (!writer) {
      alert("작성자가 등록되지 않았습니다");
      return;
    }

    if (!contents) {
      alert("내용이 수정되지 않았습니다");
      return;
    }

    if (!password) {
      alert("비밀번호가 입력되지 않았습니다");
      return;
    }

    if (writer !== "" && contents !== "" && password !== "") {
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
        alert("댓글이 등록되었습니다!");
        console.log(result);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  }

  function CountingStars(value) {
    setRating(value);
  }

  async function onClickUpdate() {
    try {
      alert(props.el?._id);
      alert(contents);
      alert(rating);
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password,
          boardCommentId: props.el?._id,
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
  }

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
