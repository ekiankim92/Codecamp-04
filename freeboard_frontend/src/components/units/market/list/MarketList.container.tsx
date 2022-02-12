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

const MarketList = () => {
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

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const onLoadMore = () => {
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
  };

  const onClickProductSubmit = () => {
    router.push("/productsubmit");
  };

  const onClickPurchase = (id: string) => async () => {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: id,
      },
      refetchQueries: [{ query: FETCH_USED_ITEMS }],
    });
    console.log(result);
    alert("Purchase Complete");
  };

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

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

  const onClickDetail = (id: string) => () => {
    router.push(`/market/${id}`);
  };

  const onClickTogglePick = (id: string) => async () => {
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

  const onChangeSearch = (value: any) => {
    setKeyword(value);
  };

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickBasket={onClickBasket}
      onClickPurchase={onClickPurchase}
      onClickDetail={onClickDetail}
      onClickTogglePick={onClickTogglePick}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      onClickProductSubmit={onClickProductSubmit}
    />
  );
};
export default MarketList;
