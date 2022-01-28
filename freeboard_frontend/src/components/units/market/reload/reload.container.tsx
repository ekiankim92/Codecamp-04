import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ReloadUI from "./Reload.presenter";
import {
  RELOAD_POINT,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEM,
} from "./Reload.queries";
import { ChangeEvent, useState } from "react";
import { withAuth } from "../../../commons/hocs/withAuth";

declare const window: Window &
  typeof globalThis & {
    IMP: any;
  };

const Reload = () => {
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(RELOAD_POINT);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const { data: buyerData } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM);

  const [amount, setAmount] = useState<number>(0);

  // when onChange the amount of points, that amout will be charged
  function onChangeAmount(event: ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
  }

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "Point Charge",
        amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: buyerData?.fetchUseditem.useditemAddress?.address,
        buyer_postcode: buyerData?.fetchUseditem.useditemAddress?.zipcode,
        m_redirect_url: "", // 모바일 결제후 리다이렉트 주소
      },
      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);

          const result = createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);
        } else {
        }
      }
    );
  };

  return (
    <ReloadUI
      onClickPayment={onClickPayment}
      data={data}
      onChangeAmount={onChangeAmount}
    />
  );
};
export default withAuth(Reload);
