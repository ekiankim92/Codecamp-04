import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Contents, Password } from "../write/BoardWrite.styles";
import { useState } from "react";
import { OmitProps } from "antd/lib/transfer/ListBody";

const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      createdAt
    }
  }
`;

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) {
      _id
    }
  }
`;

const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

//splice, slice 는 데이터를 일일히 가져오기 때문에 runtime error 가 생길수있음
export default function ContainerDetailPage() {
  // const createdDate = data?.fetchBoard.createdAt.split("T")[0]
  // console.log(createdDate)

  //게시글 조회
  const router = useRouter();
  const { data: queryBoard } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.content,
    },
  });

  // console.log(queryBoard);

  // console.log(data);
  // function changeBackground(event) {
  //     event.target.style.background = "red";
  // }

  // function changeMouseLeave (event){
  //     event.target.style.background= "";
  // }
  function ButtonToBoardList() {
    router.push(`board_list`);
  }

  //게시글 삭제
  async function onClickBoardDelete() {
    try {
      await deleteBoard({
        varaibles: {
          boardId: router.query.content,
        },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/mento");
    } catch (error) {
      console.log(error.message);
    }
  }

  function BoardListDeleteButton() {
    alert("게시글이 삭제되었습니다");
    router.push(`board_list`);
  }

  // function backToList(){
  //     router.push(`/board/list`)
  // }
  //     return(
  //         <BoardNewDetailUI data={data}
  //         backToList = {backToList}/>
  //     )

  //댓글등록
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
  const { data: queryComment } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      // page: Number(router.query.content),
      boardId: router.query.content,
    },
  });

  //댓글 삭제
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  async function onClickCommentDelete(event) {
    const password = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.target.id,
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
      console.log(error.message);
    }
  }

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
    setIsEdit(true);
  }

  return (
    <>
      <BoardDetailUI
        queryBoard={queryBoard}
        queryComment={queryComment}
        ButtonToBoardList={ButtonToBoardList}
        BoardListDeleteButton={BoardListDeleteButton}
        CommentWriter={CommentWriter}
        CommentPassword={CommentPassword}
        CommentContents={CommentContents}
        CreateCommentButton={CreateCommentButton}
        onClickCommentDelete={onClickCommentDelete}
        contents={contents}
        onClickUpdate={onClickUpdate}
        isEdit={isEdit}
        // el={el}
      />
    </>
  );
}
