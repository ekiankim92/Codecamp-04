import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import BoardEditUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardEdit(props) {
  const router = useRouter();

  const [color, setColor] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [middleComment, setMiddleComment] = useState("");
  const [middleBodyError, setMiddleBodyError] = useState("");

  // youtube
  const [youtubeUrl, setYoutubeUrl] = useState("");

  function SetNames(event) {
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
  }

  function SetPassword(event) {
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
  }

  function TitleName(event) {
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
  }

  function BodyParagraph(event) {
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
  }

  //     function ChangeBackground(event) {
  //       event.target.style.background = "yellow";
  //     }

  //     function changeMouseLeave (event){
  //       event.target.style.background= "";
  //   }

  // 등록
  async function BackEndPush() {
    if (!name) {
      setNameError("이름을 등록해 주세요");
    }

    //   if (name === '') {
    //     setNameError('이름을 등록해 주세요')
    // }

    //  else {
    //   setNameError("")
    // }

    if (!password) {
      setPasswordError("비밀번호를 입력해 주세요");
    }

    if (!title) {
      setTitleError("제목을 등록해 주세요");
    }

    if (!middleComment) {
      setMiddleBodyError("내용을 입력해 주세요");
    }

    //   if (name !== "" && password !== "" && title !== "" && middleComment !== "") {
    if (name && password && title && middleComment) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: middleComment,
              youtubeUrl,
              // boardAddress: {
              //   zipcode,
              //   address,
              //   addressDetail,
              // },
            },
          },
        });
        console.log(result);
        router.push(`/board/${result.data.createBoard._id}`);
        alert("등록되었습니다");
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  function YoutubeVideo(event) {
    setYoutubeUrl(event.target.value);
    console.log(youtubeUrl);
  }

  // 수정
  async function BoardEdit() {
    const MyVariables = {
      boardId: router.query.content,
      updateBoardInput: {},
      password,
    };

    if (name !== "") {
      MyVariables.writer = name;
    }

    if (middleComment !== "") {
      MyVariables.updateBoardInput.contents = middleComment;
    }

    if (title !== "") {
      MyVariables.updateBoardInput.title = title;
    }

    try {
      const result = await updateBoard({
        variables: MyVariables,
        // updateBoardInput: {
        //   title,
        //   contents: middleComment
        // },
        //   password,
        //   boardId: router.query.content
      });
      router.push(`/board/${router.query.content}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  // 주소 등록
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipecode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  function ZipecodeInfo(event) {
    setZipecode(event.target.value);
  }

  function AddressInfo(event) {
    setAddress(event.target.value);
  }

  function AddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    console.log(data);
    setZipecode(data.zonecode);
    setAddress(data.address);
    setAddressDetail(data.addressDetail);
    setIsOpen((prev) => !prev);
  };

  return (
    <BoardEditUI
      SetNames={SetNames}
      SetPassword={SetPassword}
      TitleName={TitleName}
      BodyParagraph={BodyParagraph}
      BackEndPush={BackEndPush}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      middleBodyError={middleBodyError}
      color={color}
      BoardEdit={BoardEdit}
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
    />
  );
}
