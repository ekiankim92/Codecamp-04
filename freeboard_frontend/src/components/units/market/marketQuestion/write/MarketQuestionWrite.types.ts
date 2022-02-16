import { ChangeEvent } from "react";
import { IMutation } from "../../../../../commons/types/generated/types";

export interface FormValues {
  contents: string;
}

export interface IPropsMarketQuestionWrite {
  isEdit?: boolean | undefined;
  contents?: string;
  isSubmitting?: boolean;
  el?: any;
  setIsEdit?: any;
  createUseditemQuestion?: Pick<IMutation, "createUseditemQuestion">;
  updateUseditemQuestion?: Pick<IMutation, "updateUseditemQuestion">;
}

export interface IPropsMarketQuestionWriteUI {
  contents: string;
  isEdit?: boolean | undefined;
  el: any;
  isSubmitting: boolean;
  onClickWriteQuestion: (data: FormValues) => void;
  onClickQuestionUpdate: () => void;
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
}
