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
  //댓글등록
  const router = useRouter();
  const [writer, setWriter] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
        console.log(result);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
    alert("댓글이 등록되었습니다!");
  }

  //댓글 별 등록
  const [rating, setRating] = useState<number>(0);
  function CountingStars(value) {
    setRating(value);
  }

  //댓글 수정
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
      // isEdit={true}
      CreateCommentButton={CreateCommentButton}
      CountingStars={CountingStars}
      rating={rating}
      el={props.el}
    />
  );
}
