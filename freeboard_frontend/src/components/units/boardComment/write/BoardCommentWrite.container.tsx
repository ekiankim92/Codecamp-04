import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWrite.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

export default function BoardCommentWrite() {
  //댓글등록
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

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
    // alert("update");
    // alert(router.query.content);
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
              rating: 0,
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

  // //댓글 조회
  // const { data } = useQuery(FETCH_BOARD_COMMENTS, {
  //   variables: {
  //     // page: Number(router.query.content),
  //     boardId: router.query.content,
  //   },
  // });

  //댓글 수정
  const [isEdit, setIsEdit] = useState(false);
  async function onClickUpdate(event) {
    try {
      await updateBoardCommentInput({
        variables: {
          updateBoardCommentInput: { contents },
          password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: UPDATE_BOARD_COMMENT,
            variables: { boardId: router.query.content },
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
    setIsEdit(false);
  }

  return (
    <BoardCommentWriteUI
      CommentWriter={CommentWriter}
      CommentPassword={CommentPassword}
      CommentContents={CommentContents}
      contents={contents}
      onClickUpdate={onClickUpdate}
      isEdit={isEdit}
      CreateCommentButton={CreateCommentButton}
    />
  );
}
