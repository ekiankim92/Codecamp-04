import * as S from "./Uploads01.styles";
import { IPropsUploads01UI } from "./Uploads01.types";

export default function Uploads01UI(props: IPropsUploads01UI) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <S.Image
          onClick={props.onClickUploadImages}
          src={
            props.fileUrl
              ? `https://storage.googleapis.com/${props.fileUrl}`
              : `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <S.UploadButton onClick={props.onClickUploadImages}></S.UploadButton>
      )}
      <input
        type="file"
        ref={props.fileRef}
        onChange={props.onUploadFile}
        // style={{ display: "none" }}
      />
    </>
  );
}
