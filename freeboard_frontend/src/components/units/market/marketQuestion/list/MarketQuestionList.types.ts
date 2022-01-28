import {
  IMutation,
  IQuery,
} from "../../../../../commons/types/generated/types";

export interface IPropsMarketQuestionListUI {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  userData?: Pick<IQuery, "fetchUserLoggedIn">;
}

export interface IPropsMarketQuestionListUIItem {
  el: any;
  userData?: Pick<IQuery, "fetchUserLoggedIn">;
  deleteUseditemQuestion?: Pick<IMutation, "deleteUseditemQuestion">;
}
