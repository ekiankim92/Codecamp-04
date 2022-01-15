import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import ReloadUI from "./reload.presenter";
import { RELOAD_POINT, FETCH_USER_LOGGED_IN } from "./reload.queries";
import { useState } from "react";

export default function Reload() {
  // exchanging cash with the points
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(RELOAD_POINT);

  // fetching my data that was exchanged with cash
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // state for storing userPoint
  const [amount, setAmount] = useState(0);

  // when onChaning the amount of points, that amout will be charged
  function onChangeAmount(event: any) {
    setAmount(event.target.value);
  }

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "마우스",
        amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제후 리다이렉트 주소
      },
      (rsp) => {
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
}
