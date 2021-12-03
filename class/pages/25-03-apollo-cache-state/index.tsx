import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  // 삭제하기
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // 등록하기
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    // 삭제하기
    deleteBoard({
      variables: {
        boardId,
      },
      update(cache, { data }) {
        // 위에 데이터는 요청했던 데이터를 다시 받은 데이터 위에는 request 했고 여기서는 response
        const deleteId = data.deleteBoard;
        // 삭제된 게시글 ID (플레이그라운드 확인)
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 1. 기존의 fetchBoards 10개에서, 방금 삭제한 ID를 제외한 9개를 만들기
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards 데이터를 돌려주기

              // return 변화될 데이터 fetchBoards
              // readField 는 특정적인걸 삭제

              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deleteId
              ); // 10개
              return [...newFetchBoards];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다",
          contents: "내용입니다",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // 추가된 createBoard 결과물과, 이전의 10개를 합쳐서 11개로 돌려주기
              return [data.createBoard, ...prev];
              // return 변경될 데이터 = fetchBoards
            },
          },
        });
      },
    });
    console.log(result);
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
