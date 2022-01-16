import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads01.queries";
import ImageValidation from "./Uploads01.validation";
import { useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export default function Uploads01(props) {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUploadImages = () => {
    fileRef.current?.click();
  };

  const onUploadFile = async (event) => {
    const file = ImageValidation(event.target.files?.[0]);

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
    // setImages([result.data.uploadFile.url]);
    // console.log(result);
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
