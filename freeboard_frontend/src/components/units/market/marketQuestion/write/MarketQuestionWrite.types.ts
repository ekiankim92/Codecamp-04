import { ChangeEvent } from "react";

export interface FormValues {
  contents: string;
}

export interface IPropsMarketQuestionWrite {
  contents: string;
  isSubmitting: boolean;
  el?: any;
  isEdit: boolean;
  setIsEdit: any;
}

export interface IPropsMarketQuestionWriteUI {
  isEdit: boolean;
  contents: string;
  el?: any;
  isSubmitting: boolean;
  onClickWriteQuestion: (data: FormValues) => void;
  onClickQuestionUpdate: () => void;
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
}
