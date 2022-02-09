import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IBoardComment,
  IMutation,
} from "../../../../commons/types/generated/types";

export interface IPropsBoardCommentWrite {
  isEdit?: boolean;
  el?: IBoardComment;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsBoardCommentWriteUI {
  isEdit?: boolean;
  el?: IBoardComment;
  createBoardComment?: Pick<IMutation, "createBoardComment">;
  updateBoardComment?: Pick<IMutation, "updateBoardComment">;
  CommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  CommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  CommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  CreateCommentButton: () => void;
  CountingStars: (value: number) => void;
  onClickUpdate: () => void;
  contents: string;
  rating: number;
}
