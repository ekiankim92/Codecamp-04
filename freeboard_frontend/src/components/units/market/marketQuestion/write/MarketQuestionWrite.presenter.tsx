import * as S from "./MarketQuestionWrite.styles";
import { useForm } from "react-hook-form";
import { IPropsMarketQuestionWriteUI } from "./MarketQuestionWrite.types";

export default function MarketQuestionWriteUI(
  props: IPropsMarketQuestionWriteUI
) {
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
          {!props.isEdit && (
            <S.CommentWrapper>
              <img src="/market_images/comment.png" />
              <S.Header>Leave Your Comments Here:</S.Header>
            </S.CommentWrapper>
          )}
          <S.Wrapper>
            <S.QuestionInput
              type="text"
              placeholder="Anything related to personal information may be deleted and the responsibilies lies upon the writer"
              {...register("contents")}
              onChange={props.onChangeContent}
              maxLength={100}
              defaultValue={props.el?.contents}
            />
          </S.Wrapper>
          <S.BottomWrapper>
            <S.ButtonWrapper>
              {props.contents && (
                <S.WordCount>{props.contents?.length}/100</S.WordCount>
              )}
              <S.Button disabled={props.isSubmitting}>
                {props.isEdit ? "Edit" : "Comment"}
              </S.Button>
            </S.ButtonWrapper>
          </S.BottomWrapper>
        </form>
      </div>
    </>
  );
}
