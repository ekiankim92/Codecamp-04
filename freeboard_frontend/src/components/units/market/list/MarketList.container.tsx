import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IBoard,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

export default function MarketList() {
  // fetching used items by 10
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);

  // infinite scroll for market list
  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  // basket on local storage
  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    // taking out from the local storage
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    // checks if you have already placed in the basket
    let isExists = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("You Have Already Placed In The Basket");
      return;
    } else if (!isExists) {
      alert("You Have Added An Item To The Cart");
    }

    // rest parameter to pick what we can see. newEl is the new parameter's name
    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    // placing into the local storage
    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  return (
    <MarketListUI
      data={data}
      loadMore={onLoadMore}
      onClickBasket={onClickBasket}
    />
  );
}
