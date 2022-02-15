import { ChangeEvent } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardDetailUI {
  likeBoard?: Pick<IMutation, "likeBoard">;
  dislikeBoard?: Pick<IMutation, "dislikeBoard">;
  deleteBoard?: Pick<IMutation, "deleteBoard">;
  data?: Pick<IQuery, "fetchBoard">;
  count: number;
  ButtonToBoardList: () => void;
  BoardListDeleteButton: () => void;
  LkeCount: () => void;
  DislikeCount: () => void;
  onClickCount: () => void;
  onClickEdit: () => void;
  onError?: (event: ChangeEvent<HTMLImageElement>) => void;
}
