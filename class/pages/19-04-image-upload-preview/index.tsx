import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [myImages, setMyImages] = useState<string[]>(["", "", ""]);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    // const newImages =
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  }

  //, myImages[1], myImages[2]

  function onClickMyImage() {
    fileRef.current?.click();
  }

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickMyImage}
      >
        이미지 선택
      </div>
      <img src={`https://storage.googleapis.com/${myImages[0]}`} />
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
    </>
    // 숨어있지만 위에껄 클릭하지만 밑에께 실행이됨
  );
}
