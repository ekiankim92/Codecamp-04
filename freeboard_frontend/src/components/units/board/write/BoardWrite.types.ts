import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardEdit {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
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
  BodyParagraph: (event: ChangeEvent<HTMLInputElement>) => void;
  YoutubeVideo: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  color?: color;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  zipcode: string;
  address: string;
  addressDetail: string;
  isOpen: boolean;
  youtubeUrl: string;
  fileRef: any;
}
