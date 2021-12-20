import * as S from "./MarketQuestionWrite.styles";
import { useForm } from "react-hook-form";

export default function MarketQuestionWriteUI(props) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(
            props.isEdit
              ? props.onClickQuestionUpdate
              : props.onClickWriteQuestion
          )}
        >
          <S.Wrapper>
            <S.Question_Input
              type="text"
              placeholder="Anything related to personal information may be deleted and the responsibilies lies upon the writer"
              {...register("contents")}
              onChange={props.onChangeContent}
              maxLength={100}
              defaultValue={props.el?.contents}
            />
            <div>{props.contents?.length}/100</div>
            <button disabled={props.isSubmitting}>
              {props.isEdit ? "Edit" : "Inquiry"}
            </button>
            <input type="button" value="Reply" onClick={props.onClickTesting} />
            <button type="reset">Clear</button>
          </S.Wrapper>
        </form>
      </div>
    </>
  );
}
