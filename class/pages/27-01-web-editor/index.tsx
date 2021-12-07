// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// will not want to activate in the ssr (server side )
// 서버에서는 임포트 자체가 안돼서, 브라우저를 다이나믹으로 바꿨기 때문에 리엑트퀼이 보여짐

export default function WebEditorPage() {
  function handleChange(value: string) {
    console.log(value);
  }

  //   if (process.browser) {
  //     console.log("I'm Browser!");
  //   } else {
  //     console.log("I am frontend server");
  //   }

  return (
    <>
      Writer: <input type="text" /> <br />
      Password: <input type="password" /> <br />
      Title: <input type="text" /> <br />
      {/* Contents: {process.browser && <ReactQuill onChange={handleChange} />}<br /> */}
      {/* // we need to use the dynamic import due to server and browser colliding   */}
      Contents: <ReactQuill onChange={handleChange} />
      <br />
      <button>Submit</button>
    </>
  );
}
