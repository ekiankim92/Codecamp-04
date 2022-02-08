import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./ProductDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function ProductDetail() {
  const router = useRouter();

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

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
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickMoveToEdit = () => {
    router.push(`/market/${router.query.marketId}/edit`);
  };

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
