import {} from "react";

export interface IPropsBoardDetailUI {
  BoardListDeleteButton: () => void;
  ButtonToBoardList: () => void;
  // ButtonToBoardList: (event: MouseEvent<HTMLDivElement>) => void
  // isEdit: boolean
  data?: any;
}
