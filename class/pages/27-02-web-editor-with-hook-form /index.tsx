// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// will not want to activate in the ssr (server side )
// 서버에서는 임포트 자체가 안돼서, 브라우저를 다이나믹으로 바꿨기 때문에 리엑트퀼이 보여짐

export default function WebEditorWithHookFormPage() {
  const { handleSubmit, register, setValue, trigger } = useForm({
    // setValue 는 무언가를 강제로 넣어주는거임
    mode: "onChange",
  });

  //   if (process.browser) {
  //     console.log("I'm Browser!");
  //   } else {
  //     console.log("I am frontend server");
  //   }

  function handleChange(value: string) {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // register 로 등록하지 않고, 강제로 값을 넣어주는 기능. 실무에서 다른 라이버리를 써도 똑같은 이름은 아니지만 비슷한 기능이있을꺼임
    // 강제로 넣었을뿐 onChange 가 먹질 않음. 그래서 값을 강제로 넣어줬을때 onChange 가 일어났다고 알려줘야함
    // trigger 이라는 기능으로 change 가 일어났다고 알려줘야함
    //  "<p><br></p>" 는 ReactQuill 에서 다 쓰고 지웠을때 콘솔에 나오는 값.
    trigger("contents");
    // onChange 됐는지 안됐는지 react-hook-form 에 알려주는 기능
  }

  return (
    <>
      Writer: <input type="text" {...register("writer")} /> <br />
      {/* 이렇게 하면 writer 라는 state 가 만들어진거임 */}
      Password: <input type="password" {...register("passwrd")} /> <br />
      Title: <input type="text" {...register("title")} /> <br />
      {/* Contents: {process.browser && <ReactQuill onChange={handleChange} />}<br /> */}
      {/* // we need to use the dynamic import due to server and browser colliding   */}
      Contents: <ReactQuill onChange={handleChange} />
      {/* 위에 있는 onChange 는 ReactQuill 라이버리 안에서 만든 온체인지임. 고로 ReactQull 로 안으로들어가는 props 콘셉. 실제로 onChange 가 아님 */}
      <br />
      <button>Submit</button>
    </>
  );
}
