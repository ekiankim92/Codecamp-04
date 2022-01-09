import { useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IBoard,
  IMutation,
  IMutationToggleUseditemPickArgs,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../commons/types/generated/types";
import MarketListUI from "./MarketList.presenter";
import {
  FETCH_USED_ITEMS,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketList.queries";

export default function MarketList() {
  // keyword search
  const [keyword, setKeyword] = useState<string>("");

  // fetching used items by 10
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      search: keyword,
    },
  });
  console.log(data);

  // purchase with the points
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  // wish list 찜하기
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

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

  const onClickItemsViewed = async (el) => {
    console.log(el);
    alert("testing");
    const itemsViwed = await JSON.parse(localStorage.getItem("items") || "[]");
    // let isExists = false;
    // itemsViwed.forEach((itemsEl) => {
    //   if (el._id === itemsEl._id) isExists = true;
    // });
    const { __typename, ...newEl } = el;
    itemsViwed.push(newEl);
    localStorage.setItem("items", JSON.stringify(itemsViwed));
  };

  // once click an item, it will show the details
  const onClickDetail = (id) => (event) => {
    router.push(`/market/${id}`);
  };

  // toggle picked item
  // const onClickTogglePick = (id) => async () => {
  //   const result = await toggleUseditemPick({
  //     variables: {
  //       useditemId: id,
  //     },
  //     refetchQueries: [{ query: FETCH_USED_ITEMS }],
  //   });
  //   console.log(result);
  // };

  const onClickTogglePick = (id) => async () => {
    const result = await toggleUseditemPick({
      variables: {
        useditemId: id,
      },
      optimisticResponse: {
        toggleUseditemPick: (data?.fetchUseditems.pickedCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_USED_ITEMS,
          variables: {
            useditemId: id,
          },
          data: {
            fetchUseditems: {
              _id: id,
              __typename: "Useditem",
              pickedCount: data?.toggleUseditemPick,
            },
          },
        });
      },
    });
    console.log(result);
  };

  const onChangeSearch = (value) => {
    setKeyword(value);
  };

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickBasket={onClickBasket}
      onClickItemsViewed={onClickItemsViewed}
      onClickPurchase={onClickPurchase}
      onClickDetail={onClickDetail}
      onClickTogglePick={onClickTogglePick}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
