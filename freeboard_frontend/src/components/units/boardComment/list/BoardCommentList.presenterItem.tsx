import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { Modal } from "antd";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { Iprops2 } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(props: Iprops2) {
  const router = useRouter();
  //True for edit false for submit
  const [isEdit, setIsEdit] = useState(false);

  //Settings for Modal
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setMyPassword] = useState("");

  //Comment Delete
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  //댓글 삭제
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
      console.log(props.el.id);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {!isEdit && (
        <S.Comment_Section>
          <div>
            <S.Front_Comment>
              <S.Header_Image src="/images/user.png" />
              <S.Comment_User>{props.el?.writer}</S.Comment_User>
              <S.Stars value={props.el?.rating}></S.Stars>
            </S.Front_Comment>
            <S.Comment_Content>{props.el?.contents}</S.Comment_Content>
            <S.Created_At_Date>
              {getDate(props.el?.createdAt)}
            </S.Created_At_Date>
            {/* <S.Comment_Icons src="/images/edit_pen.png" />
            <S.Comment_Icons src="/images/x.png" /> */}
            <S.Comment_Button>
              <S.Comment_Icons onClick={onClickUpdate}>
                <img src="/images/edit_pen.png" />
              </S.Comment_Icons>
              <S.Comment_Icons onClick={onClickCommentDelete}>
                <img src="/images/x.png" />
              </S.Comment_Icons>
            </S.Comment_Button>
          </div>
        </S.Comment_Section>
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
