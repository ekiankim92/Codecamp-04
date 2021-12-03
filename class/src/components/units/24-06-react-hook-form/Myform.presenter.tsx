import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/inputs01";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Myform.validations";

export default function MyFormUI(props) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClickLogin)}>
      이메일: <Input01 type="type" register={register("myEmail")} />
      {/* Email: <input type="text" {...register("myEmail")} /> */}
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <Input01 type="password" register={register("myPassword")} />
      {/* Password: <input type="password" {...register("myPassword")} /> */}
      <div>{formState.errors.myPassword?.message}</div>
      <Button01 name="로그인하기" isValid={formState.isValid} type="submit" />
      {/* <MyButton isValid={props.formState.isValid}>Log In</MyButton> */}
      {/* default 값은 submit  */}
      {/* <button type="reset">초기화하기</button>
          <button onClick={onClickMove}>목록으로 이동하기</button> */}
    </form>
  );
}
