// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
// import styled from "@emotion/styled";
import MyForm from "../../src/components/units/24-06-react-hook-form/Myform.container";

// const schema = yup.object().shape({
//   myEmail: yup
//     .string()
//     .email("이메일 형식이 적합하지 않습니다")
//     .required("반드시 입력해야하는 필수 사항입니다"),
//   myPassword: yup
//     .string()
//     .min(4, "비밀번호는 최소 4자리 이상입나다")
//     .max(15, "비밀번호는 최대 15자리까지 입니다")
//     .required("비밀번호는 반드시 입력해주세요"),
// });

// interface FormValues {
//   myEmail: string;
//   myPassword: string;
// }

// interface IMyButtonProps {
//   isValid: boolean;
// }

// const MyButton = styled.button`
//   background-color: ${(props: IMyButtonProps) =>
//     props.isValid ? "yellow" : ""};
// `;

export default function ReactHookFormYupPage() {
  // const { register, handleSubmit, formState } = useForm({
  //   mode: "onChange",
  //   resolver: yupResolver(schema),
  // });

  // function onClickLogin(data: FormValues) {
  //   console.log(data);
  // }

  // return (
  //   <form onSubmit={handleSubmit(onClickLogin)}>
  //     Email: <input type="text" {...register("myEmail")} />
  //     <div>{formState.errors.myEmail?.message}</div>
  //     Password: <input type="password" {...register("myPassword")} />
  //     <div>{formState.errors.myPassword?.message}</div>
  //     <MyButton isValid={formState.isValid}>Log In</MyButton>
  //     {/* default 값은 submit  */}
  //     {/* <button type="reset">초기화하기</button>
  //     <button onClick={onClickMove}>목록으로 이동하기</button> */}
  //   </form>
  // );

  return <MyForm />;
}
