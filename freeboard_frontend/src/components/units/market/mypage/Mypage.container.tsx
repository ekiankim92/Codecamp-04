import { useMutation, useQuery } from "@apollo/client";
import MyPageUI from "./Mypage.presenter";
import {
  RESET_USER_PASSWORD,
  FETCH_USED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_COUNT,
  FETCH_USER_LOGGED_IN,
} from "./Mypage.queries";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import router from "next/router";

export default function MyPage() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  const [password, setPassword] = useState<string>("");

  const [startPage, setStartPage] = useState<number>(1);

  const { data, refetch } = useQuery<
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

  const { data: userLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickChangePassword = async () => {
    if (!password || password.length <= 2) {
      alert("Please Enter Your Changed Password");
      return;
    }
    try {
      const result = await resetUserPassword({
        variables: {
          password,
        },
      });
      console.log(result);
      Modal.success({
        content: "Successfully Changed password",
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickMoveToMyOrder = () => {
    router.push("/market/myorder");
  };

  const onClickMoveToReload = () => {
    router.push("/market/reloadpage");
  };

  return (
    <>
      <MyPageUI
        data={data}
        onChangePassword={onChangePassword}
        onClickChangePassword={onClickChangePassword}
        refetch={refetch}
        setStartPage={setStartPage}
        onClickMoveToMyOrder={onClickMoveToMyOrder}
        onClickMoveToReload={onClickMoveToReload}
        startPage={startPage}
        count={dataFetchCountIPicked?.fetchUseditemsCountIPicked}
        userLoggedIn={userLoggedIn}
      />
    </>
  );
}
