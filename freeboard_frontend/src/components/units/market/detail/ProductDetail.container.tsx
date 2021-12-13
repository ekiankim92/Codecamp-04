import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_USED_ITEM_QUESTION,
} from "./ProductDetail.queries";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FormValues } from "./ProductDetail.types";

export default function ProductDetail() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const client = useApolloClient();

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

  const onClickMoveToEdit = () => {
    router.push(`/market/${router.query.marketId}/edit`);
  };

  const onClickMoveToMarketList = () => {
    router.push("/market");
  };

  const onClickWriteQuestion = async (data: FormValues) => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query.marketId,
        },
      });
      console.log(result.data?.createUseditemQuestion.contents);
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickWriteQuestion={onClickWriteQuestion}
    />
  );
}
