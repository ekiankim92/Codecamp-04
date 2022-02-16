import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardEdit {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ISubmitButtonProps {
  color: any;
}

export interface IPropsBoardEditUI {
  isEdit: boolean;
  nameError: string;
  passwordError: string;
  data?: Pick<IQuery, "fetchBoard">;
  titleError: string;
  middleBodyError: string;
  images: string[];
  onClickMyImages: () => void;
  SetNames: (event: ChangeEvent<HTMLInputElement>) => void;
  SetPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  TitleName: (event: ChangeEvent<HTMLInputElement>) => void;
  BodyParagraph: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  YoutubeVideo: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: any;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  zipcode: string;
  address: string;
  addressDetail: string;
  isOpen: boolean;
  youtubeUrl: string;
  fileRef: any;
  color: any;
}
