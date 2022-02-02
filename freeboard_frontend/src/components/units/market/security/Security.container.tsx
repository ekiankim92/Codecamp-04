import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import SecurityUI from "./Security.presenter";
import {
  FETCH_USER_LOGGED_IN,
  RESET_USER_PASSWORD,
  UPDATE_USER,
} from "./Security.queries";
import { Modal } from "antd";
import router from "next/router";
import {
  IMutation,
  IMutationResetUserPasswordArgs,
  IMutationUpdateUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

const Security = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [isEdit, setisEdit] = useState<boolean>(false);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeProfile = () => {
    setIsUpdate((prev) => !prev);
  };

  const onUpdateProfile = () => {
    setIsUpdate(false);
    router.reload();
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
        content: "Successfully Changed Password",
      });
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDone = () => {
    if (!password || password.length <= 2) {
      alert("Please Enter Your Current Password");
      return;
    }
    setisEdit(true);
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name,
          },
        },
      });
      console.log(result);
      console.log(result.data?.updateUser.name);
      router.reload();
    } catch (error) {
      if (error instanceof Error) console.log("updateUser:", error.message);
    }
  };

  return (
    <SecurityUI
      data={data}
      isUpdate={isUpdate}
      isEdit={isEdit}
      onChangePassword={onChangePassword}
      onClickChangePassword={onClickChangePassword}
      onClickUpdate={onClickUpdate}
      onClickDone={onClickDone}
      onChangeName={onChangeName}
      onChangeProfile={onChangeProfile}
      onUpdateProfile={onUpdateProfile}
    />
  );
};
export default Security;
