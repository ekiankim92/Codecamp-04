import ProductUI from "./Product.presenter";
import { FormValues } from "./Product.types";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  UPLOAD_FILE,
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
} from "./Product.queries";
import { FETCH_USED_ITEM } from "../detail/ProductDetail.queries";

export default function Product() {
  const [hashtag, setHashtag] = useState<String[]>([]);

  const router = useRouter();

  // uploading picture
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // posting product
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  // updating product
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  // setting image
  const [images, setImages] = useState([]);
  // image preview
  const fileRef = useRef(null);

  const onClickMyImages = () => {
    fileRef.current?.click();
  };

  // edit default data
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.marketId,
    },
  });

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
    setImages([result.data.uploadFile.url]);
    console.log(result);
  }

  // product posting
  async function onClickSubmit(data: FormValues) {
    alert("testing");
    console.log(data);
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: hashtag,
          images,
        },
      },
    });
    console.log(result);
    router.push(`/market/${result.data.createUseditem._id}`);
  }

  //update product posting
  const onClickProductUpdate = async (data: FormValues) => {
    alert("testing");
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashtag,
            images,
          },
          useditemId: router.query.marketId,
        },
      });
      console.log(result);
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ProductUI
      data={data}
      fileRef={fileRef}
      images={images}
      onClickSubmit={onClickSubmit}
      onUploadFile={onUploadFile}
      onClickMyImages={onClickMyImages}
      onClickProductUpdate={onClickProductUpdate}
      hashtag={hashtag}
      setHashtag={setHashtag}
    />
  );
}
