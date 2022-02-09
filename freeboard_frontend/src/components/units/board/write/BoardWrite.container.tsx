import { useMutation } from "@apollo/client";
import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/router";
import BoardEditUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { IPropsBoardEdit } from "./BoardWrite.types";
import { Modal } from "antd";

export default function BoardEdit(props: IPropsBoardEdit) {
  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [middleComment, setMiddleComment] = useState<string>("");
  const [middleBodyError, setMiddleBodyError] = useState<string>("");
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipecode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const [color, setColor] = useState<boolean>(false);

  const fileRef = useRef<string[]>(null);

  const onClickMyImages = () => {
    fileRef.current?.click();
  };

  const SetNames = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== " ") {
      setNameError("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      middleComment !== ""
    ) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const SetPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (
      name !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      middleComment !== ""
    ) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const TitleName = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (
      name !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      middleComment !== ""
    ) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const BodyParagraph = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMiddleComment(event.target.value);
    if (event.target.value !== "") {
      setMiddleBodyError("");
    }
    if (
      name !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const YoutubeVideo = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
    console.log(youtubeUrl);
  };

  const onClickSubmit = async () => {
    if (!name) {
      setNameError("이름을 등록해 주세요");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해 주세요");
    }

    if (!title) {
      setTitleError("제목을 등록해 주세요");
    }

    if (!middleComment) {
      setMiddleBodyError("내용을 입력해 주세요");
    }

    if (name && password && title && middleComment) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password,
              title,
              contents: middleComment,
              youtubeUrl,
              images,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        console.log(result);
        router.push(`/board/${result.data?.createBoard._id}`);
        Modal.success({ content: "등록되었습니다" });
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    if (!name && !title && !middleComment) {
      Modal.error({ content: "수정된 내용이 없습니다" });
      return;
    }
    // const MyVariables = {
    //   boardId: String(router.query.content),
    //   updateBoardInput: {},
    //   password,
    // };

    try {
      const result = await updateBoard({
        // variables: MyVariables,
        variables: {
          boardId: String(router.query.content),
          password,
          updateBoardInput: {
            title,
            contents: middleComment,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images,
          },
        },
      });
      console.log(result);
      router.push(`/board/${router.query.content}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setZipecode(data.zonecode);
    setAddress(data.address);
    setAddressDetail(data.addressDetail);
    setIsOpen((prev) => !prev);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];

    if (!myFile?.size) {
      alert("파일이 없습니다");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다");
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
    setImages([result.data?.uploadFile.url]);
  };

  return (
    <BoardEditUI
      SetNames={SetNames}
      SetPassword={SetPassword}
      TitleName={TitleName}
      BodyParagraph={BodyParagraph}
      onClickSubmit={onClickSubmit}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      middleBodyError={middleBodyError}
      color={color}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      data={props.data}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      isOpen={isOpen}
      youtubeUrl={youtubeUrl}
      YoutubeVideo={YoutubeVideo}
      onChangeFile={onChangeFile}
      onClickMyImages={onClickMyImages}
      images={images}
      fileRef={fileRef}
    />
  );
}
