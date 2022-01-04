import AccountPageUI from "./Account.presenter";
import { CREATE_USER } from "./Account.queries";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import router from "next/router";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

export default function Account() {
  // 회원가입
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [nameError, setNameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  // password confirm
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    if (inputs.name) setNameError("");
    if (inputs.password) setPasswordError("");
    if (inputs.email) setEmailError("");
  }

  function PasswordValidation(event: ChangeEvent<HTMLInputElement>) {
    setPasswordConfirm(event.target.value);
  }

  const onClickSubmit = async () => {
    if (!inputs.name || inputs.name.length <= 2) {
      setNameError("Please Enter Your Name");
    }

    if (!/\w+@\w+\.\w+/.test(inputs.email)) {
      setEmailError("Please Enter Your Email Correctly");
    }

    if (!inputs.password || inputs.password.length <= 2) {
      setPasswordError("Please Enter Your Password");
    }

    if (inputs.password !== passwordConfirm) {
      alert("Please Confirm Your Password");
    }

    // if (inputs.name && inputs.email && inputs.password) {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...inputs,
          },
        },
      });
      console.log(result);
      alert("Registration Successful");
      router.push("../../../../../login");
    } catch (error: any) {
      console.log(error.message);
    }
    // }
  };

  return (
    <AccountPageUI
      onClickSubmit={onClickSubmit}
      onChangeInput={onChangeInput}
      PasswordValidation={PasswordValidation}
      nameError={nameError}
      passwordError={passwordError}
      emailError={emailError}
      passwordConfirm={passwordConfirm}
    />
  );
}
