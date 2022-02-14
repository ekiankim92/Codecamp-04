import {
  IMutation,
  IQuery,
  Maybe,
} from "../../../../commons/types/generated/types";

export interface FormValues {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  images: string[];
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface IMyButtonsProps {
  isValid: boolean;
}

export interface IPropsProduct {
  data?: any;
  createUseditem?: Pick<IMutation, "createUseditem">;
  updateUseditem?: Pick<IMutation, "updateUseditem">;
}

export interface IPropsProductUI {
  images: string[];
  hashtag: string[];
  setHashtag: (arg0: string[]) => void;
  address: string;
  addressOpen: boolean;
  zipcode: string;
  data?: Pick<IQuery, "fetchUseditem">;
  onClickSubmit: (data: FormValues) => void;
  onClickProductUpdate: (data: FormValues) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickSearchAddress: () => void;
  onToggleModal: () => void;
  onCompleteAddressSearch: (data: any) => void;
}
