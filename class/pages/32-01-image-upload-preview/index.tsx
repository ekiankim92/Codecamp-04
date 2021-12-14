import { useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event) => {
    const myFile = event.target.files[0];
    console.log(myFile);

    // 자바스크립트에서 있는 기능. 내 컴퓨터에서 읽을수있는. 그대신 내 컴퓨터에서 밖에 못봄
    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target.result);
    };
  };

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
    </>
  );
}
