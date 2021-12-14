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
  const [myFiles, setMyFiles] = useState([]);
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
      setMyFiles((prev) => [...prev, file]);
    };
  };

  const onClickSubmit = async () => {
    let myImageUrls = ["", "", ""];

    if (myFiles.length) {
      // 1. 각각 올리기 테스트
      // 끝나고 다시 하고 끝나고 다시하고
      // const start = performance.now();
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // await uploadFile({ variables: { file: myFiles[0] } });
      // const end = performance.now();
      // console.log(end - start);
      //
      //
      //
      // 2. 동시 올리기 테스트
      // 동시에 다 요청이됨. 배열로 동시에 요청
      const start = performance.now();
      const result = await Promise.all([
        // Promise.all([ ... ]) 모두가 끝날때까지 다 기다리는거 vs. Promise.race([ ... ]) 동시에 요청을 뿌리는데 먼저 끝날걸 하나 캐치하는거임
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
      ]);
      const end = performance.now();
      console.log(end - start);

      // result = [result1, result2, result3... result10 ].map((el) => )
      // result.map((el) => el.data.uploadFile.url) => [url1, url2, url3...url10]
      // myImageUrls = result.map((el) => el.data.uploadFile.url)
      myImageUrls = result.map((el) => el.data?.uploadFile.url);
    }

    // 1. 파일 업로드
    // if (myFiles.length) {
    //   const result1 = await uploadFile({
    //     variables: {
    //       file: myFiles[0],
    //     },
    //   });
    //   myImageUrls[0] = result1.data?.uploadFile.url || "";

    //   const result2 = await uploadFile({
    //     variables: {
    //       file: myFiles[1],
    //     },
    //   });
    //   myImageUrls[1] = result2.data?.uploadFile.url || "";

    //   const result3 = await uploadFile({
    //     variables: {
    //       file: myFiles[2],
    //     },
    //   });
    //   myImageUrls[2] = result3.data?.uploadFile.url || "";

    //
    //
    //
    //
    // 2. 업로드 된 파일로 게시물 등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "숙희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지 업로드",
          images: [...myImageUrls],
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
