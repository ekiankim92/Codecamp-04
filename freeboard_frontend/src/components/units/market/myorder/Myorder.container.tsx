import { useQuery } from "@apollo/client";
import MyOrderUI from "./Myorder.presenter";
import { useState } from "react";
import {
  FETCH_ITEMS_I_SOLD,
  FETCH_ITEMS_SOLD_COUNT,
  FETCH_ITEMS_I_BOUGHT,
  FETCH_ITEMS_BOUGHT_COUNT,
} from "./Myorder.queries";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { withAuth } from "../../../commons/hocs/withAuth";

const MyOrder = () => {
  const [startPage, setStartPage] = useState<number>(1);
  const [itemsSold, setItemsSold] = useState(false);
  const [itemsBought, setItemsBought] = useState(false);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_ITEMS_I_SOLD, {
    variables: { page: startPage },
  });

  const { data: dataSoldCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountISold">
  >(FETCH_ITEMS_SOLD_COUNT);

  const { data: dataItemsBought, refetch: refetchBoughtItems } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_ITEMS_I_BOUGHT, {
    variables: { page: startPage },
  });

  const { data: dataBoughtCount } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIBought">
  >(FETCH_ITEMS_BOUGHT_COUNT);

  const onClickItemsBought = () => {
    setItemsBought((prev) => !prev);
    setItemsSold(false);
  };

  const onClickItemsSold = () => {
    setItemsSold((prev) => !prev);
    setItemsBought(false);
  };

  return (
    <MyOrderUI
      data={data}
      refetch={refetch}
      refetchBoughtItems={refetchBoughtItems}
      startPage={startPage}
      setStartPage={setStartPage}
      count={dataSoldCount?.fetchUseditemsCountISold}
      dataItemsBought={dataItemsBought}
      count2={dataBoughtCount?.fetchUseditemsCountIBought}
      onClickItemsBought={onClickItemsBought}
      onClickItemsSold={onClickItemsSold}
      itemsSold={itemsSold}
      itemsBought={itemsBought}
    />
  );
};
export default withAuth(MyOrder);
