import { ChangeEvent, useCallback, useState, useForm } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import * as Sentry from "@sentry/nextjs";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function IsSubmittingSentryPage() {
  // how to block multiple submitting in useForm
  //   const { formState } = useState();
  //   formState.isSubmitting;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [inputs, setInputs] = useState(inputsInit);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeInput = useCallback(
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    },
    []
  );

  //   const onClickSubmit = useCallback(async () => {
  //     setIsSubmitting(true);
  //     try {
  //       const result = await createBoard({
  //         variables: {
  //           createBoardInput: { ...inputs },
  //         },
  //       });
  //       console.log(result);
  //       //   Modal.confirm({ content: "등록에 성공하셨습니다" });
  //       // router.push 로 다이나믹 라우팅 => result.data.createBoard._id
  //       setIsSubmitting(false);
  //     } catch (error: any) {
  //       Modal.error({
  //         content: error.message,
  //       });
  //     }
  //   }, [inputs]);

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      throw new Error("에러 강제로 발생시킴!!");
      // const result = await createBoard({
      //   variables: {
      //     createBoardInput: { ...inputs },
      //   },
      // });
      // console.log(result);
      //   Modal.confirm({ content: "등록에 성공하셨습니다" });
      // router.push 로 다이나믹 라우팅 => result.data.createBoard._id
      // setIsSubmitting(false);
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
      Sentry.captureException(error);
    }
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeInput("writer")} /> <br />
      비밀번호: <input type="password" onChange={onChangeInput("password")} />
      <br />
      제목: <input type="text" onChange={onChangeInput("title")} />
      <br />
      내용: <input type="text" onChange={onChangeInput("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기
      </button>
    </>
  );
}
