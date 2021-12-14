import * as S from "./MarketQuestionWrite.styles";
import { useForm } from "react-hook-form";

export default function MarketQuestionWriteUI(props) {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(props.onClickWriteQuestion)}>
          <S.Wrapper>
            <S.Question_Input
              type="text"
              placeholder="Anything related to personal information may be deleted and the responsibilies lies upon the writer"
              {...register("contents")}
            />
            <button>Inquiry</button>
            <button type="reset">Clear</button>
          </S.Wrapper>
        </form>
      </div>
    </>
  );
}
