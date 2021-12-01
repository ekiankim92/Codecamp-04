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

  // const [inputsError, setInputsError] = useState({
  //   nameError: "",
  //   passwordError: "",
  //   emailError: "",
  // });

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    if (inputs.name) setNameError("");
    if (inputs.password) setPasswordError("");
    if (inputs.email) setEmailError("");
  }

  // function onChangeName(event) {
  //   setInputs(event.target.value);
  //   if (!event.target.value) {
  //     setNameError("");
  //   }
  // }

  // function onChangeError(event: ChangeEvent<HTMLInputElement>) {
  //   setInputsError({
  //     ...inputsError,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log(inputsError);
  // }

  // const onClickSubmit = async () => {
  //   if (!inputs.name && !inputs.email && !inputs.password) {
  //     setInputsError({
  //       ...inputsError,
  //       nameError: "이름을 입력해주세요",
  //       passwordError: "비밀번호를 입력해주세요",
  //       emailError: "이메일 입력해주세요",
  //     });
  //     console.log(inputsError.nameError);
  //   }
  //   try {
  //     const result = await createUser({
  //       variables: {
  //         createUserInput: {
  //           ...inputs,
  //         },
  //       },
  //     });
  //     console.log(result);
  //     alert("Registration Successful");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const onClickSubmit = async () => {
    if (!inputs.name) {
      setNameError("Please Enter Your Name");
    }

    // if (!inputs.email) {
    //   setEmailError("Please Enter Your Email");
    // }

    if (!/\w+@\w+\.\w+/.test(inputs.email)) {
      setEmailError("Please Enter Your Email Correctly");
    }

    if (!inputs.password) {
      setPasswordError("Please Enter Your Password");
    }

    if (inputs.name && inputs.email && inputs.password) {
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
    }
  };

  return (
    <AccountPageUI
      onClickSubmit={onClickSubmit}
      onChangeInput={onChangeInput}
      nameError={nameError}
      passwordError={passwordError}
      emailError={emailError}
      // onChangeName={onChangeName}
      // onChangeError={onChangeError}
      // nameError={inputsError.nameError}
      // passwordError={inputsError.passwordError}
      // emailError={inputsError.emailError}
    />
  );
}
