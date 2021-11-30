import AccountPageUI from "./Account.presenter";
import { CREATE_USER } from "./Account.queries";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";

export default function AccountPage() {
  // 회원가입
  const [createUser] = useMutation(CREATE_USER);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [inputsError, setInputsError] = useState({
    nameError: "",
    passwordError: "",
    emailError: "",
  });

  // const [nameError, setNameError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [emailError, setEmailError] = useState("");

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    console.log(inputs);
  }

  function onChangeError(event: ChangeEvent<HTMLInputElement>) {
    setInputsError({
      ...inputsError,
      [event.target.name]: event.target.value,
    });
    console.log(inputsError);
  }

  const onClickSubmit = async () => {
    if (!inputs.name) {
      setInputsError("이름을 등록해주세요");
    }
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
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AccountPageUI
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
      onChangeError={onChangeError}
    />
  );
}
