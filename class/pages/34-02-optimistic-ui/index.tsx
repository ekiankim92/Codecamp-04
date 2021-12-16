import { useMutation, gql, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

// prettier-ignore
const OptimisticUIPage = () => {
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
      variables:{
        boardId: "61baae87717be5002baa7552"
      }
  })

  const onClickOptimisticUi = async () => {
    // 좋아요 증가 시키는 mutation
    const result = await likeBoard({
      variables: {
        boardId: "61baae87717be5002baa7552"
      },

      // 이거는 리패치 될때까지 기다려야됨 
    //   refetchQueries: [{
    //       query: FETCH_BOARD,
    //       variables:{
    //           boardId: "61baae87717be5002baa7552"
    //       }
    //   }]
    optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1 
    },
    update(cache, { data } ) {
        cache.writeQuery({
            query: FETCH_BOARD,
            variables: {
                boardId:  "61baae87717be5002baa7552"
            },
            data: {
                fetchBoard: {
                    // _id 와 __typename 은 apollo 에서 지정해주는거라 반드시 써야함 
                    _id: "61baae87717be5002baa7552",
                    __typename: "Board",
                    likeCount: data?.likeBoard
                }
            }
        })
    }
    
    });
    console.log(result);
  };

  return (
    <>
      <div>좋아요 갯수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>좋아요 올리기</button>
    </>
  );
};
export default OptimisticUIPage;

// likeBoard API 요청 하기
// 요청이 가서 data 로 들어 오기전에
// 낙관적인 응답으로 기존에 더한 값을 먼저 받음
// 그 data 로 인해 cache 로 업데이트를 하는거임
// DB 에서 저장된 값이 다시 돌아올때 두번쨰 data 가 진짜
// cache state 을 2번 수정시킴 (첫번쨰는 가짜껄 수정시키고 2번쨰는 진짜껄 수정시키고)
