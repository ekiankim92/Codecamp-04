import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";
import { ChangeEvent, useState } from "react";

export default function FirebasePage() {
  //   const [writer, setWriter] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [contents, setContents] = useState("");

  const [userInfo, setUserInfo] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  async function onClickFetch() {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const boardId = result.docs.map((el) => el.id);
    console.log(boardId);
    console.log(boardId[0]);
    console.log(boardId[1]);
  }

  async function onClickSubmit() {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      ...userInfo,
    });
  }
  const onChngeInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  //   function userWriter(event) {
  //     setWriter(event.target.value);
  //     console.log(writer);
  //   }

  //   function userTitle(event) {
  //     setTitle(event.target.value);
  //   }

  //   function userContents(event) {
  //     setContents(event.target.value);
  //   }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <input type="text" onChange={onChngeInfo} name="writer" />
      {/* <div>{userInfo.writer}</div> */}
      <br />
      <input type="text" onChange={onChngeInfo} name="title" />
      {/* <div>{userInfo.title}</div> */}
      <br />
      <input type="text" onChange={onChngeInfo} name="contents" />
      {/* <div>{userInfo.contents}</div> */}
      <br />
      <button onClick={onClickSubmit}>Click</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
      </div>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
