import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CallbackPromiseAsyncAwaitPage() {
  const [myCallBack, setMyCallBack] = useState([]);
  const [myPromise, setMyPromise] = useState([]);
  const [myAsyncAwait, setMyAsyncAwait] = useState([]);

  const onClickCallback = () => {
    const ccc = new XMLHttpRequest();
    ccc.open("get", "http://numbersapi.com/random?min=1&max=200");
    ccc.send();
    ccc.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];

      const aaa = new XMLHttpRequest();
      aaa.open("get", `https://koreanjson.com/posts/${num}`); // get 요청을 보내는거임
      aaa.send();
      aaa.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        console.log(userId);

        const aaa2 = new XMLHttpRequest();
        // prettier-ignore
        aaa2.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        aaa2.send();
        aaa2.addEventListener("load", (res: any) => {
          const result = JSON.parse(res.target.response);
          setMyCallBack(result);
        });
      });
    });
  };

  //   new Promise ((resolve,reject) => {
  //       외부에 요청하기 또는 비동기작업하기
  //       if (성공) resolve ()
  //       if (실패) reject ()
  //   })

  const onClickPromise = () => {
    console.log("이것은 1번입니다");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res: any) => {
        // 앞에께 끝나고 나서 then 이 실행이됨
        console.log("이것은 3번입니다"); // 다 받아지고 나면 3번 시작
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`); // 해당하는 번호에 게시글을 요청
      })
      .then((res) => {
        const userId = res.data.UserId;
        // prettier-ignore
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`)
      })
      .then((res) => {
        setMyPromise(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("이것은 2번입니다"); // 2번 시작
  };

  const onClickAsync = async () => {
    // prettier-ignore
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    // prettier-ignore
    const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    // prettier-ignore
    const res3 = await axios.get(`https://koreanjson.com/posts?userId=${userId}`)
    setMyAsyncAwait(res3.data);
  };

  return (
    <>
      <h1>콜백과 친구들</h1>
      <div>
        <div>
          결과:
          {myCallBack.map((el: any) => (
            <div key={uuidv4()}>{el.title}</div>
          ))}
        </div>
      </div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <div>
        <div>
          결과:
          {myPromise.map((el: any) => (
            <div key={uuidv4()}>{el.title}</div>
          ))}
        </div>
      </div>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <div>
        <div>
          결과:
          {myAsyncAwait.map((el: any) => (
            <div key={uuidv4()}>{el.title}</div>
          ))}
        </div>
      </div>
      <button onClick={onClickAsync}>Async 요청하기</button>
    </>
  );
}
