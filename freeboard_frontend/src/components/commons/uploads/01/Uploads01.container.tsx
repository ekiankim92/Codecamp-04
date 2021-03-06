import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads01.queries";
import ImageValidation from "./Uploads01.validation";
import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import { IPropsUploads01 } from "./Uploads01.types";

export default function Uploads01(props: IPropsUploads01) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUploadImages = () => {
    fileRef.current?.click();
  };

  const onUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = ImageValidation(event.target.files?.[0]);
    if (!file) return;
    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error)
        console.log("UploadImageError:", error.message);
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUploadImages={onClickUploadImages}
      onUploadFile={onUploadFile}
      defaultFileUrl={props.defaultFileUrl}
    />
  );
}
