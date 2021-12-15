import * as S from "./MarketQuestionWrite.styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyContext } from "../../../../../../pages/market/[marketId]/edit";

export default function MarketQuestionWriteUI(props) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const { isEdit } = useContext(MyContext);

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(
            isEdit ? props.onClickQuestionUpdate : props.onClickWriteQuestion
          )}
        >
          <S.Wrapper>
            <S.Question_Input
              type="text"
              placeholder="Anything related to personal information may be deleted and the responsibilies lies upon the writer"
              {...register("contents")}
              onChange={props.onChangeContent}
              maxLength={100}
            />
            {/* <div>{props.contents.length}/100</div> */}
            <button>{isEdit ? "Edit" : "Inquiry"}</button>
            <button type="reset">Clear</button>
          </S.Wrapper>
        </form>
      </div>
    </>
  );
}
