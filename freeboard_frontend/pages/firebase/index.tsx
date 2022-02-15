import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";
import { useState } from "react";
import styled from "@emotion/styled";
const MyInput = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ebeb8d;
`;

const MyInputWriter = styled.div`
  width: 50px;
  height: 50px;
  background-color: #5d5d8b;
`;

const MyInputTitle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #429442;
`;

const MyInputContents = styled.div`
  width: 50px;
  height: 50px;
  background-color: #4e4e0c;
`;

export default function FirebasePage() {
  const [myWriter, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [myData, setMyData] = useState([]);
  const [deleteData] = useState([]);

  //   spread 연산자

  //   const [userInfo, setUserInfo] = useState({
  //     writer: "",
  //     title: "",
  //     contents: "",
  //   });

  // 게시글 등록
  async function onClickSubmit() {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: myWriter,
      title: title,
      contents: contents,
    });
  }

  // 게시글 조회
  async function onClickFetch() {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    setMyData(result.docs.map((el) => el.data()));

    // console.log(boardId);
    // console.log(boardId[0]);
    // console.log(boardId[1]);
    console.log(result.docs);
  }

  // 게시글 삭제
  async function onClickDelete(event) {
    const result = await doc(
      getFirestore(firebaseApp),
      "board",
      event.target.id
    );
    deleteDoc(result);
  }

  //   spread 연산자

  //   async function onClickSubmit() {
  //     const board = collection(getFirestore(firebaseApp), "board");
  //     await addDoc(board, {
  //       ...userInfo,
  //     });
  //   }
  //   const onChngeInfo = (event: ChangeEvent<HTMLInputElement>) => {
  //     setUserInfo({
  //       ...userInfo,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  function userWriter(event) {
    setWriter(event.target.value);
  }

  function userTitle(event) {
    setTitle(event.target.value);
  }

  function userContents(event) {
    setContents(event.target.value);
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <input type="text" onChange={userWriter} name="writer" />
      {/* <div>{userInfo.writer}</div> */}
      <br />
      <input type="text" onChange={userTitle} name="title" />
      {/* <div>{userInfo.title}</div> */}
      <br />
      <input type="text" onChange={userContents} name="contents" />
      {/* <div>{userInfo.contents}</div> */}
      <br />
      <button onClick={onClickSubmit}>Click</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      {myData.map((el, index) => (
        <MyInput key={el.id}>
          <MyInputWriter id={el.id}>{el.myWriter}</MyInputWriter>
          <MyInputTitle id={el.id}>{el.title}</MyInputTitle>
          <MyInputContents id={el.id}>{el.contents}</MyInputContents>
          <button id={deleteData[index]} onClick={onClickDelete}>
            Delete
          </button>
        </MyInput>
      ))}
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
