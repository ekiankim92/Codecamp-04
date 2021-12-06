import { useState, useEffect } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInPage() {
  // Local Storage 에 있는걸 state 로 담고 그걸 뿌려주는거임

  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  // 이 페이지를 들어올떄 여러번 실행할 필요가없음

  return (
    <>
      <h1>비회원으로 담은 나만의 장바구니</h1>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}
