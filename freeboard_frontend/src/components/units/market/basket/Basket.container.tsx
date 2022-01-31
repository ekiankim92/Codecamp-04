import { useEffect, useState } from "react";
import { IBoard } from "../../../../commons/types/generated/types";
import BasketUI from "./Basket.presenter";

const Basket = () => {
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  const onClickDelete = (id: string) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBasket = baskets.filter((el: any) => el._id !== id);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setBasketItems(newBasket);
    alert("Your Item Has Been Deleted");
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return <BasketUI basketItems={basketItems} onClickDelete={onClickDelete} />;
};
export default Basket;
