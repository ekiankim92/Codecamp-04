import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import styled from "@emotion/styled";

interface IProps {
  isMatched: boolean;
}

const MyWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchKeywordPage() {
  // const [mySearch, setMySearch] = useState("");
  // 이제 클릭하는게 없기 때문에 mySearch state 는 필요없어짐
  const [myKeyword, setMyKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }
  // onChange 로 매번 refetch 하는게 아니라 debounce 로 0.5초 이후 실행이됨

  // function onClickSearch() {
  //   // mySearch 키워드로 fetchBoard 요청 하기
  //   // 쉽게 말하면 그냥 refetch 하면 되는거임
  //   refetch({ search: mySearch, page: 1 });
  //   setMyKeyword(mySearch);
  // }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ search: myKeyword, page: Number(event.target.id) });
  }
  // 몇페이지인지 알아야함

  return (
    <>
      <h1>검색 페이지</h1>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>
            {el.title
              .replaceAll(myKeyword, `###${myKeyword}###`)
              .split("###")
              .map((el) => (
                <MyWord key={uuidv4()} isMatched={myKeyword === el}>
                  {el}
                </MyWord>
              ))}
          </span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
  // key 를 index 로 주면 안됌
  // uuidv4 는 함수이기 떄문에 uuidv()
}
