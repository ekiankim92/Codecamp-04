export default function Uploads01UI(props) {
  return (
    <>
      <div>Hello World</div>
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
      <input
        type="file"
        ref={props.fileRef}
        onChange={props.onUploadFile}
        style={{ display: "none" }}
      />
    </>
  );
}
