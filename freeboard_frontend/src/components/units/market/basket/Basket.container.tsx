import { useEffect, useState } from "react";
import { IBoard } from "../../../../commons/types/generated/types";
import BasketUI from "./Basket.presenter";

export default function Basket() {
  // storing local storage basket into the state form
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  const onClickDelete = (id) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBasket = baskets.filter((el) => el._id !== id);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasketItems(newBasket);
    alert("Your Item Has Been Deleted");
  };

  // const onClickDelete = (event) => {
  //   const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
  //   const newBasket = baskets.filter((el) => el._id !== event.target.id);
  //   localStorage.setItem("basket", JSON.stringify(newBasket));
  //   alert("Your Item Has Been Deleted");
  // };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return <BasketUI basketItems={basketItems} onClickDelete={onClickDelete} />;
}
