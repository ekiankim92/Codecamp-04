import { useMutation, useQuery } from "@apollo/client";
import { result } from "lodash";
import router from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IBoard,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./MarketList.presenter";
import {
  FETCH_USED_ITEMS,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./MarketList.queries";

export default function MarketList() {
  // fetching used items by 10
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);

  // purchase with the points
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

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

  // Once clicked, the data will be send to purchase
  const onClickPurchase = (id) => async () => {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: id,
      },
      refetchQueries: [{ query: FETCH_USED_ITEMS }],
    });
    console.log(result);
    alert("Purchase Complete");
  };

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

  // once click an item, it will show the details
  const onClickDetail = (id) => (event) => {
    router.push(`/market/${id}`);
  };

  return (
    <MarketListUI
      data={data}
      loadMore={onLoadMore}
      onClickBasket={onClickBasket}
      onClickPurchase={onClickPurchase}
      onClickDetail={onClickDetail}
    />
  );
}
