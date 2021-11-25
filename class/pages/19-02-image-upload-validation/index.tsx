import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadValidationPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [myImages, setMyImages] = useState<string[]>([]);
  // 앞에 myImages 써야한다면 console 로 찍거나 아니면 지우고 comma 하나로 남김
  // const [, setMyImages] = useState<string[]>([]);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    // 배열인게 확실해야지만 파일이 있을때 0번째를 갖고옴
    console.log(myFile);

    // if 로 파일 검증
    if (!myFile?.size) {
      alert("파일이 없습니다");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. 제한 5MB");
      return;
    }
    // 5메가 이상이면. 사이즈가 크면 스토리지 비용이 더 높음

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png 만 업로드 가능합니다");
      return;
    }
    // jpeg 가 아니고 png 도 아니면 리턴

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <input type="file" />
    </>
  );
}
