import { ChangeEvent, RefObject } from "react";

export interface IPropsUploads01 {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IPropsUploads01UI {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: string;
  onClickUploadImages: () => void;
  onUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
