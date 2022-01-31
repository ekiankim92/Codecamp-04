import { useQuery } from "@apollo/client";
import MyOrderUI from "./Myorder.presenter";
import { useState } from "react";
import {
  FETCH_ITEMS_I_SOLD,
  FETCH_ITEMS_SOLD_COUNT,
  FETCH_ITEMS_I_BOUGHT,
  FETCH_ITEMS_BOUGHT_COUNT,
  FETCH_USED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_COUNT,
} from "./Myorder.queries";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

const MyOrder = () => {
  const [startPage, setStartPage] = useState<number>(1);
  const [itemsSold, setItemsSold] = useState<boolean>(false);
  const [itemsBought, setItemsBought] = useState<boolean>(false);
  const [itemsIPicked, setItemsIPicked] = useState<boolean>(false);

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

  const { data: dataItemsPicked, refetch: refetchItemsPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_IPICKED, {
    variables: {
      search: "",
      page: startPage,
    },
  });

  const { data: dataFetchCountIPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USED_ITEMS_COUNT);

  const onClickItemsBought = () => {
    setItemsBought((prev) => !prev);
    setItemsSold(false);
    setItemsIPicked(false);
  };

  const onClickItemsSold = () => {
    setItemsSold((prev) => !prev);
    setItemsBought(false);
    setItemsIPicked(false);
  };

  const onClickItemsIPicked = () => {
    setItemsIPicked((prev) => !prev);
    setItemsSold(false);
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
      onClickItemsIPicked={onClickItemsIPicked}
      itemsSold={itemsSold}
      itemsBought={itemsBought}
      itemsIPicked={itemsIPicked}
      dataItemsPicked={dataItemsPicked}
      count3={dataFetchCountIPicked?.fetchUseditemsCountIPicked}
      refetchItemsPicked={refetchItemsPicked}
    />
  );
};
export default MyOrder;
