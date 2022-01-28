import { ChangeEvent } from "react";
import { IMutation } from "../../../../../commons/types/generated/types";

export interface FormValues {
  contents: string;
}

export interface IPropsMarketQuestionWrite {
  contents?: string;
  isSubmitting?: boolean;
  el?: any;
  isEdit: boolean;
  setIsEdit: any;
  createUseditemQuestion?: Pick<IMutation, "createUseditemQuestion">;
  updateUseditemQuestion?: Pick<IMutation, "updateUseditemQuestion">;
}

export interface IPropsMarketQuestionWriteUI {
  isEdit: boolean;
  contents: string;
  el: any;
  isSubmitting: boolean;
  onClickWriteQuestion: (data: FormValues) => void;
  onClickQuestionUpdate: () => void;
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
}
