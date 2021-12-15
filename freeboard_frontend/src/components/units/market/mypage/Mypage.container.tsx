import { useMutation, useQuery } from "@apollo/client";
import MyPageUI from "./Mypage.presenter";
import {
  RESET_USER_PASSWORD,
  FETCH_USED_ITEMS_IPICKED,
  FETCH_USED_ITEMS_COUNT,
} from "./Mypage.queries";
import { useState } from "react";
import { Modal } from "antd";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

export default function MyPage() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  const [password, setPassword] = useState("");

  const [startPage, setStartPage] = useState(1);

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

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
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
      console.log(error.message);
    }
  };

  return (
    <>
      <MyPageUI
        data={data}
        onChangePassword={onChangePassword}
        onClickChangePassword={onClickChangePassword}
        refetch={refetch}
        startPage={startPage}
        setStartPage={setStartPage}
        count={dataFetchCountIPicked?.fetchUseditemsCountIPicked}
      />
      ;
    </>
  );
}
