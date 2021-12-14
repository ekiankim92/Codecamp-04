import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
      writer
      contents
    }
  }
`;

export default function ImageUploadPreviewSubmitPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event) => {
    const file = event.target.files[0];
    console.log(file);

    // 자바스크립트에서 있는 기능. 내 컴퓨터에서 읽을수있는. 그대신 내 컴퓨터에서 밖에 못봄
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target.result);
      setMyFile(file);
    };
  };

  const onClickSubmit = async () => {
    let myImageUrl = "";
    // 1. 파일 업로드
    if (myFile) {
      const result1 = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      myImageUrl = result1.data?.uploadFile.url || "";
    }

    // 2. 업로드 된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "숙희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지 업로드",
          images: [myImageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
