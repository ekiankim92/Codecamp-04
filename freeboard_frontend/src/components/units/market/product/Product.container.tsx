import ProductUI from "./Product.presenter";
import { FormValues } from "./Product.types";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE, CREATE_USED_ITEM } from "./Product.queries";

export default function Product() {
  const router = useRouter();

  // uploading picture
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [images, setImages] = useState([]);
  const fileRef = useRef(null);

  const onClickMyImages = () => {
    fileRef.current?.click();
  };

  // uploading picture
  async function onUploadFile(event) {
    const myFile = event.target.files?.[0];
    if (!myFile?.size) {
      alert("There's no file");
      return;
    }
    if (myFile.size > 5 * 1024 * 1024) {
      alert("File is too big");
      return;
    }
    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png 업로드 가능합니다");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    setImages(result.data.uploadFile.url);
    console.log(result);
  }

  async function onClickSubmit(data: FormValues) {
    console.log(data);
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: [data.tags],
          images: [images],
        },
      },
    });
    console.log(result);
    router.push(`/market/${result.data.createUseditem._id}`);
  }

  return (
    <ProductUI
      onClickSubmit={onClickSubmit}
      onUploadFile={onUploadFile}
      onClickMyImages={onClickMyImages}
    />
  );
}
