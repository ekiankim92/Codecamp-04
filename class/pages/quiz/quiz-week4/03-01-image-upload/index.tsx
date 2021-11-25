import { useState, ChangeEvent } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      writer
      password
      title
      contents
      image
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImage] = useState<string[]>([]);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images,
        },
      },
    });
    console.log(result);
  }

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result);
    setImage([result.data.uploadFile.url]);
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      비밀번호: <input type="password" onChange={onChangePassword} /> <br />
      제목: <input type="text" onChange={onChangeTitle} /> <br />
      내용: <input type="text" onChange={onChangeContents} /> <br />
      <input onChange={onChangeFile} type="file" multiple /> <br />
      <button onClick={onClickSubmit}>Upload</button>
    </>
  );
}
