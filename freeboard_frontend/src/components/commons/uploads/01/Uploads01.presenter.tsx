import * as S from "./Uploads01.styles";

export default function Uploads01UI(props) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <img
          onClick={props.onClickUploadImages}
          src={
            props.fileUrl
              ? `https://storage.googleapis.com/${props.fileUrl}`
              : `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <button onClick={props.onClickUploadImages}>
          <>+</>
          <>Upload</>
        </button>
      )}
      <input type="file" ref={props.fileRef} onChange={props.onUploadFile} />
    </>
  );
}
