import { useQuery, gql } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // 1. 게시물 10개를 불러오고, 그 목록중에 하나를 로컬 스토리지에다가 저장

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    // 이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다");
      return;
    }

    // const newEl = {...el}
    // delete newEl._typename
    // baskets.push(newEl);

    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  const onClickLogin = () => {
    alert("로그인에 성공하였습니다");
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    // 배열에 담겨있는지 없는지 알아볼려면 length 로 알아보면됨
    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다! 장바구니 페이지로 이동할까요?"
      );
      if (result) router.push("/26-03-basket-logged-in");
    }
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
}
