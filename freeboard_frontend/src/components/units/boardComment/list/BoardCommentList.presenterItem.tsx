import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
// import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardCommentListUIItem(props) {
  const router = useRouter();

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

  return (
    <S.Comment_Section>
      <div>
        <S.Front_Comment>
          <S.Header_Image src="/images/user.png" />
          <S.Comment_User>{props.el.writer}</S.Comment_User>
          <S.Stars value={props.el.rating}></S.Stars>
        </S.Front_Comment>
        <S.Comment_Content>{props.el.contents}</S.Comment_Content>
        <S.Created_At_Date>{getDate(props.el.createdAt)}</S.Created_At_Date>
        {/* <S.Comment_Icons src="/images/edit_pen.png" />
            <S.Comment_Icons src="/images/x.png" /> */}
        <S.Comment_Button>
          <S.Comment_Icons id={props.el._id} onClick={props.onClickUpdate}>
            <img src="/images/edit_pen.png" />
          </S.Comment_Icons>
          <S.Comment_Icons id={props.el._id} onClick={onClickCommentDelete}>
            <img src="/images/x.png" />
          </S.Comment_Icons>
        </S.Comment_Button>
      </div>
    </S.Comment_Section>
  );
}
