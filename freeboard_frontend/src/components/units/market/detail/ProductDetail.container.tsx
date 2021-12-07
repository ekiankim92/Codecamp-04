import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./ProductDetail.queries";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function ProductDetail() {
  const router = useRouter();

  // deleting product posting
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const client = useApolloClient();

  // fetching one used item
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });
  console.log(data?.fetchUseditem.name);
  console.log(data?.fetchUseditem.price);
  console.log(data?.fetchUseditem.contents);
  console.log(data?.fetchUseditem.tags);
  console.log(data?.fetchUseditem.remarks);

  // deleting product posting
  const onClickDeleteProduct = async () => {
    try {
      const result = await deleteUseditem({
        variables: {
          useditemId: String(router.query.marketId),
        },
      });
      alert("Product has been deleted");
      router.push("/productsubmit");
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  //routing to edit page
  const onClickMoveToEdit = () => {
    router.push(`/market/${router.query.marketId}/edit`);
  };

  //routing to market list page
  const onClickMoveToMarketList = () => {
    router.push("/market");
  };

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickDeleteProduct={onClickDeleteProduct}
    />
  );
}
