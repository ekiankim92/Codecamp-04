import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoardCommentWrite(props) {
  //댓글등록
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function CommentWriter(event) {
    setWriter(event.target.value);
  }

  function CommentPassword(event) {
    setPassword(event.target.value);
  }

  function CommentContents(event) {
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
            boardId: router.query.content,
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
        console.log(error.message);
      }
    }
    alert("댓글이 등록되었습니다!");
  }

  //댓글 별 등록
  const [rating, setRating] = useState(0);
  function CountingStars(value) {
    setRating(value);
  }

  //댓글 수정
  async function onClickUpdate() {
    try {
      if (!props.el?._id) return;
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
