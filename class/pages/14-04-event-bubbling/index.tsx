import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationBasicPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    { variables: { page: 1 } }
  );

  function onClickRow(event) {
    // console.log(event.target.id);
    console.log(event.currentTarget.id);
  }

  return (
    <>
      <h1>이벤트 버블링</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id} id={el._id} onClick={onClickRow}>
            <span>{el.title}</span>
            <span> {el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}

//이벤트 버블링은 자식에서 부모로 전파함으로 target.event.id 를 하면 딱 그 해당 div 을 지정하지만,
// event.currentTarget.id 로 하면 큰 부모 div 를 어디든 눌러도 똑같이 onClick 이 실행됨
