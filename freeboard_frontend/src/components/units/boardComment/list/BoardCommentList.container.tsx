import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  //댓글 조회
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      // page: Number(router.query.content),
      boardId: router.query.content,
    },
  });

  const onLoadMore = () => {
    if (!data) return 
    fetchMore({
      variables: {page: Math.ceil(data?.)}
    })
  }

  return <BoardCommentListUI data={data} />;
}
