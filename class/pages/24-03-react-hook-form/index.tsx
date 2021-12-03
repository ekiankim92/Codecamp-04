import { useForm } from "react-hook-form";

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  function onClickLogin(data: FormValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      Email: <input type="text" {...register("myEmail")} />
      Password: <input type="password" {...register("myPassword")} />
      <button>Log In</button>
    </form>
  );
}
