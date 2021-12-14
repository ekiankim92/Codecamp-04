import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IProps {
  data?: Pick<IQuery, "fetchBoardComments">;
}

export interface Iprops2 {
  el: IBoardComment;
}
