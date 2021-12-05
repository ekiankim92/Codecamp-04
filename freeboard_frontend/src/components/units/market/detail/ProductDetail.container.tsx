import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { useApolloClient, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function ProductDetail(props) {
  const router = useRouter();

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

  return <ProductDetailUI data={data} />;
}
