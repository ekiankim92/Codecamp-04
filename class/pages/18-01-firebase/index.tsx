import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { firebaseAPP } from "../_app";

export default function FirebasePage() {
  async function onClickSubmit() {
    // const board = collection(getFirestore(firebaseAPP), "board");
    // await addDoc(board, {
    //   writer: "철수",
    //   title: "제목입니다",
    //   contents: "내용입니다",
    // });

    const board = collection(getFirestore(firebaseAPP), "board");
    await addDoc(board, {
      writer: "Ian",
      title: "Please be mine",
      contents: "Do you want to build a snowman?",
    });

    const product = collection(getFirestore(firebaseAPP), "product");
    await addDoc(product, {
      seller: "영희",
      name: "리모콘",
      contents: "좋은 리모콘",
    });
  }

  async function onClickFetch() {
    const board = collection(getFirestore(firebaseAPP), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }

  return (
    <>
      <div>파이어베이스 연습 페이지 입니다</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
