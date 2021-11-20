import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

// key cannot be in key:value settings
// event.target.id means :
// const profile = {
//     name: 'ian',
//     age: 5,
//     event: {
//         target:{
//             id: "askdjfkasfj"
//         }
//     }
// }

export default function GraphqlMutationBoard3Page() {
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  function onChangeMyInputs(event) {
    setMyInputs({
      //   writer: myInputs.writer,
      //   contents: myInputs.contents,
      //   title: myInputs.title,
      ...myInputs,
      [event.target.name]: event.target.value,
    });
    // 제복변경시

    // setMyInputs({
    //   writer: myInputs.writer,
    //   title: myInputs.title,
    //   contents: myInputs.contents,
    //   [event.target.value]: event.target.value,
    // });
    // 내용 변경시

    // setMyInputs({
    //   title: myInputs.title,
    //   contents: myInputs.contents,
    //   writer: myInputs.writer,
    //   [event.target.value]: event.target.value,
    // });
    // 작성자 변경시
  }

  // const [myWriter, setMyWriter] = useState("");
  // const [myTitle, setMyTitle] = useState("");
  // const [myContents, setMyContents] = useState("");
  // This is now covered by the objects in myInputs

  const [createBoard] = useMutation(CREATE_BOARD);

  //   function onChangeMyWriter(event) {
  //     setMyWriter(event.target.value);
  //   }

  //   function onChangeMyTitle(event) {
  //     setMyTitle(event.target.value);
  //   }

  //   function onChangeMyContents(event) {
  //     setMyContents(event.target.value);
  //   }

  async function zzz() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  }

  return (
    <>
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} />{" "}
      <br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={zzz}>게시물 등록하기</button>
    </>
  );
}
