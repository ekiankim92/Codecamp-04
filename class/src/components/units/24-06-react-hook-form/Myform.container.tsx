// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import MyFormUI from "./Myform.presenter";
// import { schema } from "./Myform.validations";
import { FormValues } from "./Myform.types";

export default function MyForm() {
  //   export const schema = yup.object().shape({
  //     myEmail: yup
  //       .string()
  //       .email("이메일 형식이 적합하지 않습니다")
  //       .required("반드시 입력해야하는 필수 사항입니다"),
  //     myPassword: yup
  //       .string()
  //       .min(4, "비밀번호는 최소 4자리 이상입나다")
  //       .max(15, "비밀번호는 최대 15자리까지 입니다")
  //       .required("비밀번호는 반드시 입력해주세요"),
  //   });

  // const { register, handleSubmit, formState } = useForm({
  //   mode: "onChange",
  //   resolver: yupResolver(schema),
  // });

  function onClickLogin(data: FormValues) {
    console.log(data);
  }

  return (
    <MyFormUI
      // handleSubmit={handleSubmit}
      // register={register}
      onClickLogin={onClickLogin}
      // formState={formState}
    />
  );
}
