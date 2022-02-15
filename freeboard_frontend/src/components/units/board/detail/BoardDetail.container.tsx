import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";
import { Modal } from "antd";

// splice, slice 는 데이터를 일일히 가져오기 때문에 runtime error 가 생길수있음
export default function ContainerDetailPage() {
  const router = useRouter();

  const [count, setCount] = useState<number>(0);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.content,
    },
  });

  const ButtonToBoardList = () => {
    router.push(`board_list`);
  };

  const onClickEdit = () => {
    router.push(`/board/${router.query.content}/edit`);
  };

  const BoardListDeleteButton = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.content),
        },
      });
      Modal.success({ content: "게시물이 삭제되었습니다." });
      router.push(`board_list`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const LkeCount = async () => {
    try {
      const result = await likeBoard({
        variables: {
          boardId: String(router.query.content),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.content },
          },
        ],
      });
      Modal.success({ content: "눌러주셔서 감사합니다" });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const DislikeCount = async () => {
    try {
      const result = await dislikeBoard({
        variables: {
          boardId: String(router.query.content),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.content },
          },
        ],
      });
      Modal.success({ content: "눌러주셔서 감사합니다" });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickCount = () => {
    setCount((prev) => prev + 1);
    Modal.success({ content: "눌러주셔서 감사합니다" });
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        ButtonToBoardList={ButtonToBoardList}
        BoardListDeleteButton={BoardListDeleteButton}
        LkeCount={LkeCount}
        DislikeCount={DislikeCount}
        onClickCount={onClickCount}
        onClickEdit={onClickEdit}
        count={count}
      />
    </>
  );
}
